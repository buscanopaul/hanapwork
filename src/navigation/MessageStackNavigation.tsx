import {View, Text} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessagesScreen from '../screens/MessagesScreen';
import ConversationScreen from '../screens/ConversationScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';

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
        <Stack.Screen name="Conversation" component={ConversationScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MessageStackNavigation;
