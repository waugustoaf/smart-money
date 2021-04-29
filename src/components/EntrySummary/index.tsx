import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();

  return (
    <Container>
      <Body>
        <Title>Categorias</Title>
        <EntrySummaryChart />
        <EntrySummaryList />
      </Body>

      <PeriodView>
        <PeriodText>Últimos 7 dias</PeriodText>
        <PeriodButton onPress={() => navigation.navigate('Report')}>
          <Icon name="insert-chart" color="#fff" />
          <PeriodButtonText>Ver mais</PeriodButtonText>
        </PeriodButton>
      </PeriodView>
    </Container>
  );
};

export default EntrySummary;
