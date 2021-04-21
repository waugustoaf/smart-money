import { Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { getRealm } from './Realm';

export const saveEntry = async () => {
  // AFTER RECEIVE ID
  const realm = await getRealm();
  let data = {};

  try {
    // VERIFICAR SE O ID EXISTE
    // if(id) {
    //   let currentTask = realm
    //     .objects('Entry')
    //     .filtered("id = '217dd6f7-1eea-40a2-9165-49751074be90'");
    // }
    
    realm.write(() => {
      data = {
        id: uuid(),
        amount: 126.4,
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
