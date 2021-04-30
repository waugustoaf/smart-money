import React, { useState } from 'react';
import {
  Button,
  Container,
  ModalCloseButton,
  ModalCloseButtonText,
  Modal,
  Title,
  ModalContainer,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCategory } from '../../../hooks/Category';
import { CategoryPicketItem } from './Item';
import { FlatList } from 'react-native';
import { ICategory } from '../../../interfaces/ICategory';

interface PickerProps {
  setCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  selectedCategory: ICategory;
  isEntry: boolean;
}

export const NewEntryCategoryPicker: React.FC<PickerProps> = ({
  setCategory,
  selectedCategory,
  isEntry,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { categories, creditCategories, debitCategories } = useCategory();

  return (
    <Container>
      <Button onPress={() => setIsModalVisible(true)}>
        <Title>
          {!!selectedCategory.id
            ? selectedCategory.name
            : 'Selecione a categoria'}
        </Title>
        <Icon name="arrow-drop-down" size={24} color="#fff" />
      </Button>

      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        <ModalContainer>
          <FlatList
            data={isEntry ? creditCategories : debitCategories}
            keyExtractor={category => category.id}
            renderItem={({ item: category }) => (
              <CategoryPicketItem
                category={category}
                setCategory={setCategory}
                selectedCategory={selectedCategory}
              />
            )}
          ></FlatList>
          <ModalCloseButton onPress={() => setIsModalVisible(false)}>
            <ModalCloseButtonText>Fechar</ModalCloseButtonText>
          </ModalCloseButton>
        </ModalContainer>
      </Modal>
    </Container>
  );
};
