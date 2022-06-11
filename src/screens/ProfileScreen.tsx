import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ProfileHeader from '../components/Profile/ProfileHeader';
import Header from '../components/Header';
import ProfileBody from '../components/Profile/ProfileBody';

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <SafeAreaView style={tw`bg-white  flex-1`}>
      <Header />
      <View style={tw`px-6`}>
        <ProfileHeader />
        <ProfileBody />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
