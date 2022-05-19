import {View, Text, Button, Image, SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Swipe from '../components/Swipe';

type Props = {};

const OnboardingScreen = (props: Props) => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Auth');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex flex-row items-center justify-end px-6`}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={[tw`text-gray-400`, {fontFamily: 'Poppins-Regular'}]}>
            SKIP
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-1 pt-20`}>
        <Swipe />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
