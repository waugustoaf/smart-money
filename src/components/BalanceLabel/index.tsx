import React from 'react';
import { Colors } from '../../utils/colors';
import { Container, GradientView, Label, Value } from './styles';

const BalanceLabel: React.FC = () => {
  function formatMoney(value: number): string {
    return `R$ ${value
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }

  return (
    <Container>
      <Label>Saldo atual</Label>
      <GradientView colors={[Colors.violet, Colors.blue]}>
        <Value>{formatMoney(2064.35)}</Value>
      </GradientView>
    </Container>
  );
};

export default BalanceLabel;
