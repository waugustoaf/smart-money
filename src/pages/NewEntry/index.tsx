import React, { useCallback, useState } from 'react';
import BalanceLabel from '../../components/BalanceLabel';
import { useNavigation } from '@react-navigation/native';
import {
  GPSButton,
  CameraButton,
  AddButton,
  CancelButton,
  IconedButtonText,
  AddButtonText,
  ButtonsView,
  ButtonText,
  Container,
  Form,
  FormInput,
} from './styles';
import { saveEntry } from '../../services/Entries';
import { v4 as uuid } from 'uuid';

const NewEntry: React.FC = () => {
  const navigation = useNavigation();

  const [amount, setAmount] = useState('0');

  const save = () => {
    const data = {
      amount: parseFloat(amount),
      id: uuid(),
      entryAt: new Date(),
      isInit: false,
    };

    saveEntry(data);
  };

  return (
    <Container>
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
          <AddButton onPress={save}>
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton>

          <CancelButton onPress={() => navigation.goBack()}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
        </ButtonsView>
      </Form>
    </Container>
  );
};

export default NewEntry;
