import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 10px;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-around;
`;

export const FormInput = styled.TextInput`
  border-color: #000;
  border-width: 1px;
`;

export const FormActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  justify-content: space-around;
`;

export const GPSButton = styled.TouchableOpacity``;

export const CameraButton = styled.TouchableOpacity``;

export const AddButton = styled.TouchableOpacity`
  border: 1px solid ${props => props.theme.colors.green};
  padding: 8px 15px;
  border-radius: 20px;
`;

export const CancelButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
`;

export const AddButtonText = styled.Text`
  color: ${props => props.theme.colors.green};
`;

export const IconedButtonText = styled.Text``;

export const ButtonsView = styled.View`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteButtonText = styled.Text``;

