import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import { useEntry } from '../../hooks/Entry';
import { IEntry } from '../../interfaces/IEntry';
import { NewEntryInput } from './Input';
import {
  AddButton,
  AddButtonText,
  ButtonsView,
  ButtonText,
  CameraButton,
  CancelButton,
  Container,
  DeleteButton,
  DeleteButtonText,
  Form,
  FormInput,
  GPSButton,
  IconedButtonText,
} from './styles';

interface IParams {
  entry: IEntry;
}

const NewEntry: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { save, remove } = useEntry();

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

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }

    return false;
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
        entryAt: entry.entryAt,
      });
    } else {
      save({ amount: String(finalAmount), isInit: false });
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

  return (
    <Container>
      <StatusBar backgroundColor="#233240" />
      <BalanceLabel />

      <Form>
        <NewEntryInput
          onChangeText={value => setAmount(value)}
          value={String(parseFloat(amount) * 100)}
          handleChangeEntry={handleChangeEntry}
          isEntry={isEntry}
        />
        <FormInput />

        <GPSButton>
          <IconedButtonText>GPS</IconedButtonText>
        </GPSButton>
        <CameraButton>
          <IconedButtonText>Camera</IconedButtonText>
        </CameraButton>

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
