import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';
import { IEntry } from '../../../interfaces/IEntry';
import { Colors } from '../../../utils/colors';
import {
  Container,
  DescriptionDataDateText,
  DescriptionDataDateView,
  DescriptionDataLocalText,
  DescriptionDataLocalView,
  DescriptionDataView,
  DescriptionLabel,
  DescriptionView,
  ValueLabel,
  ValueView,
  ViewSVG,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ReceivedProps {
  entry: IEntry;
  isFirstItem: boolean;
  isLastItem: boolean;
}

const EntryListItem: React.FC<ReceivedProps> = ({
  entry,
  isFirstItem,
  isLastItem,
}) => {
  const navigation = useNavigation();
  const { description, id, amount } = entry;

  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 30 : 50;
  const hasUniqueItem = isFirstItem && isLastItem;
  const bulletColor = entry.category?.color || Colors.white;

  const handleSetCurrentEntry = () => {
    navigation.navigate('NewEntry', { entry });
  };

  function formatDate(date: Date): string {
    return format(new Date(date), 'dd/MM', { locale: ptBR });
  }

  function formatMoney(value: number): string {
    const isOut = value < 0;
    const positiveValue = isOut ? value * -1 : value;
    const prefix = isOut ? '- R$' : 'R$';

    return `${prefix} ${positiveValue
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }

  return (
    <Container onPress={handleSetCurrentEntry}>
      <ViewSVG>
        <Svg height="50" width="30">
          {!hasUniqueItem && (
            <Rect
              x="9"
              y={bulletLineY}
              width="1.5"
              height={bulletLineHeight}
              fill={Colors.white}
            />
          )}

          <Circle
            cx="10"
            cy="25"
            r={8}
            stroke={Colors.background}
            strokeWidth="1.5"
            fill={bulletColor}
          />
        </Svg>
      </ViewSVG>

      <DescriptionView>
        <DescriptionLabel numberOfLines={1}>
          {entry.description || entry.category?.name || 'Desconhecido'}
        </DescriptionLabel>

        <DescriptionDataView>
          <DescriptionDataDateView>
            <Icon name="access-time" size={12} color="#95a5a6" />
            <DescriptionDataDateText>
              {formatDate(entry.entryAt)}
            </DescriptionDataDateText>
          </DescriptionDataDateView>
          {!!entry.address && (
            <DescriptionDataLocalView>
              <Icon name="location-pin" size={12} color="#95a5a6" />
              <DescriptionDataLocalText>
                {entry?.address}
              </DescriptionDataLocalText>
            </DescriptionDataLocalView>
          )}
        </DescriptionDataView>
      </DescriptionView>

      <ValueView>
        <ValueLabel isOut={entry.amount < 0}>{formatMoney(entry.amount)}</ValueLabel>
      </ValueView>
    </Container>
  );
};

export default EntryListItem;
