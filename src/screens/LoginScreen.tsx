import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {};

const LoginScreen = (props: Props) => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('Main');
  };

  const handleReset = () => {
    AsyncStorage.setItem('onboardingKey', 'false');
  };

  return (
    <View style={tw`flex-1 w-full h-full justify-center items-center`}>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={handleHome}>
        <Text>go to home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset}>
        <Text>Reset async storage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
