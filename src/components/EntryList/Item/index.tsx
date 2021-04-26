import React from 'react';
import { View, Text } from 'react-native';
import { IEntry } from '../../../interfaces/IEntry';
import { Container } from './styles';

interface ReceivedProps {
  item: IEntry;
}

const EntryListItem: React.FC<ReceivedProps> = ({ item }) => {
  const { id, amount } = item;

  return (
    <Container>
      <Text>
        {id}: {amount}
      </Text>
    </Container>
  );
};

export default EntryListItem;
