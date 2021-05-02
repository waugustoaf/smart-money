import { getRealm } from '../services/Realm';
import { sub, format } from 'date-fns';
import _ from 'lodash';
import { convertEntryTS } from './convertEntryTS';

const getBalanceToDate = async (untilDays: number) => {
  const realm = await getRealm();
  let entries = realm.objects('Entry');
  const date = sub(new Date(), { days: untilDays });
  entries = entries.filtered(
    'entryAt >= $0 AND entryAt <= $1',
    date,
    new Date(),
  );
  const sum = entries.sum('amount');
  return sum;
};

export const getBalanceSumByDate = async (usedDays: number) => {
  const realm = await getRealm();
  const startBalance = (await getBalanceToDate(usedDays)) || 0;
  let entries = realm.objects('Entry');
  if (usedDays > 0) {
    const date = sub(new Date(), { days: usedDays });
    entries = entries.filtered(
      'entryAt >= $0 AND entryAt <= $1',
      date,
      new Date(),
    );
  }
  entries = entries.sorted('entryAt');

  let lodashEntries = _(convertEntryTS(entries))
    .groupBy(({ entryAt }) => format(new Date(entryAt), 'yyyyMMdd'))
    .map(entry => _.sumBy(entry, 'amount'))
    .map((amount, index, collection) => {
      return (
        (index === 0 ? startBalance : 0) +
        _.sum(_.slice(collection, 0, index)) +
        amount
      );
    });

  let finishArray = [] as number[];

  for (let item of _.toArray(lodashEntries)) {
    finishArray.push(Number(item));
  }

  return finishArray;
};
