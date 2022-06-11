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
            uri: 'https://www.sanmiguel.com.ph/img/SMC-FB-Banner-2021.jpg',
          }}
        />
        <Text style={[tw`w-70 pl-4`, {fontFamily: 'Poppins-Regular'}]}>
          You are matches with{' '}
          <Text style={{fontFamily: 'Poppins-SemiBold'}}>
            San Miguel Corporation
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ConversationHeader;
