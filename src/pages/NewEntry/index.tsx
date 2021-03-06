import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import { Load } from '../../components/Load';
import { useCategory } from '../../hooks/Category';
import { useEntry } from '../../hooks/Entry';
import { ICategory } from '../../interfaces/ICategory';
import { IEntry } from '../../interfaces/IEntry';
import { NewEntryAddressPicker } from './AddressPicker';
import { NewEntryCameraPicker } from './CameraPicker/intex';
import { NewEntryCategoryPicker } from './CategoryPicker';
import { NewEntryDatePicker } from './DatePicker';
import { NewEntryDeleteAction } from './DeleteAction';
import { NewEntryInput } from './Input';
import {
  AddButton,
  AddButtonText,
  ButtonsView,
  ButtonText,
  CancelButton,
  Container,
  Form,
  FormActionContainer,
} from './styles';

interface IParams {
  entry: IEntry;
}

const NewEntry: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { save, remove } = useEntry();
  const { categories } = useCategory();

  let { entry } = (route.params as IParams) || {
    entry: {
      id: '',
      amount: parseFloat('0'),
      entryAt: new Date(),
      isInit: false,
    },
  };

  const [amount, setAmount] = useState(String(entry.amount));
  const [isEntry, setIsEntry] = useState(entry.amount >= 0);
  const [category, setCategory] = useState(
    entry?.category || ({} as ICategory),
  );
  const [canPass, setCanPass] = useState(false);
  const [entryAt, setEntryAt] = useState(new Date(entry.entryAt));
  const [latitude, setLatitude] = useState(entry.latitude);
  const [longitude, setLongitude] = useState(entry.longitude);
  const [address, setAddress] = useState(entry.address);
  const [photo, setPhoto] = useState<string | null>(entry.photo || null);

  useEffect(() => {
    if (canPass) {
      setCategory({} as ICategory);
    }
    setCanPass(true);
  }, [isEntry]);

  const isValid = () => {
    if (parseFloat(amount) !== 0 && !!category.id) {
      return true;
    }

    return false;
  };

  const formatAmount = (value: string) => {
    const finalValue = value.replace('.', '').replace(',', '.');
    return parseFloat(finalValue);
  };

  const handleSaveEntry = () => {
    if (!isValid()) return;

    let finalAmount;
    if (isEntry) {
      if (parseFloat(amount) < 0) {
        finalAmount = parseFloat(amount) * -1;
      } else {
        finalAmount = parseFloat(amount);
      }
    } else {
      if (parseFloat(amount) > 0) {
        finalAmount = parseFloat(amount) * -1;
      } else {
        finalAmount = parseFloat(amount);
      }
    }

    if (!!entry.id) {
      save({
        amount: String(finalAmount),
        isInit: false,
        id: entry.id,
        entryAt: new Date(entryAt),
        category,
        description: category.name,
        latitude: latitude,
        longitude: longitude,
        address,
        photo
      });
    } else {
      save({
        amount: String(finalAmount),
        isInit: false,
        category,
        entryAt: new Date(entryAt),
        description: category.name,
        latitude,
        longitude,
        address,
        photo
      });
    }

    navigation.goBack();
  };

  const handleDeleteEntry = () => {
    remove(entry.id);
    navigation.goBack();
  };

  const handleChangeEntry = useCallback(() => {
    setIsEntry(previousValue => !previousValue);
  }, []);

  if (categories.length === 0) return <Load />;

  return (
    <Container>
      <StatusBar backgroundColor="#233240" />
      <BalanceLabel />

      <Form>
        <View>
          <NewEntryInput
            onChangeText={value => setAmount(value)}
            value={String(formatAmount(amount))}
            handleChangeEntry={handleChangeEntry}
            isEntry={isEntry}
          />
          <NewEntryCategoryPicker
            setCategory={setCategory}
            selectedCategory={category}
            isEntry={isEntry}
          />
        </View>

        <FormActionContainer>
          <NewEntryDatePicker
            currentDate={entryAt}
            onChangeValue={setEntryAt}
          />
          <NewEntryCameraPicker photo={photo} setPhoto={setPhoto} />
          <NewEntryAddressPicker
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            setAddress={setAddress}
            address={address}
          />
          {!!entry.id && (
            <NewEntryDeleteAction handleDeleteEntry={handleDeleteEntry} />
          )}
        </FormActionContainer>
      </Form>
      <ButtonsView>
        <AddButton onPress={handleSaveEntry}>
          <AddButtonText>{entry.id ? 'Salvar' : 'Adicionar'}</AddButtonText>
        </AddButton>

        <CancelButton onPress={() => navigation.goBack()}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
      </ButtonsView>
    </Container>
  );
};

export default NewEntry;
