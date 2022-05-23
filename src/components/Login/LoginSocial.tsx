import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const LoginSocial = (props: Props) => {
  return (
    <View
      style={tw`flex flex-row justify-around items-center w-full px-6 mt-5`}>
      <TouchableOpacity style={tw`bg-gray-200 px-5 py-3 rounded-xl`}>
        <Image
          style={tw`w-10 h-10`}
          source={require('../../assets/images/icon-google.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-gray-200 px-5 py-3 rounded-xl`}>
        <Image
          style={tw`w-10 h-10`}
          source={require('../../assets/images/icon-apple.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-gray-200 px-5 py-3 rounded-xl`}>
        <Image
          style={tw`w-10 h-10`}
          source={require('../../assets/images/icon-facebook.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LoginSocial;
