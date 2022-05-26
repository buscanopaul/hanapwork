import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {};

const JobDetailsDescription = (props: Props) => {
  return (
    <View style={tw`mt-5 mb-5 px-6`}>
      <Text style={[tw`text-xl text-black`, {fontFamily: 'Poppins-SemiBold'}]}>
        Deloitte Inc.
      </Text>
      <Text style={[tw`text-black`, {fontFamily: 'Poppins-Regular'}]}>
        Manila City
      </Text>
      <Text style={[tw`text-gray-500 mt-3`, {fontFamily: 'Poppins-Regular'}]}>
        Deloitte is one of the oldest and largest residential real estate
        developers in the Philippines today. It offers a range of products from
        socialized and affordable housing to middle income and high-end housing,
        to various types of subdivision lots.
      </Text>
      <View style={tw`border-b border-gray-300 mt-5`} />
      <View style={tw`flex-row items-center justify-between mt-3`}>
        <Text
          style={[tw`text-lg text-black`, {fontFamily: 'Poppins-SemiBold'}]}>
          Executive Assistant
        </Text>
        <TouchableOpacity>
          <Icon name="hearto" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={[tw`text-gray-500`, {fontFamily: 'Poppins-Regular'}]}>
        Posted 24 hours ago
      </Text>
      <Text style={[tw`text-black mt-1`, {fontFamily: 'Poppins-Regular'}]}>
        Full Time
      </Text>
      <View style={tw`mt-3 bg-blue-400 self-start p-2 rounded-lg`}>
        <Text
          style={[tw`text-lg text-white`, {fontFamily: 'Poppins-SemiBold'}]}>
          {'\u20B1'}12,000 / month
        </Text>
      </View>
      <Text
        style={[tw`text-lg text-black mt-8`, {fontFamily: 'Poppins-SemiBold'}]}>
        Job Description
      </Text>
      <View style={tw`flex-row mt-1 mb-2`}>
        <Text style={[tw`text-black`, {fontFamily: 'Poppins-Regular'}]}>
          {'\u2022'}
        </Text>
        <Text style={[tw`text-black pl-1`, {fontFamily: 'Poppins-Regular'}]}>
          Maintains files of the Data Privacy Office.
        </Text>
      </View>
      <View style={tw`flex-row mt-1 mb-2`}>
        <Text style={[tw`text-black`, {fontFamily: 'Poppins-Regular'}]}>
          {'\u2022'}
        </Text>
        <Text style={[tw`text-black pl-1`, {fontFamily: 'Poppins-Regular'}]}>
          Drafts and prepares simple correspondences, transmittal memos, and
          authorization letters that is necessary for business/project
          communication.
        </Text>
      </View>
      <View style={tw`flex-row mt-1 mb-2`}>
        <Text style={[tw`text-black`, {fontFamily: 'Poppins-Regular'}]}>
          {'\u2022'}
        </Text>
        <Text style={[tw`text-black pl-1`, {fontFamily: 'Poppins-Regular'}]}>
          Handles telephone calls of Immediate Supervisor and other lawyers, and
          of the transmission and delivery of Outgoing correspondences/documents
          for continuous and smooth work flow.
        </Text>
      </View>
      <Text
        style={[tw`text-lg text-black mt-5`, {fontFamily: 'Poppins-SemiBold'}]}>
        Qualifications
      </Text>
      <View style={tw`flex-row mt-1 mb-2`}>
        <Text style={[tw`text-black`, {fontFamily: 'Poppins-Regular'}]}>
          {'\u2022'}
        </Text>
        <Text style={[tw`text-black pl-1`, {fontFamily: 'Poppins-Regular'}]}>
          Graduate of any 4-year business-related course
        </Text>
      </View>
      <View style={tw`flex-row mt-1 mb-2`}>
        <Text style={[tw`text-black`, {fontFamily: 'Poppins-Regular'}]}>
          {'\u2022'}
        </Text>
        <Text style={[tw`text-black pl-1`, {fontFamily: 'Poppins-Regular'}]}>
          Relevant experience in a corporate setting
        </Text>
      </View>
      <View style={tw`flex-row mt-1 mb-2`}>
        <Text style={[tw`text-black`, {fontFamily: 'Poppins-Regular'}]}>
          {'\u2022'}
        </Text>
        <Text style={[tw`text-black pl-1`, {fontFamily: 'Poppins-Regular'}]}>
          Experienced in assisting Heads and Executives in a Corporate
          environment.
        </Text>
      </View>
    </View>
  );
};

export default JobDetailsDescription;
