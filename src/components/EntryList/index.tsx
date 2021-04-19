import React, { useState } from 'react';
import { FlatList } from 'react-native';
import EntryListItem from './Item';
import { Container, Title } from './styles';

export interface ItemProps {
  id: number;
  fieldName: string;
  price: number;
}

const EntryList: React.FC = () => {
  const [items, setItems] = useState<ItemProps[]>([
    { id: 1, fieldName: 'Padaria Asa Branca', price: 10 },
    { id: 2, fieldName: 'Supermercado Isadora', price: 190 },
    { id: 3, fieldName: 'Posto Ipiranga', price: 120 },
  ]);

  return (
    <Container>
      <Title>Últimos lançamentos</Title>

      <FlatList
        data={items}
        renderItem={({ item }) => <EntryListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};

export default EntryList;
