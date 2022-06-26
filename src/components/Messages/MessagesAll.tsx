import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const DATA = [
  {
    id: '1',
    name: 'Software Engineer',
    company: 'Deloitte Inc.',
    image:
      'data:image/png;base64,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',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Executive Assistant',
    company: 'Toyota Corp.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/25/Megaworld_New_Logo_2019.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Network Admin',
    company: 'Accenture Inc.',
    image:
      'https://static.wikia.nocookie.net/logopedia/images/6/6c/19957061_1348397361945489_1465537779134243335_o-1.jpg/revision/latest?cb=20171011112827',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    name: 'HR Specialist',
    company: 'EY Inc.',
    image:
      'https://www.adobomagazine.com/wp-content/uploads/2019/08/BPI-new-logo.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    name: 'Payroll',
    company: 'Rajah Inc.',
    image:
      'data:image/png;base64,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',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    name: 'QA Tester',
    company: '2GO Inc.',
    image:
      'https://www.businesslist.ph/img/ph/e/1548144421-42-meralco-main-office.jpg',
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
            tw`w-15 h-15 bg-gray-200 rounded-full`,
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
            {item.name} at {item.company}
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
