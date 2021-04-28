import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StatusBar } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import { Container } from './styles';

const Report = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#233240" />
      <BalanceLabel />
      <Picker>
        <Picker.Item label="Todas as categorias" />
        <Picker.Item label="Últimos 7 dias" />
      </Picker>
      <EntrySummary />
      <EntryList />
    </Container>
  );
};

export default Report;
