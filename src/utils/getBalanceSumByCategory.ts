import { sub } from 'date-fns';
import _ from 'lodash';
import { v4 as uuid } from 'uuid';
import { ICategory } from '../interfaces/ICategory';
import { getRealm } from '../services/Realm';
import { Colors } from './colors';
import { convertEntryTS } from './convertEntryTS';

export interface FinishArrayProps {
  category: ICategory;
  amount: number;
}

export const getBalanceSumByCategory = async (
  usedDays: number,
  currentCategory: ICategory,
  showOthers = true,
) => {
  const realm = await getRealm();
  let entries = realm.objects('Entry');
  if(!!currentCategory.id) {
    entries = entries.filtered(`category.id = '${currentCategory.id}'`);
  }
  if (usedDays > 0) {
    const date = sub(new Date(), { days: usedDays });
    entries = entries.filtered(
      'entryAt >= $0 AND entryAt <= $1',
      date,
      new Date(),
    );
  }
  if (usedDays === -1) {
    entries = entries.filtered('entryAt >= $0', new Date());
  }

  let lodashEntries = _(convertEntryTS(entries))
    .groupBy(({ category }) => category?.id)
    .map(entry => ({
      category: _.omit(entry[0].category, 'entries'),
      amount: Math.abs(_.sumBy(entry, 'amount')),
    }))
    .orderBy('amount', 'desc')
    .filter(({ amount }) => amount > 0);

  const othersLimit = 7;

  if (showOthers && _.size(lodashEntries) >= othersLimit) {
    const data_primary = entries.slice(0, othersLimit);
    const data_secondary = {
      category: { id: uuid(), name: 'Outros', color: Colors.metal },
      amount: _(convertEntryTS(entries))
        .slice(othersLimit)
        .map(({ amount }) => amount)
        .sum(),
    };
    return formatLodashToArray([...data_primary, data_secondary]);
  }

  return formatLodashToArray(_.toArray(entries));
};

const formatLodashToArray = (array: Object[]) => {
  let finishArray = [] as FinishArrayProps[];

  for (let obj of _.toArray(array)) {
    finishArray.push((obj as unknown) as FinishArrayProps);
  }

  return finishArray;
};
