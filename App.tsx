import 'react-native-gesture-handler';
import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {Theme} from './src/components';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Onboarding} from './src/Authentication/';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode={'none'}>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
