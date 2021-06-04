/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignUpScreen from './Component/SignUpScreen';
import ForgotPassWordScreen from './Component/ForgotPassWordScreen';
import PasswordScreen from './Component/PasswordScreen';
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='home'>
        <Stack.Screen name='home' component={SignUpScreen}></Stack.Screen>
        <Stack.Screen name='ForgotPassWordScreen' component={ForgotPassWordScreen}></Stack.Screen>
        <Stack.Screen name="passwordScreen" component={PasswordScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  x:{
    marginLeft:20,
  }
});

export default App;
