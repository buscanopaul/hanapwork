import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerActions, useNavigation} from '@react-navigation/native';

type Props = {};

const Header = (props: Props) => {
  const navigation = useNavigation();
  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={tw`flex-row justify-between items-center px-6`}>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity onPress={handleOpenDrawer}>
          <Icon style={tw``} name="menufold" size={22} color="black" />
        </TouchableOpacity>
        <Text
          style={[
            tw`text-black text-lg pl-5`,
            {fontFamily: 'Poppins-Regular'},
          ]}>
          Hi, <Text style={tw`font-bold`}>Paul</Text>
        </Text>
      </View>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity>
          <Icon style={tw`mr-5`} name="back" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[
              tw`w-10 h-10 bg-gray-300 rounded-full`,
              {resizeMode: 'cover'},
            ]}
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
