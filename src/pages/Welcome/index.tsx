import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { v4 as uuid } from 'uuid';
import logoImg from '../../assets/logo-white.png';
import { useAuth } from '../../hooks/Auth';
import { useCategory } from '../../hooks/Category';
import { saveEntry } from '../../services/Entries';
import { WelcomeBalanceInput } from './BalanceInput';
import { WelcomeMessage } from './Message';
import { Container, Logo, SaveButton, SaveButtonText } from './styles';

export const Welcome: React.FC = () => {
  const [amount, setAmount] = useState('0.00');
  const [isPositive, setIsPositive] = useState(true);

  const { initCategory } = useCategory();
  const { setUpdate } = useAuth();

  const handleSave = async () => {
    const formattedAmount = isPositive ? Number(amount) : Number(amount) * -1;

    saveEntry(
      {
        amount: formattedAmount,
        entryAt: new Date(),
        id: uuid(),
        isInit: true,
        category: initCategory,
      },
      false,
    );

    await AsyncStorage.setItem('@SmartMoney:user', uuid());
    setUpdate(previousValue => previousValue + 1);
  };

  return (
    <Container>
      <Logo>
        <Image source={logoImg} />
      </Logo>

      <WelcomeMessage />

      <WelcomeBalanceInput
        amount={amount}
        setAmount={setAmount}
        isPositive={isPositive}
        setIsPositive={setIsPositive}
      />

      <SaveButton onPress={handleSave}>
        <SaveButtonText>Continuar</SaveButtonText>
      </SaveButton>
    </Container>
  );
};
