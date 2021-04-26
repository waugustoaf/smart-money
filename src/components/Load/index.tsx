import React from 'react';
import { Container } from '../Load/styles';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/money-animation.json';

export const Load: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={{ backgroundColor: 'transparent', width: 250 }}
      />
    </Container>
  );
};
