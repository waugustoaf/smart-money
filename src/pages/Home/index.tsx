import React from 'react';
import { StatusBar } from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import { Load } from '../../components/Load';
import { useEntry } from '../../hooks/Entry';
import { Container } from './styles';

const Home: React.FC = () => {
  const { isLoading } = useEntry();

  if(isLoading) {
    return <Load />
  }

  return (
    <Container>
      <StatusBar backgroundColor="#9b59b6" />
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </Container>
  );
};

export default Home;
