import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
`;

export const SubTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;
