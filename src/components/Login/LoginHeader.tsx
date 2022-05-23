import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Props = {};

const LoginHeader = (props: Props) => {
  return (
    <View>
      <Text
        style={[
          tw`text-2xl text-center pt-10 text-black`,
          {fontFamily: 'Poppins-SemiBold'},
        ]}>
        Hello Again!
      </Text>
      <Text
        style={[
          tw`text-black text-xl pt-2 text-center`,
          {fontFamily: 'Poppins-Regular'},
        ]}>
        Welcome back you've{'\n'} been missed!
      </Text>
    </View>
  );
};

export default LoginHeader;
