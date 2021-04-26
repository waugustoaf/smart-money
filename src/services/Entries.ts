import { Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { IEntry } from '../interfaces/IEntry';
import { getRealm } from './Realm';

export const saveEntry = async ({ amount }: IEntry) => {
  // AFTER RECEIVE ID
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: uuid(),
        amount: amount,
        entryAt: new Date(),
        isInit: false,
      };

      realm.create('Entry', data);
    });
    console.log(data);

    return data;
  } catch (err) {
    Alert.alert('Erro ao salvar os dados de lançamento');
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
  }
};

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  return entries;
};
