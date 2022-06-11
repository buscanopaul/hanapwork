import {View, Text} from 'react-native';
import React from 'react';
import FormField from '../FormField';
import tw from 'twrnc';
import ButtonTemplate from '../ButtonTemplate';

type Props = {};

const ProfileBody = (props: Props) => {
  return (
    <View style={tw`mt-10`}>
      <FormField placeholder="First name" value="Paul Lorenz" />
      <FormField placeholder="Last name" value="Buscano" />
      <FormField placeholder="Email " value="dev.paul003@gmail.com" />
      <FormField placeholder="Phone" value="+63 999 715 0096" />
      <ButtonTemplate title="Reset Password" bgColor="red" titleColor="white" />
      <ButtonTemplate title="Save" bgColor="blue" titleColor="white" />
    </View>
  );
};

export default ProfileBody;
