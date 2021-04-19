import React from 'react';
import { Container, Label, Value } from './styles';

const BalanceLabel: React.FC = () => {
  return (
    <Container>
      <Label>Saldo atual</Label>
      <Value>R$2.064,35</Value>
    </Container>
  );
};

export default BalanceLabel;
