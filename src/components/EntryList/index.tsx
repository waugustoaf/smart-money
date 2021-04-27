import React from 'react';
import { FlatList } from 'react-native';
import { useEntry } from '../../hooks/Entry';
import EntryListItem from './Item';
import { Container, Title } from './styles';

const EntryList: React.FC = () => {
  const { entries } = useEntry();

  return (
    <Container>
      <Title>Últimos lançamentos</Title>

      <FlatList
        data={entries}
        renderItem={({ item: entry }) => <EntryListItem entry={entry} />}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};

export default EntryList;
