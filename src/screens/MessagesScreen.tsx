import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Header from '../components/Header';
import MessagesRecentMatches from '../components/Messages/MessagesRecentMatches';
import MessagesAll from '../components/Messages/MessagesAll';

type Props = {};

const MessagesScreen = (props: Props) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Header />
      <MessagesRecentMatches />
      <View style={tw`border-b border-gray-300 my-8 mx-6`} />
      <MessagesAll />
    </SafeAreaView>
  );
};

export default MessagesScreen;
