import {View, Text, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import FormField from '../FormField';
import ButtonTemplate from '../ButtonTemplate';
import {authentication} from '../../../firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

type Props = {};

const RegisterField = (props: Props) => {
  const navigation = useNavigation();

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const handleRegister = () => {
    // createUserWithEmailAndPassword(authenti)
    // navigation.navigate('OTP');
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (
      firstname == '' ||
      lastname == '' ||
      email == '' ||
      phone == '' ||
      password == '' ||
      repassword == ''
    ) {
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
    } else if (password != repassword) {
      Alert.alert('Error', `Password not match`, [
        {
          text: 'OK',
        },
      ]);
    } else {
      console.log('tama');
    }
  };

  return (
    <View style={tw`mt-10`}>
      <FormField
        placeholder="Enter First name"
        onChangeText={newFirstname => setFirstName(newFirstname)}
      />
      <FormField
        placeholder="Last name"
        onChangeText={newLastname => setLastname(newLastname)}
      />
      <FormField
        placeholder="Email address"
        onChangeText={newEmail => setEmail(newEmail)}
      />
      <FormField
        placeholder="Phone"
        keyboardType="numeric"
        onChangeText={text => setPhone(text)}
        maxLength={10}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black mb-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
        onChangeText={newPassword => setPassword(newPassword)}
      />
      <TextInput
        placeholder="Re-enter Password"
        secureTextEntry={true}
        style={[
          tw`rounded-xl border h-13 border-gray-300 p-3 px-4 text-black mb-5`,
          {fontFamily: 'Poppins-Regular'},
        ]}
        onChangeText={newRepassword => setRePassword(newRepassword)}
      />

      <ButtonTemplate
        onPress={handleRegister}
        title="Register"
        bgColor="blue"
        titleColor="white"
      />
    </View>
  );
};

export default RegisterField;
