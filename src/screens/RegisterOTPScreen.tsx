import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const RegisterOTPScreen = (props: Props) => {
  const handleVerify = () => {};

  return (
    <View style={tw`px-6 bg-white h-full`}>
      <Text
        style={[
          tw`text-2xl pt-10 text-black`,
          {fontFamily: 'Poppins-SemiBold'},
        ]}>
        Verification Code
      </Text>
      <Text style={tw`text-black text-lg pt-2`}>
        We have sent the code verification to your mobile number:
      </Text>
      <Text style={tw`text-black text-lg font-bold mt-3`}>
        +63 999 715 0096
      </Text>
      <TextInput
        style={tw`w-2/5 text-xl text-black font-bold border-b border-gray-300 mt-10`}
        placeholder="Ex. 202135"
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity
        onPress={handleVerify}
        style={tw`p-4 rounded-xl mt-10 bg-blue-400`}>
        <Text style={tw`text-white text-center font-bold text-lg`}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterOTPScreen;
