import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BoxContainer = styled(Animated.View)`
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MenuContainer = styled.View`
  padding: 16px;
  border-radius: 24px;
  background-color: #fff;
  width: 90%;
  margin-top: 24px;
`;

export const MarginContainer = styled.View`
  margin-top: 100px;
`;

export const EmojiContainer = styled(Animated.View)`
  padding: 6px;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: red;
`;

export const EmojiText = styled(Animated.Text)`
  font-size: 30px;
  align-self: center;
`;
