import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { Container } from './styles';

interface CategoriesProps {
  id: number;
  fieldName: string;
  price: number;
}

const EntrySummaryList = () => {
  const [categories, setCategories] = useState<CategoriesProps[]>([
    { id: 1, fieldName: 'Alimentação', price: 201 },
    { id: 2, fieldName: 'Combustível', price: 12 },
    { id: 3, fieldName: 'Aluguel', price: 120 },
    { id: 4, fieldName: 'Lazer', price: 250 },
    { id: 5, fieldName: 'Outros', price: 1200 },
  ]);

  return (
    <Container>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text>- {item.fieldName}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};

export default EntrySummaryList;
