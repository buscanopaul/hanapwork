import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Props = {};

const LoginContinue = (props: Props) => {
  return (
    <View style={tw`flex flex-row px-6 mt-5`}>
      <View style={tw`bg-gray-300 h-0.5 flex-1 self-center`} />
      <Text
        style={[
          tw`self-center px-5 text-black`,
          {fontFamily: 'Poppins-Regular'},
        ]}>
        Or continue with
      </Text>
      <View style={tw`bg-gray-300 h-0.5 flex-1 self-center`} />
    </View>
  );
};

export default LoginContinue;
