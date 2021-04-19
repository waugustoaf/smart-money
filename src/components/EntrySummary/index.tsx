import React from 'react';
import EntrySummaryChart from './Chart';
import EntrySummaryList from './List';
import { Container } from './styles';

const EntrySummary = () => {
  return (
    <Container>
      <EntrySummaryChart />
      <EntrySummaryList />
    </Container>
  );
};

export default EntrySummary;
