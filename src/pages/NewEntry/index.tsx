import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import { useEntry } from '../../hooks/Entry';
import { IEntry } from '../../interfaces/IEntry';
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

  const { entry: entryAuxiliar } = (route.params as IParams) || {
    entry: undefined,
  };
  let { entry } = (route.params as IParams) || {
    entry: {
      id: '',
      amount: parseFloat('0'),
      entryAt: new Date(),
      isInit: false,
    },
  };
  const hasEntry = !!entryAuxiliar;

  const [amount, setAmount] = useState(String(entry.amount));

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }

    return false;
  };

  const handleSaveEntry = () => {
    if (!isValid()) return;

    if (hasEntry) {
      save({
        amount,
        isInit: false,
        id: entry.id,
        entryAt: entry.entryAt,
      });
    } else {
      save({ amount, isInit: false });
    }

    navigation.goBack();
  };

  const handleDeleteEntry = () => {
    remove(entry.id);
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar backgroundColor="#233240" />
      <BalanceLabel />

      <Form>
        <FormInput onChangeText={value => setAmount(value)} value={amount} />
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

          {hasEntry && (
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
