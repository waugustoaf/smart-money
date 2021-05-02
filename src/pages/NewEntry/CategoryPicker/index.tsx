import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCategory } from '../../../hooks/Category';
import { ICategory } from '../../../interfaces/ICategory';
import { CategoryPicketItem } from './Item';
import
  {
    Button,
    Container,


    Modal, ModalCloseButton,
    ModalCloseButtonText,


    ModalContainer, Title
  } from './styles';

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
  const { creditCategories, debitCategories } = useCategory();



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
