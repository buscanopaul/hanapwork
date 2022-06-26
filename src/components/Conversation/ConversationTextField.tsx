import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {};

const ConversationTextField = (props: Props) => {
  const [textHeight, setTextHeight] = useState(21);

  const handleSizeChange = event => {
    if (event.nativeEvent.contentSize.height < 126) {
      setTextHeight(event.nativeEvent.contentSize.height);
    }
  };

  const onChangeChat = (text: string) => {
    console.log(text);
  };

  return (
    <View
      style={[
        tw`px-6 flex-row justify-between items-end pt-3`,
        {height: textHeight + 50, bottom: 70},
      ]}>
      <TextInput
        onContentSizeChange={event => handleSizeChange(event)}
        multiline={true}
        onChangeText={text => onChangeChat(text)}
        style={[
          tw`bg-white p-3 rounded-xl text-black border border-gray-300 w-11/12`,
          {fontFamily: 'Poppins-Regular', height: textHeight + 30},
        ]}
        placeholder="Type here"
      />
      <TouchableOpacity>
        <Icon
          style={tw`ml-2 mb-2`}
          size={30}
          name="rightcircle"
          color="#60a5fa"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ConversationTextField;
