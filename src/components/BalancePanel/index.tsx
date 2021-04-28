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

const BalancePanel: React.FC = () => {
  const navigation = useNavigation();

  const save = useCallback(() => {
    navigation.navigate('NewEntry');
  }, []);

  return (
    <>
      <Container style={{ flex: 1 }} colors={[Colors.violet, Colors.blue]}>
        <BalancePanelLabel>
          <BalanceLabel>Saldo Atual</BalanceLabel>
          <BalanceValue>R$2.102,45</BalanceValue>
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
