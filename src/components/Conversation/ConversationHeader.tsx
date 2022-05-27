import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Props = {};

const ConversationHeader = (props: Props) => {
  return (
    <View style={tw`mb-5`}>
      <Text
        style={[
          tw`text-gray-400 text-xs text-center`,
          {fontFamily: 'Poppins-Regular'},
        ]}>
        Today, 12:01 PM
      </Text>
      <View style={tw`bg-gray-100 rounded-xl flex-row items-center p-4 mt-5`}>
        <Image
          style={[
            tw`w-13 h-13 rounded-full bg-blue-400 border-2 border-blue-400`,
            {resizeMode: 'cover'},
          ]}
          source={{
            uri: 'https://images.unsplash.com/photo-1553531540-d99596614a82?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
          }}
        />
        <Text style={[tw`w-70 pl-4`, {fontFamily: 'Poppins-Regular'}]}>
          You are matches with Georgia Wongkono.
        </Text>
      </View>
    </View>
  );
};

export default ConversationHeader;
