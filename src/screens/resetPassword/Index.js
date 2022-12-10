import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import authAction from '../../redux/actions/auth';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
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

const Reset = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);
  const isPending = useSelector(state => state.auth.isLoading);
  const [isNewPwdShown, setIsNewPwdShown] = useState(true);
  const [isConfirmPwdShown, setIsConfirmPwdShown] = useState(true);
  const [isOtpShown, setIsOtpShown] = useState(true);
  const [form, setForm] = useState({
    otp: '',
    new_password: '',
    confirm_password: '',
  });

  const onChangeHandler = (text, type) => {
    setForm(form => ({...form, [type]: text}));
  };

  const toogleNewPassword = () => {
    setIsNewPwdShown(!isNewPwdShown);
  };

  const toogleConfirmPassword = () => {
    setIsConfirmPwdShown(!isConfirmPwdShown);
  };

  const toogleOtp = () => {
    setIsOtpShown(!isOtpShown);
  };

  const handleReset = e => {
    e.preventDefault();

    if (!form.otp && !form.new_password && !form.confirm_password) {
      return ToastAndroid.showWithGravity(
        'Fill your data correctly!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
    if (!form.otp) {
      return ToastAndroid.showWithGravity(
        'Input your OTP!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
    if (!form.new_password) {
      return ToastAndroid.showWithGravity(
        'Input your new password!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
    if (!form.confirm_password) {
      return ToastAndroid.showWithGravity(
        'Input your confirm password!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    const resetSuccess = () => {
      ToastAndroid.showWithGravity(
        'Reset password success!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      navigation.navigate('Login');
    };

    const resetDenied = () => {
      ToastAndroid.showWithGravity(
        `${auth.error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };

    dispatch(authAction.resetPwdThunk(form, resetSuccess, resetDenied));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg} />
      <View style={styles.content}>
        <Text style={styles.title}>Don't Worry!</Text>
        <Text style={styles.titleDesc}>Enter your new password here</Text>
        <ScrollView style={styles.form}>
          <KeyboardAvoidingView>
            {/* <TextInput
              style={styles.input}
              keyBoardType="phone-pad"
              value={form.otp}
              placeholder="Enter your OTP"
              placeholderTextColor="white"
              onChangeText={text => onChangeHandler(text, 'otp')}
            /> */}
            <View style={styles.wrapperPwd}>
              <TextInput
                secureTextEntry={isOtpShown}
                style={styles.inputPwd}
                keyBoardType="phone-pad"
                value={form.otp}
                placeholder="Enter your OTP"
                placeholderTextColor="white"
                onChangeText={text => onChangeHandler(text, 'otp')}
              />
              <FontAwesome
                icon={isOtpShown ? SolidIcons.eye : SolidIcons.eyeSlash}
                style={styles.iconPwd}
                onPress={toogleOtp}
              />
            </View>
            <View style={styles.wrapperPwd}>
              <TextInput
                secureTextEntry={isNewPwdShown}
                style={styles.inputPwd}
                value={form.new_password}
                placeholder="Enter your new password"
                placeholderTextColor="white"
                onChangeText={text => onChangeHandler(text, 'new_password')}
              />
              <FontAwesome
                icon={isNewPwdShown ? SolidIcons.eye : SolidIcons.eyeSlash}
                style={styles.iconPwd}
                onPress={toogleNewPassword}
              />
            </View>
            <View style={styles.wrapperPwd}>
              <TextInput
                secureTextEntry={isConfirmPwdShown}
                style={styles.inputPwd}
                value={form.confirm_password}
                placeholder="Enter your confirm password"
                placeholderTextColor="white"
                onChangeText={text => onChangeHandler(text, 'confirm_password')}
              />
              <FontAwesome
                icon={isConfirmPwdShown ? SolidIcons.eye : SolidIcons.eyeSlash}
                style={styles.iconPwd}
                onPress={toogleConfirmPassword}
              />
            </View>

            {isPending ? (
              <View style={styles.btnLoading}>
                <ActivityIndicator />
              </View>
            ) : (
              <TouchableOpacity style={styles.resetPwd} onPress={handleReset}>
                <Text style={styles.textResetPwd}>Reset Password</Text>
              </TouchableOpacity>
            )}
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export default Reset;
