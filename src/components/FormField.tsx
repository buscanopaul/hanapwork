import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import tw from 'twrnc';

type Props = {};

const FormField = (props: Props) => {
  return (
    <>
      <TextInput
        style={[
          tw`bg-white h-13 p-3 px-4 rounded-xl text-black border border-gray-300 mb-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default FormField;
