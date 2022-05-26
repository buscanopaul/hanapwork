import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'twrnc';

type Props = {
  title: String;
  bgColor: String;
  titleColor: String;
};

const ButtonTemplate = ({
  props: Props,
  onPress,
  title,
  bgColor,
  titleColor,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={tw`p-4 rounded-xl mt-8 ${
          bgColor == 'white' || bgColor == 'black'
            ? `bg-${bgColor}`
            : `bg-${bgColor}-400`
        } `}>
        <Text
          style={[
            tw`${
              titleColor == 'white' || titleColor == 'black'
                ? `text-${titleColor}`
                : `text-${titleColor}-400`
            }
             text-center text-lg`,
            {fontFamily: 'Poppins-SemiBold'},
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonTemplate;
