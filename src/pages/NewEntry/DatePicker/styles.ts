import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.asphalt};
  width: 59px;
  height: 59px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
