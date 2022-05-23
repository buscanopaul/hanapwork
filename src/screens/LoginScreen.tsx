import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginHeader from '../components/Login/LoginHeader';
import LoginField from '../components/Login/LoginField';
import LoginContinue from '../components/Login/LoginContinue';
import LoginSocial from '../components/Login/LoginSocial';
import LoginRegister from '../components/Login/LoginRegister';

type Props = {};

const LoginScreen = (props: Props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={tw`flex-1 w-full h-full items-center justify-around bg-white`}>
      <LoginHeader />
      <LoginField />
      <LoginContinue />
      <LoginSocial />
      <LoginRegister />
    </SafeAreaView>
  );
};

export default LoginScreen;
