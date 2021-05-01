import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
  Container,
  ItemButton,
  ItemButtonText,
  ButtonsView,
  CloseButton,
  CloseButtonText, 
  FlatView
} from './styles';

interface RelativeDaysModalProps {
  isRelativeDaysModalVisible: boolean;
  setIsRelativeDaysModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: (days: number) => void;
}

interface DaysArrayProps {
  number: number;
  string: string;
}

export const RelativeDaysModal: React.FC<RelativeDaysModalProps> = ({
  isRelativeDaysModalVisible,
  setIsRelativeDaysModalVisible,
  onConfirm,
}) => {
  const hideRelativeDaysModal = useCallback(() => {
    setIsRelativeDaysModalVisible(false);
  }, []);

  const showRelativeDaysModal = useCallback(() => {
    setIsRelativeDaysModalVisible(true);
  }, []);

  const dayPhrase = (number: number): string => {
    return `Últimos ${number} dias`;
  };

  const relativeDays = [
    { number: 0, string: 'Todo o período' },
    { number: -1, string: 'Futuros' },
    { number: 1, string: 'Ontem e hoje' },
    { number: 3, string: dayPhrase(3) },
    { number: 7, string: dayPhrase(7) },
    { number: 15, string: dayPhrase(15) },
    { number: 21, string: dayPhrase(21) },
    { number: 30, string: dayPhrase(30) },
    { number: 45, string: dayPhrase(45) },
    { number: 60, string: dayPhrase(60) },
    { number: 90, string: dayPhrase(90) },
    { number: 180, string: dayPhrase(180) },
    { number: 365, string: dayPhrase(365) },
  ] as DaysArrayProps[];

  return (
    <Container
      visible={isRelativeDaysModalVisible}
      animationType="slide"
    >
      <FlatView>
        <FlatList
          data={relativeDays}
          renderItem={({ item }) => (
            <>
              <ItemButton onPress={() => onConfirm(item.number)}>
                <ItemButtonText>{item.string}</ItemButtonText>
              </ItemButton>
            </>
          )}
          keyExtractor={item => String(item.number)}
        />
      </FlatView>

      <ButtonsView>
        <CloseButton onPress={() => setIsRelativeDaysModalVisible(false)}>
          <CloseButtonText>Fechar</CloseButtonText>
        </CloseButton>
      </ButtonsView>
    </Container>
  );
};
