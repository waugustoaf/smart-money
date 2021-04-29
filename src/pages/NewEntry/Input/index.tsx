import React, { useState } from 'react';
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
        onChangeText={onChangeText}
        value={String(value)}
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
