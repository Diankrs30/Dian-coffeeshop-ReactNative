import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import authAction from '../../redux/actions/auth';

import styles from './style';
import bg from '../../assets/images/bg-signup.png';
import icon from '../../assets/images/logo-google.png';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);
  // const [emptyForm, setEmptyForm] = useState(true);
  // const isLoading = useSelector(state => state.auth.isLoading);
  const [body, setBody] = useState({
    email: '',
    password: '',
    phoneNumber: '',
  });

  console.log(body);

  // const checkEmptyForm = body => {
  //   if (isLoading || !body.email || !body.password || !body.phone_number) {
  //     return setEmptyForm(true);
  //   }
  //   body.email && body.password && body.phone_number && setEmptyForm(false);
  // };

  const onChangeHandler = (text, type) => {
    setBody(form => ({...body, [type]: text}));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(body);
    const registerSuccess = () => {
      ToastAndroid.show(
        'Register success! Please check your email to verify your account',
        ToastAndroid.SHORT,
      );
      navigation.navigate('Login');
    };

    const registerDenied = () => {
      ToastAndroid.show(`${auth.error}`, ToastAndroid.SHORT);
    };

    dispatch(authAction.registerThunk(body, registerSuccess, registerDenied));
  };

  // useEffect(() => {
  //   checkEmptyForm(body);
  // }, [body]);

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
              value={body.email}
              placeholder="Enter your email address"
              placeholderTextColor="white"
              onChangeText={text => onChangeHandler(text, 'email')}
            />
            <View>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={body.password}
                placeholder="Enter your password"
                placeholderTextColor="white"
                onChangeText={text => onChangeHandler(text, 'password')}
              />
            </View>
            <TextInput
              style={styles.input}
              keyBoardType="text"
              value={body.phoneNumber}
              placeholder="Enter your phone number"
              placeholderTextColor="white"
              onChangeText={text => onChangeHandler(text, 'phoneNumber')}
            />
            <TouchableOpacity
              style={styles.btnNewAcc}
              // disable={emptyForm}
              onPress={handleSubmit}>
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
