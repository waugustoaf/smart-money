import { Alert } from 'react-native';
import 'react-native-get-random-values';
import { IEntry } from '../interfaces/IEntry';
import { getRealm } from './Realm';

export const saveEntry = async (
  { amount, id, entryAt, isInit }: IEntry,
  isEditing: boolean,
) => {
  const realm = await getRealm();

  let data = {
    id: id,
    amount: amount,
    entryAt: entryAt,
    isInit: isInit,
  };

  try {
    if (isEditing) {
      const entries = (realm
        .objects('Entry')
        .filtered(`id = '${id}'`) as unknown) as IEntry[];
      realm.write(() => {
        entries[0].amount = amount;
        entries[0].entryAt = entryAt;
        entries[0].isInit = isInit;
      });
      return;
    }

    realm.write(() => {
      realm.create('Entry', data);
    });

    return data;
  } catch (err) {
    console.error('saveEntry :: error on save object', data);
    Alert.alert('Erro ao salvar os dados de entrada!');
  }
};

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry').sorted('entryAt', true);
  // realm.write(() => {
  //   realm.deleteAll();
  // });

  let entriesArray = [] as IEntry[];

  for (let entry of entries) {
    entriesArray.push(JSON.parse(JSON.stringify(entry)));
  }

  return entriesArray;
};

export const deleteEntry = async (id: string) => {
  const realm = await getRealm();

  const entry = realm.objects('Entry').filtered(`id = '${id}'`);
  try {
    realm.write(() => {
      realm.delete(entry[0]);
    });
  } catch (err) {
    console.error('deleteEntry :: error on delete object', entry[0]);
    Alert.alert('Erro ao excluir este dado de entrada!');
  }
}