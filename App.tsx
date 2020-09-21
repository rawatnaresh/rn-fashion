import 'react-native-gesture-handler';
import * as React from 'react';
// import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Onboarding} from './src/Authentication/';

const AuthenticationStack = createStackNavigator();

// const fonts = {
//   'SFProText-Bold': require('./assets/fonts/sf-ui-display-bold.otf'),
//   'SFProText-Semibold': require('./assets/fonts/sf-ui-display-semibold.otf'),
//   'SFProText-regular': require('./assets/fonts/sf-ui-display-display.otf'),
// };
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode={'none'}>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}
