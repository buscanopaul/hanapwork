import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Props = {};

const RegisterHeader = (props: Props) => {
  return (
    <View>
      <Text
        style={[
          tw`text-2xl pt-10 text-black`,
          {fontFamily: 'Poppins-SemiBold'},
        ]}>
        Let's sign you up
      </Text>
      <Text
        style={[tw`text-black text-lg pt-2`, {fontFamily: 'Poppins-Regular'}]}>
        Almost there.
      </Text>
      <Text style={[tw`text-black text-lg`, {fontFamily: 'Poppins-Regular'}]}>
        Create an account to continue!
      </Text>
    </View>
  );
};

export default RegisterHeader;
