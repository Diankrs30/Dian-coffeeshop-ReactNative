import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import authAction from '../../redux/actions/auth';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

import styles from './style';
import bg from '../../assets/images/bg-pwd.png';

const Forgot = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);
  const isPending = useSelector(state => state.auth.isLoading);
  const [form, setForm] = useState({
    email: '',
  });
  // console.log('>>>>>>>>>>>>>>>>>>>', form);

  const onChangeHandler = (text, type) => {
    setForm(form => ({...form, [type]: text}));
  };

  const handleForgot = e => {
    e.preventDefault();
    // console.log('cek fogort pwd', form);

    if (!form.email) {
      return ToastAndroid.showWithGravity(
        'Input your email!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    const forgotSuccess = () => {
      ToastAndroid.showWithGravity(
        'Please check your email to reset your password!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      navigation.navigate('Reset Password');
    };

    const forgotDenied = () => {
      ToastAndroid.showWithGravity(
        `${auth.error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };

    dispatch(authAction.forgotThunk(form, forgotSuccess, forgotDenied));
  };

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
              value={form.email}
              placeholder="Enter your email address"
              placeholderTextColor="white"
              onChangeText={text => onChangeHandler(text, 'email')}
            />
            <Text style={styles.textConfirmation}>
              Haven&#39;t received any link?
            </Text>

            {isPending ? (
              <View style={styles.btnLoading}>
                <ActivityIndicator />
              </View>
            ) : (
              <TouchableOpacity
                style={styles.resendLink}
                onPress={handleForgot}>
                <Text style={styles.textResendLink}>Resend Link</Text>
              </TouchableOpacity>
            )}
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export default Forgot;
