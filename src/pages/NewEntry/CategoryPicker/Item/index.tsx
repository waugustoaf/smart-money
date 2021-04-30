import React from 'react';
import { View, Text } from 'react-native';
import { ICategory } from '../../../../interfaces/ICategory';
import { Container, Name } from './styles';

interface ItemProps {
  category: ICategory;
  setCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  selectedCategory: ICategory;
}

export const CategoryPicketItem: React.FC<ItemProps> = ({
  category,
  setCategory,
  selectedCategory
}) => {
  return (
    <Container
      categoryColor={category.color || '#4a6a8a'}
      onPress={() => setCategory(category)}
      isSelectedCategory={category === selectedCategory}
    >
      <Name>{category.name}</Name>
    </Container>
  );
};
