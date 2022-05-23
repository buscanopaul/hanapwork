import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const LoginRegister = (props: Props) => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={tw`flex flex-row items-center mt-10`}>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={[tw`text-black`, {fontFamily: 'Poppins-Regular'}]}>
          Not a member?
          <Text style={[tw`text-blue-500`]}> Register now</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginRegister;
