import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import JobDetailsHeader from '../components/JobDetails/JobDetailsHeader';
import JobDetailsDescription from '../components/JobDetails/JobDetailsDescription';
import {ScrollView} from 'react-native-gesture-handler';
import JobDetailsCategories from '../components/JobDetails/JobDetailsCategories';

type Props = {};

const JobDetailsScreen = (props: Props) => {
  return (
    <ScrollView
      style={tw`bg-white h-full px-6`}
      showsVerticalScrollIndicator={false}>
      <JobDetailsHeader />
      <JobDetailsDescription />
      <JobDetailsCategories />
    </ScrollView>
  );
};

export default JobDetailsScreen;
