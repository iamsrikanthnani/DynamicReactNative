import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelContainer = styled.View`
  flex: 1;
`;

export const LabelText = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: 500;
`;

export const IncrementDecrementContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
`;

export const NumberContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  align-self: center;
`;

export const NumberText = styled(Animated.Text)`
  font-size: 18px;
  color: black;
  font-weight: 500;
`;

export const SeparatorLine = styled.View`
  height: 0.5px;
  background-color: #ccc;
  margin: 12px 12px;
`;
