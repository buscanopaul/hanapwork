import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const LoginScreen = (props: Props) => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('Main');
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={handleHome}>
        <Text>go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
