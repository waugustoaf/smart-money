import { Alert } from 'react-native';
import 'react-native-get-random-values';
import { UpdateMode } from 'realm';
import { ICategory } from '../interfaces/ICategory';
import { IEntry } from '../interfaces/IEntry';
import { getRealm } from './Realm';
import { sub } from 'date-fns';

interface GetEntriesProps {
  days: number;
  category: ICategory;
}

export const saveEntry = async (
  {
    amount,
    id,
    entryAt,
    isInit,
    category,
    description,
    latitude,
    longitude,
    address,
    photo,
  }: IEntry,
  isEditing: boolean,
) => {
  const realm = await getRealm();

  let data = {
    id: id,
    amount: amount,
    entryAt: entryAt,
    isInit: isInit,
    description,
    category: category || ({} as ICategory),
    latitude,
    longitude,
    address,
  };

  if (!category?.id) {
    Alert.alert(
      'Erro ao salvar entrada!',
      'Você deve selecionar uma categoria.',
    );
    return;
  }

  if (isEditing) {
    const entries = (realm
      .objects('Entry')
      .filtered(`id = '${id}'`) as unknown) as IEntry[];

    realm.write(() => {
      entries[0].amount = amount;
      entries[0].entryAt = entryAt;
      entries[0].isInit = isInit;
      entries[0].category = category;
      entries[0].description = description;
      entries[0].latitude = latitude;
      entries[0].longitude = longitude;
      entries[0].address = address;
      entries[0].photo = photo;
    });

    return;
  }

  realm.write(() => {
    realm.create('Entry', data, UpdateMode.Modified);
  });

  return data;
};

export const getEntries = async ({ days, category }: GetEntriesProps) => {
  const realm = await getRealm();
  // realm.write(() => {
  //   realm.deleteAll();
  // });

  let searchBuild = realm.objects('Entry');

  if (days > 0) {
    const startDate = sub(new Date(), { days });
    searchBuild = searchBuild.filtered(
      `entryAt >= $0 AND entryAt < $1`,
      startDate,
      new Date(),
    );
  }
  if (days < 0) {
    searchBuild = searchBuild.filtered('entryAt > $0', new Date());
  }

  if (category && category.id && category.id != '') {
    searchBuild = searchBuild.filtered('category.id = $0', category.id);
  }

  const entries = searchBuild.sorted('entryAt', true);

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
};
