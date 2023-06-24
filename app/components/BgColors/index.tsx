import React from 'react';
import {StyledFlatlist, ColorItem} from './styles';
import Animated from 'react-native-reanimated';

type BgColorsProps = {
  colors: Array<string>;
  animatedBackgroundColor: Animated.SharedValue<string>;
};

const BgColors = ({colors, animatedBackgroundColor}: BgColorsProps) => {
  return (
    <StyledFlatlist
      data={colors}
      //@ts-ignore
      renderItem={({item, index}: {item: string; index: number}) => (
        <ColorItem
          key={index}
          backgroundColor={item}
          onPress={() => (animatedBackgroundColor.value = item)}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'space-between',
        flex: 1,
      }}
    />
  );
};

export default BgColors;
