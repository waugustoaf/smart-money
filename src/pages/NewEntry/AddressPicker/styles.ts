import styled from 'styled-components/native';

interface ButtonProps {
  isActive?: boolean;
}

export const Container = styled.View``;

export const Button = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${props =>
    props.isActive ? props.theme.colors.blue : props.theme.colors.asphalt};
  width: 59px;
  height: 59px;
  margin: 0 3px;
`;
