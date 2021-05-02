import styled from 'styled-components/native';
import { AreaChart } from 'react-native-svg-charts';

export const Container = styled.View`
  width: 100%;
  margin-top: -20px;
  position: absolute;
  bottom: 0;
`;

export const ChartBar = styled(AreaChart)`
  height: 150px;
`;
