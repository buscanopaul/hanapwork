import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {};

const CustomDrawer = (props: Props) => {
  return (
    <View style={tw`flex-1`}>
      <DrawerContentScrollView {...props}>
        <Image
          style={[tw`w-30 h-30 ml-3`, {resizeMode: 'contain'}]}
          source={require('../assets/images/logo-company.png')}
        />
        <View style={tw`border-b border-b-gray-300 pb-3 mb-3`} />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={tw`p-5 pb-10 border-t border-t-gray-300`}>
        <TouchableOpacity style={tw`flex-row items-center`}>
          <Icon name="export2" size={20} color="black" />
          <Text style={[tw`ml-4`, {fontFamily: 'Poppins-SemiBold'}]}>
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
