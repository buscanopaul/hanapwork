import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';
import SwipeItem from './SwipeItem';

type Props = {};

const slides = [
  {
    id: '1',
    image: require('../../assets/images/onboard1.jpg'),
    title: 'The Better Way For Job Hunting',
    subtitle:
      'A filter with many options will help you find your dream job quickly and easily',
  },
  {
    id: '2',
    image: require('../../assets/images/onboard1.jpg'),
    title: 'Find your dream job',
    subtitle:
      'A filter with many options will help you find your dream job quickly and easily',
  },
  {
    id: '3',
    image: require('../../assets/images/onboard1.jpg'),
    title: 'Find a perfect job match',
    subtitle:
      'A filter with many options will help you find your dream job quickly and easily',
  },
];

const Swipe = (props: Props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const refFlatList = useRef(null);
  const [isActiveLeft, setActiveLeft] = useState(false);
  const [isActiveRight, setActiveRight] = useState(false);
  const navigation = useNavigation();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const handleNext = () => {
    const nextSlideIndex = currentSlideIndex + 1;

    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      refFlatList?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
      setActiveRight(true);
      setActiveLeft(false);
    } else {
      navigation.navigate('Auth');
      AsyncStorage.setItem('onboardingKey', 'true');
    }
  };

  const handlePrevious = () => {
    const previousSlideIndex = currentSlideIndex - 1;

    if (currentSlideIndex != 0) {
      const offset = previousSlideIndex * width;
      refFlatList?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(previousSlideIndex);
      setActiveLeft(true);
      setActiveRight(false);
    }
  };

  return (
    <View style={tw`flex-1`}>
      <FlatList
        ref={refFlatList}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => <SwipeItem item={item} />}
      />
      <View style={tw`flex flex-row justify-between items-center w-full px-6`}>
        <TouchableOpacity onPress={handlePrevious}>
          {isActiveLeft ? (
            <Icon name="leftcircle" size={40} color="#000" />
          ) : (
            <Icon name="leftcircleo" size={40} color="#000" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          {isActiveRight ? (
            <Icon name="rightcircle" size={40} color="#000" />
          ) : (
            <Icon name="rightcircleo" size={40} color="#000" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Swipe;
