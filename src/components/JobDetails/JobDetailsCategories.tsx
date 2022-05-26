import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {};

const JobDetailsCategories = (props: Props) => {
  return (
    <View style={tw`mb-10 flex-row flex-wrap px-6`}>
      <View
        style={tw`mr-3 flex-row items-center bg-blue-400 p-2 rounded-md mt-5`}>
        <Icon name="search1" size={15} color="white" />
        <Text
          style={[
            tw`text-xs pl-1 text-white`,
            {fontFamily: 'Poppins-Regular'},
          ]}>
          Research
        </Text>
      </View>
      <View
        style={tw`mr-3 flex-row items-center bg-blue-400 p-2 rounded-md mt-5`}>
        <Icon name="search1" size={15} color="white" />
        <Text
          style={[
            tw`text-xs pl-1 text-white`,
            {fontFamily: 'Poppins-Regular'},
          ]}>
          Research
        </Text>
      </View>
      <View
        style={tw`mr-3 flex-row items-center bg-blue-400 p-2 rounded-md mt-5`}>
        <Icon name="search1" size={15} color="white" />
        <Text
          style={[
            tw`text-xs pl-1 text-white`,
            {fontFamily: 'Poppins-Regular'},
          ]}>
          Research
        </Text>
      </View>
      <View
        style={tw`mr-3 flex-row items-center bg-blue-400 p-2 rounded-md mt-5`}>
        <Icon name="search1" size={15} color="white" />
        <Text
          style={[
            tw`text-xs pl-1 text-white`,
            {fontFamily: 'Poppins-Regular'},
          ]}>
          Research
        </Text>
      </View>
    </View>
  );
};

export default JobDetailsCategories;
