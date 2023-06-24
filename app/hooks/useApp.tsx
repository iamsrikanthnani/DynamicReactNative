import {useState} from 'react';
import {
  useSharedValue,
  withSpring,
  runOnJS,
  useAnimatedStyle,
} from 'react-native-reanimated';

type AppProps = {};

export const useApp = () => {
  const colors = [
    //colors
    'black',
    'darkblue',
    'darkgreen',
    'darkcyan',
    'darkmagenta',
    'darkred',
  ];
  //emojies
  const emojiesList = ['😎', '🤩', '😊', '🚀', '🌟', '🎉'];

  // animated values
  const animatedSize = useSharedValue<number>(100);
  const animatedBorderRadius = useSharedValue<number>(12);
  const animatedBackgroundColor = useSharedValue<string>(colors[0]);
  // selected values
  const [selectedEmoji, setSelectedEmoji] = useState('');

  // box container size and border radius
  const animatedSizeStyles = useAnimatedStyle(() => {
    return {
      width: withSpring(animatedSize.value, {duration: 1000}),
      height: withSpring(animatedSize.value, {duration: 1000}),
      borderRadius: withSpring(animatedBorderRadius.value, {duration: 1000}),
    };
  });

  // main container background color
  const animatedBackgroundColorStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withSpring(animatedBackgroundColor.value, {
        duration: 1500,
      }),
    };
  });

  // emoji styles
  const emojiStyles = useAnimatedStyle(() => {
    return {
      width: withSpring(animatedSize.value / 2, {duration: 1000}),
      height: withSpring(animatedSize.value / 2, {duration: 1000}),
      borderRadius: withSpring(animatedBorderRadius.value, {
        duration: 1000,
      }),
      backgroundColor: withSpring(animatedBackgroundColor.value, {
        duration: 1500,
      }),
    };
  });

  // selected emoji styles
  const emojiSize = useAnimatedStyle(() => {
    return {
      fontSize: withSpring(animatedSize.value / 3, {duration: 1000}),
    };
  });

  return {
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
  };
};
