import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import ConversationList from '../components/Conversation/ConversationList';
import ConversationHeader from '../components/Conversation/ConversationHeader';
import ConversationTextField from '../components/Conversation/ConversationTextField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/AntDesign';
import ConversationInfo from '../components/Conversation/ConversationInfo';

type Props = {};

const ConversationScreen = (props: Props) => {
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);

  const windowWidth = Dimensions.get('window').width;

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['50%', '70%'], []);

  // callback
  const handleSheetChanges = useCallback((index: number) => {
    console.log('hanldesheetchanges', index);
  }, []);

  const handleBottomSheet = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(1);
    setIsOpen(true);
  }, []);

  // renders
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: props.route.params.name,
      headerRight: () => (
        <TouchableOpacity onPress={handleBottomSheet}>
          <Icon name="infocirlce" size={20} color="#60a5fa" />
        </TouchableOpacity>
      ),
    });
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
      {isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          enablePanDownToClose={true}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          onChange={handleSheetChanges}>
          <ConversationInfo />
        </BottomSheet>
      )}
    </KeyboardAwareScrollView>
  );
};

export default ConversationScreen;
