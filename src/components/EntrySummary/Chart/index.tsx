import React, { useEffect, useState } from 'react';
import { useEntry } from '../../../hooks/Entry';
import {
  FinishArrayProps,
  getBalanceSumByCategory,
} from '../../../utils/getBalanceSumByCategory';
import { ChartPie, Container } from './styles';

const EntrySummaryChart = () => {
  const [categoriesData, setCategoriesData] = useState(
    [] as FinishArrayProps[],
  );
  const { days, entries, category } = useEntry();

  useEffect(() => {
    (async () => {
      const data = await getBalanceSumByCategory(days, category, true, false);
      setCategoriesData(data);
    })();
  }, [days, entries]);

  if (categoriesData.length === 0) return <></>;

  const chartData = categoriesData
    .map(category => {
      let amountFinal = category.amount;
      if (category.amount < 0) {
        amountFinal = category.amount * -1;
      }
      return {
        category: category.category,
        amount: amountFinal,
      };
    })
    .map(category => ({
      value: category.amount,
      svg: { fill: category.category.color },
      key: category.category.id,
      arc: { outerRadius: '100%', innerRadius: '80%' },
    }));

  return (
    <Container>
      <ChartPie data={chartData} />
    </Container>
  );
};

export default EntrySummaryChart;
