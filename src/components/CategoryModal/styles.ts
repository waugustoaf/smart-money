import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const FlatView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const ItemButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 20px;
`;

export const ItemButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  text-align: center;
`;

export const ButtonsView = styled.View`
  padding: 5px 0 7px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
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
