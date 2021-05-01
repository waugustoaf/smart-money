import React, { useCallback } from 'react';
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
import { useCategory } from '../../hooks/Category'; 
import { ICategory } from '../../interfaces/ICategory';
import { IEntry } from '../../interfaces/IEntry';

interface RelativeDaysModalProps {
  isCategoryModalVisible: boolean;
  setIsCategoryModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: (category: ICategory) => void;
}

export const CategoryModal: React.FC<RelativeDaysModalProps> = ({
  isCategoryModalVisible,
  setIsCategoryModalVisible,
  onConfirm,
}) => {
  const { categories } = useCategory();
  const formattedCategories = [{ id: '', name: 'Todos', entries: [] },...categories] as ICategory[];

  return (
    <Container visible={isCategoryModalVisible} animationType="slide">
      <FlatView>
        <FlatList
          data={formattedCategories}
          renderItem={({ item }) => (
            <>
              <ItemButton onPress={() => onConfirm(item)}>
                <ItemButtonText>{item.name}</ItemButtonText>
              </ItemButton>
            </>
          )}
          keyExtractor={item => String(item.id.toString())}
        />
      </FlatView>

      <ButtonsView>
        <CloseButton onPress={() => setIsCategoryModalVisible(false)}>
          <CloseButtonText>Fechar</CloseButtonText>
        </CloseButton>
      </ButtonsView>
    </Container>
  );
};
