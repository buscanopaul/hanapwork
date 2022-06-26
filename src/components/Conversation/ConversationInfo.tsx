import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const ConversationInfo = (props: Props) => {
  return (
    <View style={tw`px-6`}>
      <Text
        style={[
          tw`text-lg text-center mt-2 mb-3 text-black`,
          {fontFamily: 'Poppins-SemiBold'},
        ]}>
        Job Information
      </Text>
      <View style={tw`border-b bg-lightgray mb-4`} />
      <View style={tw`flex-row items-center`}>
        <Image
          style={tw`w-10 h-10 rounded-full`}
          source={{
            uri: 'https://www.sanmiguel.com.ph/img/SMC-FB-Banner-2021.jpg',
          }}
        />
        <View style={tw`pl-3`}>
          <Text
            style={[tw`text-black mb-0.5`, {fontFamily: 'Poppins-SemiBold'}]}>
            San Miguel Corporation
          </Text>
          <Text
            style={[
              tw`text-xs text-gray-500`,
              {fontFamily: 'Poppins-Regular'},
            ]}>
            sanmiguel@gmail.com
          </Text>
        </View>
      </View>
      <View>
        <View>
          <Text>Posted 24 hours ago</Text>
          <Text>Full Time</Text>
        </View>
        <TouchableOpacity>
          <Text> 12,000 / month</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConversationInfo;
