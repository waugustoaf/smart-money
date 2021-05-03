import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const TextsView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryName = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.white};
`;

export const CategoryAmount = styled.Text` 
  font-size: 12px;
  color: ${props => props.theme.colors.white};
`;