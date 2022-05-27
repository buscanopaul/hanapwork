import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import ConversationList from '../components/Conversation/ConversationList';
import ConversationHeader from '../components/Conversation/ConversationHeader';
import ConversationTextField from '../components/Conversation/ConversationTextField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {};

const ConversationScreen = (props: Props) => {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    navigation.setOptions({headerTitle: props.route.params.name});
  });

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      extraScrollHeight={80}
      style={tw`bg-white`}
      keyboardShouldPersistTaps="handled">
      <ScrollView>
        <ConversationList />
      </ScrollView>
      <ConversationTextField />
    </KeyboardAwareScrollView>
  );
};

export default ConversationScreen;
