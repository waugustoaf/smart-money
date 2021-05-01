import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { useEntry } from '../../hooks/Entry';
import { formatDays } from '../../utils/formatDays';
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
  EmptyView,
  EmptyText,
} from './styles';

const EntryList: React.FC = () => {
  const navigation = useNavigation();
  const { entries, days } = useEntry();

  return (
    <Container>
      <Body>
        <Title>Últimos lançamentos</Title>

        {entries.length !== 0 ? (
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
        ) : (
          <EmptyView>
            <EmptyText>Nenhum lançamento cadastrado</EmptyText>
          </EmptyView>
        )}
      </Body>

      <PeriodView>
        <PeriodText>{formatDays(days)}</PeriodText>
        <PeriodButton onPress={() => navigation.navigate('Report')}>
          <Icon name="insert-chart" color="#fff" />
          <PeriodButtonText>Ver mais</PeriodButtonText>
        </PeriodButton>
      </PeriodView>
    </Container>
  );
};

export default EntryList;
