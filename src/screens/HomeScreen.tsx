import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import HomeHeader from '../components/Home/HomeHeader';
import HomeVerifiedCompanies from '../components/Home/HomeVerifiedCompanies';
import HomeCompanies from '../components/Home/HomeCompanies';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw``}>
        <HomeHeader />
        <HomeVerifiedCompanies />
        <HomeCompanies />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
