import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingStackNavigation from './src/navigation/OnboardingStackNavigation';
import AuthStackNavigation from './src/navigation/AuthStackNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboard" component={OnboardingStackNavigation} />
        <Stack.Screen name="Auth" component={AuthStackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
