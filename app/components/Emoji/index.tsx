import React, {useState} from 'react';
import {View, Switch, Pressable} from 'react-native';
import {
  Container,
  LabelText,
  EmojiContainer,
  EmojiText,
  SeparatorLine,
} from './styles';

type EmojiProps = {
  emojiesList: Array<string>;
  setSelectedEmoji: React.Dispatch<React.SetStateAction<string>>;
};

const Emoji = ({emojiesList, setSelectedEmoji}: EmojiProps) => {
  const [switchValue, setSwitchValue] = useState(false);
  const renderEmojis = () => {
    if (switchValue) {
      return (
        <>
          <SeparatorLine />
          <EmojiContainer>
            {emojiesList?.map((item, index) => (
              <Pressable
                key={`emoji-${index}`}
                onPress={() => setSelectedEmoji(item)}>
                <EmojiText>{item}</EmojiText>
              </Pressable>
            ))}
          </EmojiContainer>
        </>
      );
    } else {
      return null;
    }
  };

  const handleSwitchToggle = (value: boolean) => {
    setSwitchValue(value);
    if (!value) {
      setSelectedEmoji('');
    } else {
      setSelectedEmoji(emojiesList[0]);
    }
  };

  return (
    <>
      <Container>
        <LabelText>Show Emojies</LabelText>
        <Switch value={switchValue} onValueChange={handleSwitchToggle} />
      </Container>
      {renderEmojis()}
    </>
  );
};

export default Emoji;
