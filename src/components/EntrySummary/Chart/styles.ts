import styled from 'styled-components/native';
import { PieChart } from 'react-native-svg-charts';

export const Container = styled.View`
  flex: 4;
  justify-content: center;
  height: 100%;
`;

export const ChartPie = styled(PieChart)`
  height: 100px;
  width: 100px;
  margin-left: 10px;
`;
