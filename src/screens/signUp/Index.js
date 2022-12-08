import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';

// import {useNavigation} from '@react-navigation/native';

import styles from '../signUp/style';
import bg from '../../assets/images/bg-signup.png';
import icon from '../../assets/images/logo-google.png';

const SignUp = () => {
  //   const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
    phoneNumber: '',
  });

  const onChangeHandler = (text, type) => {
    setForm(form => ({...form, [type]: text}));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg} />
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
        <ScrollView style={styles.form}>
          <KeyboardAvoidingView>
            <TextInput
              style={styles.input}
              keyBoardType="email-address"
              value={form.email}
              placeholder="Enter your email address"
              placeholderTextColor="white"
              onChangeText={text => onChangeHandler(text, 'email')}
            />
            <View>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={form.password}
                placeholder="Enter your password"
                placeholderTextColor="white"
                onChangeText={text => onChangeHandler(text, 'password')}
              />
            </View>
            <TextInput
              style={styles.input}
              keyBoardType="text"
              value={form.phoneNumber}
              placeholder="Enter your phone number"
              placeholderTextColor="white"
              onChangeText={text => onChangeHandler(text, 'phoneNumber')}
            />
            <TouchableOpacity style={styles.btnNewAcc}>
              <Text style={styles.textBtnNewAcc}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin}>
              <Image style={styles.icon} source={icon} />
              <Text style={styles.textBtnLogin}>Create with Google</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;
