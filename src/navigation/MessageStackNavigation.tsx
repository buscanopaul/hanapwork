import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessagesScreen from '../screens/MessagesScreen';
import ConversationScreen from '../screens/ConversationScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {};

const Stack = createNativeStackNavigator();

const MessageStackNavigation = (props: Props) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Message"
          component={MessagesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Conversation"
          component={ConversationScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Icon name="infocirlce" size={20} color="#60a5fa" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default MessageStackNavigation;
