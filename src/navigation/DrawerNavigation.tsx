import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStackNavigation from './MainStackNavigation';
import MessagesScreen from '../screens/MessagesScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {};

const Drawer = createDrawerNavigator();

const DrawerNavigation = (props: Props) => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#60a5fa',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'black',
          drawerLabelStyle: {marginLeft: -15, fontFamily: 'Poppins-SemiBold'},
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="All Jobs"
          component={MainStackNavigation}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="laptop" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="message1" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Bookmarks"
          component={BookmarksScreen}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="hearto" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="user" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="setting" size={20} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;
