import * as shape from 'd3-shape';
import React, { useEffect, useState } from 'react';
import { useEntry } from '../../../hooks/Entry';
import { getBalanceSumByDate } from '../../../utils/getBalanceSumByDate';
import { ChartBar, Container } from './styles';

const Chart: React.FC = () => {
  const [balanceArray, setBalanceArray] = useState<number[]>([]);
  const { days, entries } = useEntry();

  useEffect(() => {
    (async () => {
      const newArrayValue = await getBalanceSumByDate(
        days,
      );
      setBalanceArray(newArrayValue);
    })();
  }, [days, entries]);

  if (balanceArray.length === 0) {
    return <></>;
  }

  return (
    <Container>
      <ChartBar
        data={balanceArray}
        svg={{
          fill: 'rgba(0,0,0,0.1)',
          stroke: 'rgba(0,0,0,0.1)',
          strokeWidth: 2,
        }}
        curve={shape.curveNatural}
        contentInset={{ top: 0, bottom: 0 }}
      ></ChartBar>
    </Container>
  );
};

export default Chart;
