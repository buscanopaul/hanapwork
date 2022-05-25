import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Props = {};

const JobDetailsHeader = (props: Props) => {
  return (
    <View style={tw`px-6`}>
      <Image
        style={[tw`h-57 bg-blue-300 rounded-xl mt-5`, {resizeMode: 'contain'}]}
        source={{
          uri: 'https://officesnapshots.com/wp-content/uploads/2019/08/deloitte-offices-bucharest-17-700x467.jpg',
        }}
      />
      <Image
        style={[
          tw`w-15 h-15 bg-white rounded-full absolute bottom-5 right-10`,
          {resizeMode: 'contain'},
        ]}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png',
        }}
      />
    </View>
  );
};

export default JobDetailsHeader;
