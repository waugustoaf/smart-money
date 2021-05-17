import React from 'react';
import { Container, SubTitle, Title } from './styles';

export const WelcomeMessage: React.FC = () => {
  return (
    <Container>
      <Title>Olá!</Title>
      <SubTitle>
        Para começar a usar o Smart Money, você precisa informar o saldo atual.
        Vamos lá?
      </SubTitle>
    </Container>
  );
};
