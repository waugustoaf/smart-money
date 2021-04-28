import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 3;
  padding: 10px 0;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const BalancePanelLabel = styled.View`
  align-items: center;
`;

export const BalanceLabel = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.white};
`;

export const BalanceValue = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.colors.white};
  margin-top: 20px;
`;

export const AddOperationButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.green};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 12px;
  top: 165px;
  font-size: 0;

  z-index: 5;
`;

export const AddOperationButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 30px;
  background-color: red;
`;
