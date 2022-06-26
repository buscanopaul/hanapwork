import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingStackNavigation from './src/navigation/OnboardingStackNavigation';
import AuthStackNavigation from './src/navigation/AuthStackNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthProvider} from './src/hooks/useAuth';
import StackNavigator from './src/navigation/StackNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  const [onboard, setOnBoard] = useState();
  // const user = false;

  useEffect(() => {
    const appData = AsyncStorage.getItem('onboardingKey').then(appData => {
      setOnBoard(appData);
    });
  }, []);

  return (
    <NavigationContainer>
      {/* HOC - Higher Order Component */}
      <AuthProvider>
        {/* Passes to children */}
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {onboard == null ||
          onboard == false ||
          typeof onboard == 'undefined' ? (
            <Stack.Screen
              name="Onboard"
              component={OnboardingStackNavigation}
            />
          ) : (
            <Stack.Screen name="MainStack" component={StackNavigator} />
          )}
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
