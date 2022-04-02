/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeView from './app/src/home/HomeView.js';
import SignInView from './app/src/signin/SignInView.js';
import SignUpView from './app/src/signup/SignUpView.js';
import NavigateEnum from './app/components/enum/NavigateEnum.js';

const Stack = createNativeStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen
        options={{headerShown: false}}
        name={NavigateEnum.SIGNUP}
        component={SignUpView}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={NavigateEnum.SIGNIN}
        component={SignInView}
      />
      <Stack.Screen name={NavigateEnum.HOME} component={HomeView} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
