import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';

type Props = {};
const {width} = Dimensions.get('window');

const SwipeItem = (props: Props) => {
  return (
    <View style={tw`items-center`}>
      <Image
        style={tw`w-80 h-80`}
        source={require('../../assets/images/onboard1.jpg')}
      />
      <Text
        style={[
          tw`text-3xl text-center pt-10 text-black px-6`,
          {fontFamily: 'Poppins-SemiBold', width: width},
        ]}>
        {props.item.title}
      </Text>
      <Text
        style={[
          tw`text-center pt-5 px-6 text-black`,
          {fontFamily: 'Poppins-Regular', width: width},
        ]}>
        A filter with many options will help you find your dream job quickly and
        easily
      </Text>
    </View>
  );
};

export default SwipeItem;
