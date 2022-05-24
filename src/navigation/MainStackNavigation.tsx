import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import JobDetailsScreen from '../screens/JobDetailsScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'twrnc';

type Props = {};

const Stack = createStackNavigator();

const MainStackNavigation = (props: Props) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JobDetails"
          component={JobDetailsScreen}
          options={{
            title: '',
            headerRight: () => (
              <TouchableOpacity>
                <Text
                  style={[
                    tw`text-blue-500 mr-3`,
                    {fontFamily: 'Poppins-SemiBold'},
                  ]}>
                  Apply now!
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStackNavigation;
