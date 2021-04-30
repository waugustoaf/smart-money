import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import { Load } from '../../components/Load';
import { useCategory } from '../../hooks/Category';
import { useEntry } from '../../hooks/Entry';
import { ICategory } from '../../interfaces/ICategory';
import { IEntry } from '../../interfaces/IEntry';
import { NewEntryCategoryPicker } from './CategoryPicker';
import { NewEntryDatePicker } from './DatePicker';
import { NewEntryInput } from './Input';
import {
  AddButton,
  AddButtonText,
  ButtonsView,
  ButtonText,
  CancelButton,
  Container,
  DeleteButton,
  DeleteButtonText,
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

    const auxAmount = amount.replace('.', '').replace(',', '.');

    let finalAmount;
    if (isEntry) {
      if (parseFloat(auxAmount) < 0) {
        finalAmount = parseFloat(auxAmount) * -1;
      } else {
        finalAmount = parseFloat(auxAmount);
      }
    } else {
      if (parseFloat(auxAmount) > 0) {
        finalAmount = parseFloat(auxAmount) * -1;
      } else {
        finalAmount = parseFloat(auxAmount);
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
      });
    } else {
      save({
        amount: String(finalAmount),
        isInit: false,
        category,
        entryAt: new Date(entryAt),
        description: category.name,
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
            value={String(formatAmount(amount) * 100)}
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
        </FormActionContainer>

        {/* <GPSButton>
          <IconedButtonText>GPS</IconedButtonText>
        </GPSButton>
        <CameraButton>
          <IconedButtonText>Camera</IconedButtonText>
        </CameraButton> */}

        <ButtonsView>
          <AddButton onPress={handleSaveEntry}>
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton>

          {!!entry.id && (
            <DeleteButton onPress={handleDeleteEntry}>
              <DeleteButtonText>Excluir</DeleteButtonText>
            </DeleteButton>
          )}

          <CancelButton onPress={() => navigation.goBack()}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
        </ButtonsView>
      </Form>
    </Container>
  );
};

export default NewEntry;
