import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { IEntry } from '../../interfaces/IEntry';
import { getEntries } from '../../services/Entries';
import EntryListItem from './Item';
import { Container, Title } from './styles';

const EntryList: React.FC = () => {
  const [entries, setEntries] = useState([] as IEntry[]);

  useEffect(() => {
    (async() => {
      const data = await getEntries();
      console.log(data);
    })()
  }, []);

  return (
    <Container>
      <Title>Últimos lançamentos</Title>

      <FlatList
        data={entries}
        renderItem={({ item }) => <EntryListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};

export default EntryList;
