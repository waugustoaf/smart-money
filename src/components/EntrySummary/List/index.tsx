import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useEntry } from '../../../hooks/Entry';
import {
  FinishArrayProps,
  getBalanceSumByCategory,
} from '../../../utils/getBalanceSumByCategory';
import { EntrySummaryListItem } from './Item';
import { Container, ErrorMessage, ErrorView } from './styles';

interface CategoriesProps {
  id: number;
  fieldName: string;
  price: number;
}

const EntrySummaryList = () => {
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

  if (categoriesData.length === 0)
    return (
      <ErrorView>
        <ErrorMessage>Nenhuma entrada para esses filtros</ErrorMessage>
      </ErrorView>
    );

  return (
    <Container>
      <FlatList
        data={categoriesData}
        renderItem={({ item }) => <EntrySummaryListItem category={item} />}
        keyExtractor={item => item.category.id}
      />
    </Container>
  );
};

export default EntrySummaryList;
