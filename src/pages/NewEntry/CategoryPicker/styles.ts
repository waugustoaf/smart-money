import styled from 'styled-components/native';

export const Container = styled.View``;

export const Button = styled.TouchableOpacity`
  margin: 10px 20px;
  background-color: ${props => props.theme.colors.asphalt};
  border-radius: 15px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.white};
  overflow: hidden;
`;

export const Modal = styled.Modal``;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const ModalCloseButton = styled.TouchableOpacity`
  border: 1px solid ${props => props.theme.colors.green};
  background-color: ${props => props.theme.colors.background};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const ModalCloseButtonText = styled.Text`
  text-align: center;
  color: ${props => props.theme.colors.green};
`;

export const FlatList = styled.FlatList``;
