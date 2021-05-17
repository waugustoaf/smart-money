import React, { useEffect, useState } from 'react';
import {
  Container,
  Label,
  Button,
  ButtonText,
  Input,
  MoneyInput,
  Prefix,
} from './styles';

interface BalanceInputProps {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  isPositive: boolean;
  setIsPositive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WelcomeBalanceInput: React.FC<BalanceInputProps> = ({
  amount,
  setAmount,
  isPositive,
  setIsPositive,
}) => {
  const [inputValue, setInputValue] = useState(formatMoney(Number(amount)));

  function formatMoney(valueCurrent: number): string {
    return valueCurrent
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  useEffect(() => {
    setAmount(inputValue.replace('.', '').replace(',', '.'));
  }, [inputValue]);

  return (
    <Container>
      <Label>Informe seu saldo</Label>

      <MoneyInput>
        <Button>
          <Prefix
            value={isPositive}
            onValueChange={setIsPositive}
            trackColor={{ false: '#ecf0f1', true: '#3498db' }}
            thumbColor={isPositive ? '#ecf0f1' : '#9b59b6'}
          />
          <ButtonText>{isPositive ? 'Positivo' : 'Negativo'}</ButtonText>
        </Button>

        <Input
          type="money"
          onChangeText={setInputValue}
          value={inputValue}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: '',
            suffixUnit: '',
          }}
        />
      </MoneyInput>
    </Container>
  );
};
