import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import FormField from '../FormField';
import ButtonTemplate from '../ButtonTemplate';

type Props = {};

const LoginField = (props: Props) => {
  const navigation = useNavigation();

  const handleShowPassword = () => {
    console.log('show password');
  };

  const handleHome = () => {
    navigation.navigate('Main');
  };

  const handleRecoverPassword = () => {};

  return (
    <View style={tw`px-6 w-full mt-4`}>
      <FormField placeholder="Enter username" />
      <TextInput
        style={[
          tw`mb-4 bg-white h-13 p-3 px-4 rounded-xl text-black border border-gray-300`,
          {fontFamily: 'Poppins-Regular'},
        ]}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={handleShowPassword}
        style={tw`absolute right-3 bottom-6 z-50 p-1`}>
        <Icon style={tw``} name="eye" size={25} color="lightgray" />
      </TouchableOpacity>
      <View style={tw`flex-row flex-wrap justify-end`}>
        <TouchableOpacity onPress={handleRecoverPassword} style={tw`mt-1`}>
          <Text
            style={[
              tw`text-right text-xs text-black`,
              {fontFamily: 'Poppins-Regular'},
            ]}>
            Recovery Password
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonTemplate
        onPress={handleHome}
        title="Sign in"
        bgColor="blue"
        titleColor="white"
      />
    </View>
  );
};

export default LoginField;
