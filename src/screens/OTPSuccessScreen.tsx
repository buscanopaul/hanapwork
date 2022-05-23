import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const OTPSuccess = (props: Props) => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('Main');
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
            Your phone number has been verified successfully.
          </Text>
        </View>
        <View style={tw`w-full`}>
          <TouchableOpacity
            onPress={handleHome}
            style={tw`bg-white w-full p-4 rounded-xl`}>
            <Text
              style={[
                tw`text-black text-center text-lg`,
                {fontFamily: 'Poppins-SemiBold'},
              ]}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPSuccess;
