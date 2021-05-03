import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 6;
`;

export const ErrorView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.red};
`;
