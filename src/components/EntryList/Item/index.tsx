import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { IEntry } from '../../../interfaces/IEntry';
import { Button, Container } from './styles';

interface ReceivedProps {
  entry: IEntry;
}

const EntryListItem: React.FC<ReceivedProps> = ({ entry }) => {
  const navigation = useNavigation();
  const { description, id, amount } = entry;

  const handleSetCurrentEntry = () => {
    navigation.navigate('NewEntry', { entry });
  };

  return (
    <Container>
      <Text>
        {description}: {amount}
      </Text>
      <Button onPress={handleSetCurrentEntry}>
        <Text>{id}</Text>
      </Button>
    </Container>
  );
};

export default EntryListItem;
