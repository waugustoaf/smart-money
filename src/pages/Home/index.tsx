import React from 'react';
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
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </Container>
  );
};

export default Home;
