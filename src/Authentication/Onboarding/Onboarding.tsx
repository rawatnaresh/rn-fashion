import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import {interpolateColor} from 'react-native-redash/lib/module/';

import Slide, {SLIDE_HEIGHT} from './Slide';
import Subslide from './Subslide';

const {width} = Dimensions.get('window');
const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
    flexDirection: 'row',
  },
});

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfits? Don't worry find the best oufit here",
  },
  {
    title: 'Playfull',
    color: '#BEECC4',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of ourfit ideas',
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individuals & unique style and look amazing everyday',
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the best trends in fashion and explore your personality',
  },
];

const Onboarding = () => {
  const scrollRef = useRef<Animated.ScrollView>(null);
  const scrollOffset = useSharedValue(0);

  const backgroundStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollOffset.value,
      [0, width, width * 2, width * 3],
      ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD']
    );
    return {backgroundColor};
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.x;
    },
  });

  const transfromStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: -scrollOffset.value}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, backgroundStyles]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler}
          scrollEventThrottle={1}
          ref={scrollRef}>
          {slides.map(({title}, index) => (
            <Slide label={title} key={index} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[StyleSheet.absoluteFillObject, backgroundStyles]}
        />

        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
            },
            transfromStyle,
          ]}>
          {slides.map(({subtitle, description}, index) => (
            <Subslide
              onPress={() => {
                if (scrollRef.current) {
                  scrollRef.current
                    .getNode()
                    .scrollTo({x: width * (index + 1), animated: true});
                }
              }}
              key={index}
              last={index === slides.length - 1}
              x={scrollOffset}
              {...{subtitle, description}}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
