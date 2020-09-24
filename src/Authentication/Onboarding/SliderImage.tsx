import React from 'react';
import {StyleSheet, Dimensions, ImageRequireSource, Image} from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
const {width} = Dimensions.get('window');
const BORDER_RADIUS = 75;

interface DotProps {
  index: number;
  scrollOffset: Animated.SharedValue<number>;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
}
const styles = StyleSheet.create({
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});
const SliderImage = ({index, scrollOffset, picture}: DotProps) => {
  const opacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value / width,
      [index - 1, index, index + 1],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {opacity};
  });
  return (
    <Animated.View
      key={index}
      style={[
        styles.underlay,
        {width: 300, alignItems: 'center', justifyContent: 'center'},
        opacityStyle,
      ]}>
      <Image source={picture.src} style={styles.picture} />
    </Animated.View>
  );
};

export default SliderImage;
