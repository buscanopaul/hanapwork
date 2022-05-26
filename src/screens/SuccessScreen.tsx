import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ButtonTemplate from '../components/ButtonTemplate';

type Props = {};

const SuccessScreen = ({route}) => {
  const navigation = useNavigation();
  const {message} = route.params;

  const handleHome = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={tw`bg-blue-400`}>
      <View
        style={tw`px-6 h-full w-full flex flex-col justify-between items-center`}>
        <View
          style={tw`flex flex-col items-center w-full h-4/5 justify-center`}>
          <Image
            style={tw`w-40 h-40`}
            source={require('../assets/images/animated-success.gif')}
          />
          <Text
            style={[
              tw`text-2xl text-white text-center pt-5`,
              {fontFamily: 'Poppins-SemiBold'},
            ]}>
            Awesome!
          </Text>
          <Text
            style={[
              tw`text-center text-white`,
              {fontFamily: 'Poppins-Regular'},
            ]}>
            {message}
          </Text>
        </View>
        <View style={tw`w-full`}>
          <ButtonTemplate
            onPress={handleHome}
            title="Get Started"
            bgColor="white"
            titleColor="black"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
