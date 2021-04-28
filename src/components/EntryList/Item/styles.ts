import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
`;

export const ButtonText = styled.Text``;

export const ViewSVG = styled.View``;

export const DescriptionView = styled.View`
  flex: 1;
  overflow: hidden;
`;

export const DescriptionLabel = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
`;

export const DescriptionDataView = styled.View`
  flex-direction: row;
`;

export const DescriptionDataDateView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescriptionDataDateText = styled.Text`
  color: ${props => props.theme.colors.metal};
  margin-left: 2px;
  margin-right: 8px;
`;

export const DescriptionDataLocalView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescriptionDataLocalText = styled.Text`
  color: ${props => props.theme.colors.metal};
  margin-left: 2px;
`;

export const ValueView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ValueLabel = styled.Text`
  padding: 5px;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  font-size: 14px;
`;
