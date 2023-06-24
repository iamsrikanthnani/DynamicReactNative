import React from 'react';
import BgColors from './components/BgColors/index';
import SizeRadius from './components/SizeRadius/index';
import {
  Container,
  BoxContainer,
  MenuContainer,
  MarginContainer,
  EmojiContainer,
  EmojiText,
} from './styles';
import {useApp} from './hooks/useApp';
import Emoji from './components/Emoji';

const App = () => {
  // use app hook
  const {
    colors,
    emojiesList,
    selectedEmoji,
    setSelectedEmoji,
    animatedSize,
    animatedSizeStyles,
    animatedBorderRadius,
    animatedBackgroundColor,
    animatedBackgroundColorStyles,
    emojiStyles,
    emojiSize,
  } = useApp();

  return (
    <Container style={animatedBackgroundColorStyles}>
      {/* dynamic box container */}
      <BoxContainer style={animatedSizeStyles}>
        {/* emoji */}
        {selectedEmoji && (
          <EmojiContainer style={emojiStyles}>
            <EmojiText style={emojiSize}>{selectedEmoji}</EmojiText>
          </EmojiContainer>
        )}
      </BoxContainer>
      <MarginContainer />
      {/* bg colors */}
      <MenuContainer>
        <BgColors
          colors={colors}
          animatedBackgroundColor={animatedBackgroundColor}
        />
      </MenuContainer>

      {/* width/height and radius */}
      <MenuContainer>
        <SizeRadius
          animatedSize={animatedSize}
          animatedBorderRadius={animatedBorderRadius}
        />
      </MenuContainer>
      {/* Emojies */}
      <MenuContainer>
        <Emoji emojiesList={emojiesList} setSelectedEmoji={setSelectedEmoji} />
      </MenuContainer>
    </Container>
  );
};

export default App;
