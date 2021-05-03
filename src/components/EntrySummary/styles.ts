import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 4;
  margin: 8px 5px 5px 5px;
  padding: 8px;
  background-color: ${props => props.theme.colors.asphalt};
  border-radius: 6px;
  border-style: solid;
  border-width: 1.5px;
  border-color: ${props => props.theme.colors.lightGray};
`;

export const Body = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  margin-bottom: 8px;
`;

export const PeriodView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PeriodText = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.white};
`;

export const PeriodButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const PeriodButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
`;

export const Icon = styled(Icons)`
  margin-right: 2px;
`;

export const ContentView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;