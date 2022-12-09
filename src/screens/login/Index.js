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
  // ToastAndroid,
} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import authAction from '../../redux/actions/auth';

import styles from './style';
import bg from '../../assets/images/bg-login.png';
import icon from '../../assets/images/logo-google.png';

const SignUp = () => {
  const navigation = useNavigation();
  const [body, setBody] = useState({
    email: '',
    password: '',
  });

  const onPressForgot = () => {
    navigation.navigate('Forgot');
  };

  console.log(body);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg} />
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <ScrollView style={styles.form}>
          <KeyboardAvoidingView>
            <TextInput
              style={styles.input}
              keyBoardType="email-address"
              value={body.email}
              placeholder="Enter your email address"
              placeholderTextColor="white"
              // onChangeText={text => onChangeHandler(text, 'email')}
            />
            <View>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={body.password}
                placeholder="Enter your password"
                placeholderTextColor="white"
                // onChangeText={text => onChangeHandler(text, 'password')}
              />
            </View>
            <View>
              <Text style={styles.textForgot} onPress={onPressForgot}>
                Forgot password?
              </Text>
            </View>

            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.textBtnLogin}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.textLoginGoogle}>or login in with</Text>
            <TouchableOpacity style={styles.btnLoginWithGoogle}>
              <Image style={styles.icon} source={icon} />
              <Text style={styles.textBtnLoginWithGoogle}>
                Login with Google
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;
