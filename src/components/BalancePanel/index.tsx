import React from 'react';
import Chart from './Chart';
import { useNavigation } from '@react-navigation/native';
import {
  BalancePanelLabel,
  Container,
  BalanceLabel,
  BalanceValue,
  AddOperationButton,
  AddOperationButtonText,
} from './styles';

const BalancePanel: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BalancePanelLabel>
        <BalanceLabel>Saldo Atual</BalanceLabel>
        <BalanceValue>R$2.102,45</BalanceValue>
      </BalancePanelLabel>

      <Chart />

      <AddOperationButton onPress={() => navigation.navigate('NewEntry')}>
        <AddOperationButtonText>+</AddOperationButtonText>
      </AddOperationButton>
    </Container>
  );
};

export default BalancePanel;
