import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import authAction from '../../redux/actions/auth';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

import styles from './style';
import bg from '../../assets/images/bg-login.png';
import icon from '../../assets/images/logo-google.png';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);
  const isPending = useSelector(state => state.auth.isLoading);
  const [isPwdShown, setIsPwdShown] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  console.log('login', form);

  const onPressForgot = () => {
    navigation.navigate('Forgot Password');
  };

  const onChangeHandler = (text, type) => {
    setForm(form => ({...form, [type]: text}));
  };

  const tooglePassword = () => {
    setIsPwdShown(!isPwdShown);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('page login', form);

    if (!form.email && !form.password) {
      return ToastAndroid.showWithGravity(
        'Fill your data correctly!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
    if (!form.email) {
      return ToastAndroid.showWithGravity(
        'Input your email!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
    if (!form.password) {
      return ToastAndroid.showWithGravity(
        'Input your password!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
    const loginSuccess = () => {
      ToastAndroid.showWithGravity(
        'Login success!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      navigation.navigate('Home');
    };

    const loginDenied = () => {
      ToastAndroid.showWithGravity(
        `${auth.error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };

    dispatch(authAction.loginThunk(form, loginSuccess, loginDenied));
  };

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
              value={form.email}
              placeholder="Enter your email address"
              placeholderTextColor="white"
              onChangeText={text => onChangeHandler(text, 'email')}
            />
            <View style={styles.wrapperPwd}>
              <TextInput
                secureTextEntry={isPwdShown}
                style={styles.inputPwd}
                value={form.password}
                placeholder="Enter your password"
                placeholderTextColor="white"
                onChangeText={text => onChangeHandler(text, 'password')}
              />
              <FontAwesome
                icon={isPwdShown ? SolidIcons.eye : SolidIcons.eyeSlash}
                style={styles.iconPwd}
                onPress={tooglePassword}
              />
            </View>
            <View>
              <Text style={styles.textForgot} onPress={onPressForgot}>
                Forgot password?
              </Text>
            </View>

            {isPending ? (
              <View style={styles.btnLoading}>
                <ActivityIndicator />
              </View>
            ) : (
              <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
                <Text style={styles.textBtnLogin}>Login</Text>
              </TouchableOpacity>
            )}

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
