import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 10px;
  justify-content: space-around;
`;

export const Logo = styled.View`
  width: 100%;
  padding-top: 16px;
  align-items: center;
`;

export const SaveButton = styled.TouchableOpacity`
  border: 1px solid ${props => props.theme.colors.green};
  padding: 8px 15px;
  border-radius: 20px;
  width: 60%;
  align-self: center;
`;

export const SaveButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  text-align: center;
`;
