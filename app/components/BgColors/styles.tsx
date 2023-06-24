import styled from 'styled-components/native';

type ColorItemProps = {
  backgroundColor: string;
};

export const StyledFlatlist = styled.FlatList``;

export const ColorItem = styled.TouchableOpacity<ColorItemProps>`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  margin: 5px;
  background-color: ${props => props.backgroundColor ?? 'black'};
`;
