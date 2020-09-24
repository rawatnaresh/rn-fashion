import 'react-native-gesture-handler';
import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {Theme} from './src/components';
import {Navigation} from './src/components/Navigation';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {Onboarding, Welcome} from './src/Authentication/';

const AuthenticationStack = createStackNavigator<Navigation>();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator
    headerMode={'none'}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
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
