import React from 'react';
import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import { Load } from '../../components/Load';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </Container>
  );
};

export default Home;
