import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LabelText = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: 500;
`;

export const EmojiContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EmojiText = styled.Text`
  font-size: 30px;
`;

export const SeparatorLine = styled.View`
  height: 0.5px;
  background-color: #ccc;
  margin: 12px 12px;
`;
