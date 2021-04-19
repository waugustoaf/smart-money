import React from 'react';
import { View, Text } from 'react-native';
import { ItemProps } from '..';
import { Container } from './styles';

const EntryListItem: React.FC<{ item: ItemProps }> = ({
  item: { fieldName, price },
}) => {
  return (
    <Container>
      <Text>
        {fieldName}: {price}
      </Text>
    </Container>
  );
};

export default EntryListItem;
