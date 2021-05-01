import React from 'react';
import { Button, Container } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../utils/colors';

interface DeleteActionProps {
  handleDeleteEntry: () => void;
}

export const NewEntryDeleteAction: React.FC<DeleteActionProps> = ({
  handleDeleteEntry,
}) => {
  return (
    <Container>
      <Button onPress={handleDeleteEntry}>
        <Icon name="delete" size={30} color={Colors.white} />
      </Button>
    </Container>
  );
};
