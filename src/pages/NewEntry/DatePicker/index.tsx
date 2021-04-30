import React, { useState } from 'react';
import { Button, Container } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../utils/colors';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { onChange } from 'react-native-reanimated';

interface DatePickerPros {
  currentDate: Date;
  onChangeValue: React.Dispatch<React.SetStateAction<Date>>;
}

export const NewEntryDatePicker: React.FC<DatePickerPros> = ({
  currentDate,
  onChangeValue,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmitDate = (date: Date) => {
    onChangeValue(date);
    setIsModalVisible(false);
  };

  const handleChangeVisibility = () => {
    setIsModalVisible(previousValue => !previousValue);
  };

  return (
    <Container>
      <Button onPress={handleChangeVisibility}>
        <Icon name="today" size={30} color={Colors.white} />
      </Button>

      <DateTimePicker
        mode="date"
        isVisible={isModalVisible}
        date={currentDate}
        onConfirm={handleSubmitDate}
        onCancel={handleChangeVisibility}
        headerTextIOS="Data de vencimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Ok"
      />
    </Container>
  );
};
