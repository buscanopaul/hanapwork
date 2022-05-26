import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import tw from 'twrnc';
import JobDetailsHeader from '../components/JobDetails/JobDetailsHeader';
import JobDetailsDescription from '../components/JobDetails/JobDetailsDescription';
import {ScrollView} from 'react-native-gesture-handler';
import JobDetailsCategories from '../components/JobDetails/JobDetailsCategories';

type Props = {};

const JobDetailsScreen = (props: Props) => {
  return (
    <ScrollView
      style={tw`bg-white h-full`}
      showsVerticalScrollIndicator={false}>
      <JobDetailsHeader />
      <JobDetailsDescription />
      <JobDetailsCategories />
    </ScrollView>
  );
};

export default JobDetailsScreen;
