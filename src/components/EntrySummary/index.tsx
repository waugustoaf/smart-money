import React from 'react';
import EntrySummaryChart from './Chart';
import EntrySummaryList from './List';
import {
  Body,
  Container,
  Icon,
  PeriodButton,
  PeriodButtonText,
  PeriodText,
  PeriodView,
  Title,
} from './styles';

const EntrySummary = () => {
  return (
    <Container>
      <Body>
        <Title>Categorias</Title>
        <EntrySummaryChart />
        <EntrySummaryList />
      </Body>

      <PeriodView>
        <PeriodText>Últimos 7 dias</PeriodText>
        <PeriodButton>
          <Icon name="insert-chart" color="#fff" />
          <PeriodButtonText>Ver mais</PeriodButtonText>
        </PeriodButton>
      </PeriodView>
    </Container>
  );
};

export default EntrySummary;
