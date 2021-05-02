import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Colors } from '../../utils/colors';
import Chart from './Chart';
import {
  AddOperationButton,
  BalanceLabel,
  BalancePanelLabel,
  BalanceValue,
  Container,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useBalance } from '../../hooks/Balance';

const BalancePanel: React.FC = () => {
  const navigation = useNavigation();

  const { balance } = useBalance();

  const save = useCallback(() => {
    navigation.navigate('NewEntry');
  }, []);

  const formatMoney = (value: number): string => {
    return `R$ ${value
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }


  return (
    <>
      <Container style={{ flex: 1 }} colors={[Colors.violet, Colors.blue]}>
        <BalancePanelLabel>
          <BalanceLabel>Saldo Atual</BalanceLabel>
          <BalanceValue>{formatMoney(balance)}</BalanceValue>
        </BalancePanelLabel>

        <Chart />
      </Container>
      <AddOperationButton
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}
        onPress={save}
        activeOpacity={0.8}
      >
        <Icon name="add" size={35} color="#fff" />
      </AddOperationButton>
    </>
  );
};

export default BalancePanel;
