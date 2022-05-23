import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const RegisterField = (props: Props) => {
  const navigation = useNavigation();
  const handleOTP = () => {
    navigation.navigate('OTP');
  };

  return (
    <View style={tw`mt-10`}>
      <TextInput
        placeholder="Enter first name"
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black`,
          {fontFamily: 'Poppins-Regular'},
        ]}
      />
      <TextInput
        placeholder="Last name"
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black mt-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
      />
      <TextInput
        placeholder="Email address"
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black mt-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
      />
      <TextInput
        placeholder="Phone"
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black mt-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black mt-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
      />
      <TextInput
        placeholder="Re-enter Password"
        secureTextEntry={true}
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black mt-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
      />

      <TouchableOpacity
        onPress={handleOTP}
        style={tw`p-4 rounded-xl mt-8 bg-blue-400`}>
        <Text style={tw`text-white text-center font-bold text-lg`}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterField;
