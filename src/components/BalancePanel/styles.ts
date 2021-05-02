import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';

export const Container = styled(LinearGradient)`
  flex: 3;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const BalancePanelLabel = styled.View`
  align-items: center;
  z-index: 1;
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
  right: ${Dimensions.get('window').width * 0.04}px;
  top: ${Dimensions.get('window').height * 0.195}px;
  font-size: 0;

  z-index: 5;
`;

export const AddOperationButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 30px;
  background-color: red;
`;
