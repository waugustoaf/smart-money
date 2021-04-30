import styled from 'styled-components/native';

interface ContainerProps {
  categoryColor: string;
  isSelectedCategory: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${props =>
    props.isSelectedCategory ? '#57a35b' : props.theme.colors.asphalt};
  border: 2px solid ${props => props.categoryColor};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 20px;
`;

export const Name = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  text-align: center;
`;