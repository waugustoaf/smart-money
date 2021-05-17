import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components/native";

export const Container = styled.View``

export const Label = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  text-align: center;
`;

export const MoneyInput = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${props => props.theme.colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Prefix = styled.Switch`
  font-size: 28px;
  color: ${props => props.theme.colors.white};
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.white};
`;

export const Input = styled(TextInputMask)`
  font-size: 28px;
  color: ${props => props.theme.colors.white};
  text-align: right;
  flex: 1;
  padding: 15px 15px 15px 0;
`;