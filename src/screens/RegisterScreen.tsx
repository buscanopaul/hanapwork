import {View, Text} from 'react-native';
import React from 'react';
import RegisterHeader from '../components/Register/RegisterHeader';
import tw from 'twrnc';
import RegisterField from '../components/Register/RegisterField';

type Props = {};

const RegisterScreen = (props: Props) => {
  return (
    <View style={tw`px-6 bg-white h-full`}>
      <RegisterHeader />
      <RegisterField />
    </View>
  );
};

export default RegisterScreen;
