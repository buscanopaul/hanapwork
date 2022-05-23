import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import MainStackNavigation from './MainStackNavigation';
import RegisterScreen from '../screens/RegisterScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const AuthStackNavigation = (props: Props) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainStackNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigation;
