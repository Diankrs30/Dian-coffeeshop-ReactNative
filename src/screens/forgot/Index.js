import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  // Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  // ToastAndroid,
} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import authAction from '../../redux/actions/auth';

import styles from './style';
import bg from '../../assets/images/bg-pwd.png';
// import icon from '../../assets/images/logo-google.png';

const SignUp = () => {
  const navigation = useNavigation();
  const [body, setBody] = useState({
    email: '',
    password: '',
    phoneNumber: '',
  });

  console.log(body);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg} />
      <View style={styles.content}>
        <Text style={styles.title}>Don't Worry!</Text>
        <Text style={styles.titleDesc}>
          Enter your email adress to get reset password link
        </Text>
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
            <Text style={styles.textConfirmation}>
              Haven&#39;t received any link?
            </Text>
            <TouchableOpacity style={styles.resendLink}>
              <Text style={styles.textResendLink}>Resend Link</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;
