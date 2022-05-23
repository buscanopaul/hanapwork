import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

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
      <TextInput
        style={[
          tw`bg-white h-13 p-3 px-4 rounded-xl text-black border border-gray-300`,
          {fontFamily: 'Poppins-Regular'},
        ]}
        placeholder="Enter username"
      />
      <TextInput
        style={[
          tw`mt-4 bg-white h-13 p-3 px-4 rounded-xl text-black border border-gray-300`,
          {fontFamily: 'Poppins-Regular'},
        ]}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={handleShowPassword}
        style={tw`absolute right-3 bottom-2 z-50 p-1`}>
        <Icon style={tw``} name="eye" size={25} color="lightgray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRecoverPassword} style={tw`mt-4`}>
        <Text
          style={[
            tw`text-right text-xs text-black`,
            {fontFamily: 'Poppins-Regular'},
          ]}>
          Recovery Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleHome}
        style={tw`p-4 rounded-xl mt-8 bg-blue-400`}>
        <Text style={tw`text-white text-center font-bold text-lg`}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginField;
