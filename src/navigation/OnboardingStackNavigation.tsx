import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import AuthStackNavigation from './AuthStackNavigation';

type Props = {};

const Stack = createNativeStackNavigator();

const OnboardingStackNavigation = (props: Props) => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Auth" component={AuthStackNavigation} />
      </Stack.Navigator>
    </>
  );
};

export default OnboardingStackNavigation;
