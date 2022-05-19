import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingStackNavigation from './src/navigation/OnboardingStackNavigation';
import AuthStackNavigation from './src/navigation/AuthStackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [onboard, setOnBoard] = useState();

  useEffect(() => {
    const appData = AsyncStorage.getItem('onboardingKey').then(appData => {
      setOnBoard(appData);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {onboard == null ||
        onboard == false ||
        typeof onboard == 'undefined' ? (
          <Stack.Screen name="Onboard" component={OnboardingStackNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStackNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
