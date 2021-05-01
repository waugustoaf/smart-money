import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Modal, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import { RelativeDaysModal } from '../../components/RelativeDaysModal';
import { useEntry } from '../../hooks/Entry';
import { Colors } from '../../utils/colors';
import { formatDays } from '../../utils/formatDays';
import {
  ButtonsView,
  CloseButton,
  CloseButtonText,
  Container,
  Button,
  ButtonText,
  FiltersView,
} from './styles';
import { CategoryModal } from '../../components/CategoryModal';
import { ICategory } from '../../interfaces/ICategory';

const Report: React.FC = () => {
  const [isRelativeDaysModalVisible, setIsRelativeDaysModalVisible] = useState(
    false,
  );
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);

  const navigation = useNavigation();
  const { days, setDays, category, setCategory } = useEntry();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onDayConfirm = useCallback((days: number) => {
    setDays(days);
    setIsRelativeDaysModalVisible(false);
  }, []);

  const onCategoryConfirm = useCallback((category: ICategory) => {
    setCategory(category);
    setIsCategoryModalVisible(false);
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#233240" />
      <BalanceLabel />
      <FiltersView>
        <Button onPress={() => setIsRelativeDaysModalVisible(true)}>
          <ButtonText>{formatDays(days)}</ButtonText>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </Button>
        <Button isNotFirst onPress={() => setIsCategoryModalVisible(true)}>
          <ButtonText>
            {category.id ? category.name : 'Todas as categorias'}
          </ButtonText>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </Button>
      </FiltersView>
      <EntrySummary />
      <EntryList />
      <ButtonsView>
        <CloseButton onPress={handleGoBack}>
          <CloseButtonText>Fechar</CloseButtonText>
        </CloseButton>
      </ButtonsView>
      <RelativeDaysModal
        isRelativeDaysModalVisible={isRelativeDaysModalVisible}
        setIsRelativeDaysModalVisible={setIsRelativeDaysModalVisible}
        onConfirm={onDayConfirm}
      />
      <CategoryModal
        isCategoryModalVisible={isCategoryModalVisible}
        setIsCategoryModalVisible={setIsCategoryModalVisible}
        onConfirm={onCategoryConfirm}
      />
    </Container>
  );
};

export default Report;
