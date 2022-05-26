import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ButtonTemplate from '../components/ButtonTemplate';

type Props = {};

const OTPScreen = (props: Props) => {
  const navigation = useNavigation();

  const handleVerify = () => {
    navigation.navigate('Success', {
      message: 'Your phone number has been verified successfully.',
    });
  };

  return (
    <View style={tw`px-6 bg-white h-full`}>
      <Text
        style={[
          tw`text-2xl pt-10 text-black`,
          {fontFamily: 'Poppins-SemiBold'},
        ]}>
        Verification Code
      </Text>
      <Text
        style={[tw`text-black text-lg pt-2`, {fontFamily: 'Poppins-Regular'}]}>
        We have sent the code verification to your mobile number:
      </Text>
      <Text
        style={[tw`text-black text-lg mt-3`, {fontFamily: 'Poppins-SemiBold'}]}>
        +63 999 715 0096
      </Text>
      <TextInput
        style={[
          tw`w-2/5 text-xl text-black  border-b border-gray-300 mt-10`,
          {fontFamily: 'Poppins-SemiBold'},
        ]}
        placeholder="Ex. 202135"
        keyboardType="numeric"
        maxLength={6}
      />
      <View style={tw`flex flex-row pt-5`}>
        <Text style={[tw``, {fontFamily: 'Poppins-Regular'}]}>
          If you didn't receive a code:{' '}
        </Text>
        <TouchableOpacity>
          <Text style={[tw`text-blue-500`, {fontFamily: 'Poppins-Regular'}]}>
            Resend
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonTemplate
        onPress={handleVerify}
        title="Verify"
        bgColor="blue"
        titleColor="white"
      />
    </View>
  );
};

export default OTPScreen;
