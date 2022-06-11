import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';

type Props = {};

const DUMMY_DATA = [
  {
    id: '1',
    firstName: 'Paul',
    LastName: 'Buscano',
    occupation: 'Software engineer',
    photoURL:
      'https://static.dezeen.com/uploads/2017/08/apple-park-john-ive-architecture-offices_dezeen_hero-1a.jpg',
    age: 27,
  },
  {
    id: '2',
    firstName: 'Princess',
    LastName: 'Ico',
    occupation: 'Software engineer',
    photoURL:
      'https://static.dezeen.com/uploads/2017/08/apple-park-john-ive-architecture-offices_dezeen_hero-1a.jpg',
    age: 27,
  },
  {
    id: '3',
    firstName: 'Princess',
    LastName: 'Ico',
    occupation: 'Software engineer',
    photoURL:
      'https://static.dezeen.com/uploads/2017/08/apple-park-john-ive-architecture-offices_dezeen_hero-1a.jpg',
    age: 27,
  },
  {
    id: '4',
    firstName: 'Princess',
    LastName: 'Ico',
    occupation: 'Software engineer',
    photoURL:
      'https://static.dezeen.com/uploads/2017/08/apple-park-john-ive-architecture-offices_dezeen_hero-1a.jpg',
    age: 27,
  },
  {
    id: '5',
    firstName: 'Princess',
    LastName: 'Ico',
    occupation: 'Software engineer',
    photoURL:
      'https://static.dezeen.com/uploads/2017/08/apple-park-john-ive-architecture-offices_dezeen_hero-1a.jpg',
    age: 27,
  },
];

const HomeCompanies = (props: Props) => {
  const navigation = useNavigation();
  const swipeRef = useRef(null);

  const handleDetails = () => {
    navigation.navigate('JobDetails');
  };

  const choseLeft = () => {
    swipeRef.current.swipeLeft();
  };

  const choseRight = () => {
    swipeRef.current.swipeRight();
  };

  return (
    <View style={tw`-top-8 flex-1`}>
      <Swiper
        ref={swipeRef}
        containerStyle={{backgroundColor: 'transparent'}}
        cards={DUMMY_DATA}
        stackSize={5}
        cardIndex={0}
        verticalSwipe={false}
        animateCardOpacity
        onSwipedLeft={() => {
          console.log('Swipe left');
        }}
        onSwipedRight={() => {
          console.log('Swipe right');
        }}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                textAlign: 'right',
                color: 'red',
              },
            },
          },
          right: {
            title: 'MATCH',
            style: {
              label: {
                color: 'blue',
              },
            },
          },
        }}
        renderCard={card => (
          <View key={card.id} style={tw`rounded-xl`}>
            <TouchableOpacity style={tw``} onPress={handleDetails}>
              <ImageBackground
                style={tw`h-80 bg-blue-700 rounded-t-3xl`}
                imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
                resizeMode="cover"
                source={{
                  uri: 'https://static.dezeen.com/uploads/2017/08/apple-park-john-ive-architecture-offices_dezeen_hero-1a.jpg',
                }}>
                <LinearGradient
                  style={tw`flex-col h-full w-full p-5 justify-between items-start`}
                  colors={[
                    'rgba(0,0,0,0.7)',
                    'rgba(0,0,0,0.4)',
                    'rgba(0,0,0,0)',
                  ]}
                  start={{x: 0, y: 1}}
                  end={{x: 0, y: 0}}>
                  <View
                    style={tw`flex-row justify-between items-center w-full`}>
                    <View>
                      <Text
                        style={[
                          tw`text-white text-xl`,
                          {fontFamily: 'Poppins-SemiBold'},
                        ]}>
                        Deloitte Inc.
                      </Text>
                      <Text
                        style={[
                          tw`text-white`,
                          {fontFamily: 'Poppins-Regular'},
                        ]}>
                        Manila City
                      </Text>
                    </View>
                    <View>
                      <Image
                        style={[
                          tw`w-15 h-15 bg-white rounded-full`,
                          {resizeMode: 'contain'},
                        ]}
                        source={{
                          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png',
                        }}
                      />
                    </View>
                  </View>
                  <Text
                    style={[
                      tw`text-lg text-white`,
                      {fontFamily: 'Poppins-SemiBold'},
                    ]}>
                    {'\u20B1'}12,000 / month
                  </Text>
                </LinearGradient>
              </ImageBackground>
              <View
                style={[tw`bg-blue-200 p-4 rounded-b-2xl`, styles.cardShadow]}>
                <Text style={[tw`mb-3`, {fontFamily: 'Poppins-SemiBold'}]}>
                  Administrative Assistant
                </Text>
                <View style={tw`flex-row`}>
                  <Text style={[tw``, {fontFamily: 'Poppins-Regular'}]}>
                    {'\u2022'}
                  </Text>
                  <Text style={[tw`pl-1`, {fontFamily: 'Poppins-Regular'}]}>
                    2 years Needed
                  </Text>
                </View>
                <View style={tw`flex-row`}>
                  <Text style={[tw``, {fontFamily: 'Poppins-Regular'}]}>
                    {'\u2022'}
                  </Text>
                  <Text style={[tw`pl-1`, {fontFamily: 'Poppins-Regular'}]}>
                    Full-Time
                  </Text>
                </View>
                <View style={tw`flex-row`}>
                  <Text style={[tw``, {fontFamily: 'Poppins-Regular'}]}>
                    {'\u2022'}
                  </Text>
                  <Text style={[tw`pl-1`, {fontFamily: 'Poppins-Regular'}]}>
                    Excellent MS Office knowledge
                  </Text>
                </View>
                <View style={tw`flex-row`}>
                  <Text style={[tw``, {fontFamily: 'Poppins-Regular'}]}>
                    {'\u2022'}
                  </Text>
                  <Text style={[tw`pl-1`, {fontFamily: 'Poppins-Regular'}]}>
                    Work experience as an Executive Assistant, Personal
                    Assistant or similar role
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <View
        style={tw`bg-white flex-row h-1/6 px-6 flex-row justify-around items-start pt-5 -bottom-140`}>
        <TouchableOpacity
          onPress={choseLeft}
          style={tw`bg-red-200 p-4 rounded-full`}>
          <Icon name="close" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={choseRight}
          style={tw`bg-blue-200 p-4 rounded-full`}>
          <Icon name="heart" size={30} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeCompanies;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
