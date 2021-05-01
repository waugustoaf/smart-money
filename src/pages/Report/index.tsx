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
  DaysButton,
  DaysButtonText,
  FiltersView,
} from './styles';

const Report: React.FC = () => {
  const [isRelativeDaysModalVisible, setIsRelativeDaysModalVisible] = useState(
    false,
  );

  const navigation = useNavigation();
  const { days, setDays } = useEntry();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onConfirm = useCallback((days: number) => {
    setDays(days);
    setIsRelativeDaysModalVisible(false);
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#233240" />
      <BalanceLabel />

      <FiltersView>
        <DaysButton onPress={() => setIsRelativeDaysModalVisible(true)}>
          <DaysButtonText>{formatDays(days)}</DaysButtonText>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </DaysButton>
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
        onConfirm={onConfirm}
      />
    </Container>
  );
};

export default Report;
