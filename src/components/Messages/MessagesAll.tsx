import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const DATA = [
  {
    id: '1',
    name: 'Olivia Bautista',
    image:
      'https://images.unsplash.com/photo-1553531540-d99596614a82?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Emma Wattson',
    image:
      'https://images.unsplash.com/photo-1595185246437-9d3040cdc262?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Charlotte Bob',
    image:
      'https://images.unsplash.com/photo-1559828801-04565cd31e27?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    name: 'Amelia Robison',
    image:
      'https://images.unsplash.com/photo-1599231091842-e92b2b2bbb68?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    name: 'Ava Cuz',
    image:
      'https://images.unsplash.com/photo-1604743486068-8eb1f9d28190?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    name: 'Sophia Montemayor',
    image:
      'https://images.unsplash.com/photo-1623358184674-e25c37ccaf3e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627',
  },
];

const MessagesAll = (props: Props) => {
  const navigation = useNavigation();

  const renderMessages = ({item}) => {
    const handleConversation = () => {
      navigation.navigate('Conversation', {name: item.name});
    };

    return (
      <TouchableOpacity
        onPress={handleConversation}
        style={tw`flex-row items-center mb-3 border-b border-gray-100 pb-3`}>
        <Image
          style={[
            tw`w-15 h-15 bg-gray-300 rounded-full`,
            {resizeMode: 'cover'},
          ]}
          source={{uri: item.image}}
        />
        <View style={tw`pl-4 flex-col justify-center`}>
          <Text
            style={[
              tw`text-black mb-1`,
              {
                fontFamily: `Poppins-${
                  item.id == '1' ? `SemiBold` : `Regular`
                }`,
              },
            ]}>
            {item.name}
          </Text>
          <View style={tw`flex-row items-center`}>
            <Text
              numberOfLines={1}
              style={[
                tw`text-gray-500 w-50`,
                {
                  fontFamily: `Poppins-${
                    item.id == '1' ? `SemiBold` : `Regular`
                  }`,
                },
              ]}>
              Hi, Komeng! How are you doing?
            </Text>
            <Text
              style={[
                tw`text-gray-500 `,
                {
                  fontFamily: `Poppins-${
                    item.id == '1' ? `SemiBold` : `Regular`
                  }`,
                },
              ]}>
              {'\u2022'} May 6
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`px-6 flex pb-30`}>
      <Text
        style={[tw`text-xl text-black mb-7`, {fontFamily: 'Poppins-SemiBold'}]}>
        Messages
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderMessages}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MessagesAll;
