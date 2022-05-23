import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'twrnc';

const DATA = [
  {
    id: '1',
    title: 'walmart',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png',
  },
  {
    id: '2',
    title: 'amazon',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
  },
  {
    id: '3',
    title: 'Apple',
    image: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png',
  },
  {
    id: '4',
    title: 'CVS',
    image:
      'https://www.cvshealth.com/sites/default/files/styles/large/public/cvs-health-logo-stacked.png',
  },
  {
    id: '5',
    title: 'Alphabet',
    image: 'https://cdn.freebiesupply.com/logos/thumbs/2x/alphabet-logo.png',
  },
  {
    id: '6',
    title: 'Mckesson',
    image:
      'https://purepng.com/public/uploads/large/purepng.com-mckesson-logologobrand-logoiconslogos-251519938967iczui.png',
  },
];

type Props = {};

const HomeVerifiedCompanies = (props: Props) => {
  const renderVerified = ({item}) => {
    return (
      <TouchableOpacity>
        <Image
          style={[
            tw`w-15 h-15 bg-gray-200 rounded-full mr-4`,
            {resizeMode: 'contain'},
          ]}
          source={{uri: item.image}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`pl-6 mt-5`}>
      <FlatList
        data={DATA}
        renderItem={renderVerified}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeVerifiedCompanies;
