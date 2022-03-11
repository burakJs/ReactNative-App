/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import SignUpView from './app/feature/signup/view/SignUpView.js';
import SignInView from './app/feature/signin/view/SignInView.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUpView}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignInView}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
