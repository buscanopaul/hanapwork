import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import HomeVerifiedCompanies from '../components/Home/HomeVerifiedCompanies';
import HomeCompanies from '../components/Home/HomeCompanies';
import Header from '../components/Header';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw``}>
        <Header />
        <HomeVerifiedCompanies />
        <HomeCompanies />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
