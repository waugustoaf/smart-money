import React, { useCallback } from 'react';
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
import { saveEntry } from '../../services/Entries';

const BalancePanel: React.FC = () => {
  const navigation = useNavigation();

  const save = useCallback(() => {
    navigation.navigate('NewEntry');
  }, []);

  return (
    <Container>
      <BalancePanelLabel>
        <BalanceLabel>Saldo Atual</BalanceLabel>
        <BalanceValue>R$2.102,45</BalanceValue>
      </BalancePanelLabel>

      <Chart />

      {/* () => navigation.navigate('NewEntry') */}

      <AddOperationButton onPress={save}>
        <AddOperationButtonText>+</AddOperationButtonText>
      </AddOperationButton>
    </Container>
  );
};

export default BalancePanel;
