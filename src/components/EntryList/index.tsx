import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { useEntry } from '../../hooks/Entry';
import EntryListItem from './Item';
import {
  Body,
  Container,
  PeriodButton,
  PeriodButtonText,
  PeriodText,
  PeriodView,
  Title,
  Icon,
} from './styles';

const EntryList: React.FC = () => {
  const navigation = useNavigation();
  const { entries } = useEntry();

  return (
    <Container>
      <Body>
        <Title>Últimos lançamentos</Title>

        <FlatList
          data={entries}
          renderItem={({ item: entry, index }) => (
            <EntryListItem
              entry={entry}
              isFirstItem={index === 0}
              isLastItem={index === entries.length - 1}
            />
          )}
          keyExtractor={item => item.id}
        />
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

export default EntryList;
