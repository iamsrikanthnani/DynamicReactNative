import React, {useState} from 'react';
import {
  Container,
  RowContainer,
  LabelContainer,
  LabelText,
  IncrementDecrementContainer,
  ButtonContainer,
  ButtonText,
  NumberContainer,
  NumberText,
  SeparatorLine,
} from './styles';
import Animated, {runOnJS, useDerivedValue} from 'react-native-reanimated';

type ValueProps = {
  size: number;
  borderRadius: number;
};

type SizeRadiusProps = {
  animatedSize: Animated.SharedValue<number>;
  animatedBorderRadius: Animated.SharedValue<number>;
};

const SizeRadius = ({animatedSize, animatedBorderRadius}: SizeRadiusProps) => {
  const [values, setValues] = useState<ValueProps>({
    size: 0,
    borderRadius: 0,
  });

  const updateValues = () => {
    setValues({
      size: animatedSize?.value,
      borderRadius: animatedBorderRadius?.value,
    });
  };

  useDerivedValue(() => {
    runOnJS(updateValues)();
  });

  return (
    <Container>
      {/* Radius */}
      <RowContainer>
        <LabelContainer>
          <LabelText>Radius</LabelText>
        </LabelContainer>
        <IncrementDecrementContainer>
          {/* Decrement Button */}
          <ButtonContainer onPress={() => (animatedBorderRadius.value -= 5)}>
            <ButtonText>-</ButtonText>
          </ButtonContainer>
          {/* Number */}
          <NumberContainer>
            <NumberText>{values?.borderRadius}</NumberText>
          </NumberContainer>
          {/* Increment Button */}
          <ButtonContainer onPress={() => (animatedBorderRadius.value += 5)}>
            <ButtonText>+</ButtonText>
          </ButtonContainer>
        </IncrementDecrementContainer>
      </RowContainer>
      <SeparatorLine />

      {/* SIZE */}
      <RowContainer>
        <LabelContainer>
          <LabelText>Size</LabelText>
        </LabelContainer>
        <IncrementDecrementContainer>
          {/* Decrement Button */}
          <ButtonContainer onPress={() => (animatedSize.value -= 10)}>
            <ButtonText>-</ButtonText>
          </ButtonContainer>
          {/* Number */}
          <NumberContainer>
            <NumberText>{values?.size}</NumberText>
          </NumberContainer>
          {/* Increment Button */}
          <ButtonContainer onPress={() => (animatedSize.value += 10)}>
            <ButtonText>+</ButtonText>
          </ButtonContainer>
        </IncrementDecrementContainer>
      </RowContainer>
    </Container>
  );
};

export default SizeRadius;
