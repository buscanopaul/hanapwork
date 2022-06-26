import {View, Text, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import FormField from '../FormField';
import ButtonTemplate from '../ButtonTemplate';
import {authentication} from '../../../firebase/firebase-config';
import {signInWithEmailAndPassword} from 'firebase/auth';

type Props = {};

const LoginField = (props: Props) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleShowPassword = () => {
    console.log('show password');
  };

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Main');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    // navigation.navigate('Main');
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (email == '' || password == '') {
      Alert.alert('Error', `Required Fields`, [
        {
          text: 'OK',
        },
      ]);
    } else if (!emailValidate.test(email)) {
      Alert.alert('Error', `Email format Error`, [
        {
          text: 'OK',
        },
      ]);
    } else {
      signInWithEmailAndPassword(authentication, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with: ', user.email);
        })
        .catch(error => {
          Alert.alert('Error', `${error}`, [
            {
              text: 'OK',
            },
          ]);
        });
    }
  };

  const handleRecoverPassword = () => {};

  return (
    <View style={tw`px-6 w-full mt-4`}>
      <FormField
        placeholder="Enter username"
        autoCapitalize="none"
        onChangeText={emailText => setEmail(emailText)}
      />
      <TextInput
        style={[
          tw`mb-4 bg-white h-13 p-3 px-4 rounded-xl text-black border border-gray-300`,
          {fontFamily: 'Poppins-Regular'},
        ]}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={passwordText => setPassword(passwordText)}
      />
      <TouchableOpacity
        onPress={handleShowPassword}
        style={tw`absolute right-3 bottom-6 z-50 p-1`}>
        <Icon style={tw``} name="eye" size={25} color="lightgray" />
      </TouchableOpacity>
      <View style={tw`flex-row flex-wrap justify-end`}>
        <TouchableOpacity onPress={handleRecoverPassword} style={tw`mt-1`}>
          <Text
            style={[
              tw`text-right text-xs text-black`,
              {fontFamily: 'Poppins-Regular'},
            ]}>
            Recovery Password
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonTemplate
        onPress={handleSignIn}
        title="Sign in"
        bgColor="blue"
        titleColor="white"
      />
    </View>
  );
};

export default LoginField;
