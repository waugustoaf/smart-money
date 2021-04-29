import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  align-items: center;
  padding: 10px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.white};
`;

export const GradientView = styled(LinearGradient)`
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
`;

export const Value = styled.Text`
  font-size: 28px;
  color: ${props => props.theme.colors.white};
`;
