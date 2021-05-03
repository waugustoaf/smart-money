import React from 'react';
import { FinishArrayProps } from '../../../../utils/getBalanceSumByCategory';
import { CategoryAmount, CategoryName, Container, TextsView } from './styles';
import Svg, { Circle } from 'react-native-svg';
import { Colors } from '../../../../utils/colors';

interface ItemProps {
  category: FinishArrayProps;
}

export const EntrySummaryListItem: React.FC<ItemProps> = ({ category }) => {
  const formatMoney = (value: number): string => {
    return `R$ ${value
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  };

  return (
    <Container>
      <Svg height="20" width="22">
        <Circle
          cx="10"
          cy="10"
          r="8"
          stroke={Colors.background}
          strokeWidth="0.5"
          fill={category.category.color || Colors.white}
        />
      </Svg>
      <TextsView>
        <CategoryName>{category.category.name}</CategoryName>
        <CategoryAmount>{formatMoney(category.amount)}</CategoryAmount>
      </TextsView>
    </Container>
  );
};
