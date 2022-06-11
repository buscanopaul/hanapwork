import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import HomeVerifiedCompanies from '../components/Home/HomeVerifiedCompanies';
import HomeCompanies from '../components/Home/HomeCompanies';
import Header from '../components/Header';

type Props = {};

const HomeScreen = (props: Props, onPress) => {
  return (
    <>
      <SafeAreaView style={tw`bg-white flex-1`}>
        <View style={tw`h-5/6`}>
          <Header undoStatus={true} />
          <HomeVerifiedCompanies />
          <HomeCompanies />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
