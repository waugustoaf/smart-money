import React from 'react';
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

const NewEntry: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BalanceLabel />

      <Form>
        <FormInput />
        <FormInput />

        <GPSButton>
          <IconedButtonText>GPS</IconedButtonText>
        </GPSButton>
        <CameraButton>
          <IconedButtonText>Camera</IconedButtonText>
        </CameraButton>

        <ButtonsView>
          <AddButton>
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
