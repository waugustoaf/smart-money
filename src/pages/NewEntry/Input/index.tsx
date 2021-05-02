import React, { useEffect, useState } from 'react';
import { Button, ButtonText, Container, Input, Prefix } from './styles';

interface InputProps {
  onChangeText: (value: string) => void;
  value: string;
  handleChangeEntry: () => void;
  isEntry: boolean;
}

export const NewEntryInput: React.FC<InputProps> = ({
  onChangeText,
  value,
  handleChangeEntry,
  isEntry,
}) => {
  function formatMoney(valueCurrent: number): string {
    return valueCurrent
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  const [inputValue, setInputValue] = useState(formatMoney(Number(value)));

  useEffect(() => {
    onChangeText(inputValue.replace('.', '').replace(',', '.'));
  }, [inputValue]);

  return (
    <Container>
      <Button>
        <Prefix
          value={isEntry}
          onValueChange={handleChangeEntry}
          trackColor={{ false: '#ecf0f1', true: '#3498db' }}
          thumbColor={isEntry ? '#ecf0f1' : '#9b59b6'}
        />
        <ButtonText>{isEntry ? 'Entrada' : 'Saída'}</ButtonText>
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
    </Container>
  );
};
