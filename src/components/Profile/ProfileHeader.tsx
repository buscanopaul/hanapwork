import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import FormField from '../FormField';

type Props = {};

const ProfileHeader = (props: Props) => {
  return (
    <View style={tw``}>
      <View style={tw`flex-col items-center`}>
        <Image
          style={[tw`w-20 h-20 rounded-full mt-10`, {resizeMode: 'cover'}]}
          source={{
            uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
          }}
        />
        <Text
          style={[
            tw`text-2xl pt-5 text-black`,
            {fontFamily: 'Poppins-SemiBold'},
          ]}>
          Paul Buscano
        </Text>
        <Text style={[tw`text-black  pt-0`, {fontFamily: 'Poppins-Regular'}]}>
          Software Engineer
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
