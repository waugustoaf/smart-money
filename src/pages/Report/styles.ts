import styled from 'styled-components/native';

interface ButtonProps {
  isNotFirst?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const FiltersView = styled.View`
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.colors.champagneDark};
  border-radius: 150px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.champagneDark};
  font-weight: bold;
`;

export const ButtonsView = styled.View`
  padding: 5px 0 7px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  background: ${props => props.theme.colors.green};
  padding: 8px 15px;
  border-radius: 7px;
  width: 97%;
  align-items: center;
`;

export const CloseButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  font-size: 16px;
`;