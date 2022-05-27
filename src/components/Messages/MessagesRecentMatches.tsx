import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
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

const MessagesRecentMatches = (props: Props) => {
  const navigation = useNavigation();

  const renderMatches = ({item}) => {
    const firstName = item.name.split(' ')[0];

    const handleConversation = () => {
      navigation.navigate('Conversation', {name: item.name});
    };

    return (
      <TouchableOpacity onPress={handleConversation} style={tw`mr-4`}>
        <Image
          style={[
            tw`w-15 h-15 bg-gray-300 rounded-full mb-1 border-4 border-blue-400`,
            {resizeMode: 'contain'},
          ]}
          source={{uri: item.image}}
        />
        <Text
          style={[tw`text-center text-black`, {fontFamily: 'Poppins-Regular'}]}>
          {firstName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`mt-5`}>
      <Text
        style={[
          tw`px-6 text-xl mb-7 text-black`,
          {fontFamily: 'Poppins-SemiBold'},
        ]}>
        Recent Matches
      </Text>
      <FlatList
        style={tw`ml-6`}
        data={DATA}
        renderItem={renderMatches}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MessagesRecentMatches;
