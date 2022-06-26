import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';
import MainStackNavigation from './MainStackNavigation';
import DrawerNavigation from './DrawerNavigation';
import AuthStackNavigation from './AuthStackNavigation';
import {authentication} from '../../firebase/firebase-config';

type Props = {};

const Stack = createNativeStackNavigator();

const StackNavigator = (props: Props) => {
  const {user} = useAuth();

  const currentUser = authentication.currentUser;

  console.log('currentUser', currentUser);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <Stack.Screen name="MainStack" component={DrawerNavigation} />
        </>
      ) : (
        <Stack.Screen name="Login" component={AuthStackNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
