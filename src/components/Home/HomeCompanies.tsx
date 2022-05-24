import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const HomeCompanies = (props: Props) => {
  const navigation = useNavigation();
  const handleDetails = () => {
    navigation.navigate('JobDetails');
  };

  return (
    <TouchableOpacity style={tw`px-6 mt-5`} onPress={handleDetails}>
      <ImageBackground
        style={tw`h-80`}
        imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
        resizeMode="cover"
        source={{
          uri: 'https://static.dezeen.com/uploads/2017/08/apple-park-john-ive-architecture-offices_dezeen_hero-1a.jpg',
        }}>
        <LinearGradient
          style={tw`flex-row h-full w-full p-5 justify-between items-end`}
          colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}>
          <View>
            <Text
              style={[
                tw`text-white text-xl`,
                {fontFamily: 'Poppins-SemiBold'},
              ]}>
              Deloitte Inc.
            </Text>
            <Text style={[tw`text-white`, {fontFamily: 'Poppins-Regular'}]}>
              Manila City
            </Text>
          </View>
          <View>
            <Image
              style={[
                tw`w-15 h-15 bg-white rounded-full`,
                {resizeMode: 'contain'},
              ]}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png',
              }}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={tw`bg-blue-200 p-4 rounded-b-2xl`}>
        <Text style={[tw`mb-3`, {fontFamily: 'Poppins-SemiBold'}]}>
          Administrative Assistant
        </Text>
        <View style={tw`flex-row`}>
          <Text style={[tw``, {fontFamily: 'Poppins-Regular'}]}>
            {'\u2022'}
          </Text>
          <Text style={[tw`pl-1`, {fontFamily: 'Poppins-Regular'}]}>
            2 years Needed
          </Text>
        </View>
        <View style={tw`flex-row`}>
          <Text style={[tw``, {fontFamily: 'Poppins-Regular'}]}>
            {'\u2022'}
          </Text>
          <Text style={[tw`pl-1`, {fontFamily: 'Poppins-Regular'}]}>
            Full-Time
          </Text>
        </View>
        <View style={tw`flex-row`}>
          <Text style={[tw``, {fontFamily: 'Poppins-Regular'}]}>
            {'\u2022'}
          </Text>
          <Text style={[tw`pl-1`, {fontFamily: 'Poppins-Regular'}]}>
            Excellent MS Office knowledge
          </Text>
        </View>
        <View style={tw`flex-row`}>
          <Text style={[tw``, {fontFamily: 'Poppins-Regular'}]}>
            {'\u2022'}
          </Text>
          <Text style={[tw`pl-1`, {fontFamily: 'Poppins-Regular'}]}>
            Work experience as an Executive Assistant, Personal Assistant or
            similar role
          </Text>
        </View>
        <View style={tw`flex-row items-center flex-wrap mt-7`}>
          <View
            style={tw`mr-3 flex-row items-center bg-blue-300 p-2 rounded-md`}>
            <Icon name="user" size={15} color="black" />
            <Text style={[tw`text-xs pl-1`, {fontFamily: 'Poppins-Regular'}]}>
              Customer Support
            </Text>
          </View>
          <View
            style={tw`mr-3 flex-row items-center bg-blue-300 p-2 rounded-md`}>
            <Icon name="book" size={15} color="black" />
            <Text style={[tw`text-xs pl-1`, {fontFamily: 'Poppins-Regular'}]}>
              Admin
            </Text>
          </View>
          <View
            style={tw`mr-3 flex-row items-center bg-blue-300 p-2 rounded-md mt-8`}>
            <Icon name="search1" size={15} color="black" />
            <Text style={[tw`text-xs pl-1`, {fontFamily: 'Poppins-Regular'}]}>
              Research
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCompanies;
