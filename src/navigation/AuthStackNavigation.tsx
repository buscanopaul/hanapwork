import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import MainStackNavigation from './MainStackNavigation';

type Props = {};

const Stack = createNativeStackNavigator();

const AuthStackNavigation = (props: Props) => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainStackNavigation} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigation;
