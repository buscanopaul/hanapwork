import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ConversationHeader from './ConversationHeader';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const DATA = [
  {
    id: '1',
    userId: 1,
    image: 'https://www.sanmiguel.com.ph/img/SMC-FB-Banner-2021.jpg',
    message: 'Hi Paul',
    time: '35',
  },
  {
    id: '2',
    userId: 1,
    image: 'https://www.sanmiguel.com.ph/img/SMC-FB-Banner-2021.jpg',
    message: 'We went to the same School, I cannot belive we have never met!',
    time: '30',
  },
  {
    id: '3',
    userId: 0,
    image: 'https://www.sanmiguel.com.ph/img/SMC-FB-Banner-2021.jpg',
    message: 'Really?',
    time: '30',
  },
  {
    id: '4',
    userId: 1,
    image: 'https://www.sanmiguel.com.ph/img/SMC-FB-Banner-2021.jpg',
    message: 'Been here 5 years',
    time: '28',
  },
  {
    id: '5',
    userId: 0,
    image:
      'https://images.unsplash.com/photo-1553531540-d99596614a82?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
    message: 'I am on my wat to the Bowery with a friend who knows you!',
    time: '28',
  },
  {
    id: '6',
    userId: 0,
    image:
      'https://images.unsplash.com/photo-1553531540-d99596614a82?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
    message: 'See you therefdsfasadfdsafdsfafaffdfdssfadfafsafsdfsa',
    time: '28',
  },
];

const ConversationList = (props: Props) => {
  const renderChats = ({item}) => {
    return (
      <View
        style={tw`flex-row items-end justify-${
          item.userId == 0 ? `end` : `start`
        } ${item.length ? `mb-20` : `mb-5`}`}>
        {item.userId != 0 && (
          <Image
            style={[tw`w-5 h-5 rounded-full bottom-1`, {resizeMode: 'cover'}]}
            source={{uri: item.image}}
          />
        )}

        <View
          style={tw`bg-${
            item.userId != 0 ? `blue-400` : `gray-200`
          }  max-w-4/5 rounded-xl p-3 ml-2`}>
          <Text
            style={[
              tw`text-${item.userId != 0 ? `white` : `black`}`,
              {fontFamily: 'Poppins-Regular'},
            ]}>
            {item.message}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={tw`mt-5 px-6 pb-10`}>
      <FlatList
        data={DATA}
        renderItem={renderChats}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ConversationHeader}
      />
    </View>
  );
};

export default ConversationList;
