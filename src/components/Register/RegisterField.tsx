import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import FormField from '../FormField';
import ButtonTemplate from '../ButtonTemplate';

type Props = {};

const RegisterField = (props: Props) => {
  const navigation = useNavigation();
  const handleOTP = () => {
    navigation.navigate('OTP');
  };
  return (
    <View style={tw`mt-10`}>
      <FormField placeholder="Enter First name" />
      <FormField placeholder="Last name" />
      <FormField placeholder="Email address" />
      <FormField placeholder="Phone" />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black mb-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
      />
      <TextInput
        placeholder="Re-enter Password"
        secureTextEntry={true}
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black mb-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
      />

      <ButtonTemplate
        onPress={handleOTP}
        title="Register"
        bgColor="blue"
        titleColor="white"
      />
    </View>
  );
};

export default RegisterField;
