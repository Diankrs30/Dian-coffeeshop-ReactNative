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
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import authAction from '../../redux/actions/auth';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

import styles from './style';
import bg from '../../assets/images/bg-signup.png';
import icon from '../../assets/images/logo-google.png';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);
  const isPending = useSelector(state => state.auth.isLoading);
  const [isPwdShown, setIsPwdShown] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password_user: '',
    phone_number: '',
  });

  console.log(form);

  const onChangeHandler = (text, type) => {
    setForm(form => ({...form, [type]: text}));
  };

  const tooglePassword = () => {
    setIsPwdShown(!isPwdShown);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('page signup', form);

    if (!form.email && !form.password_user && !form.phone_number) {
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
    if (!form.password_user) {
      return ToastAndroid.showWithGravity(
        'Input your password!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
    if (!form.phone_number) {
      return ToastAndroid.showWithGravity(
        'Input your phone number!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    const registerSuccess = () => {
      ToastAndroid.showWithGravity(
        'Register success!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      navigation.navigate('Login');
    };

    const registerDenied = () => {
      ToastAndroid.showWithGravity(
        `${auth.error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };

    dispatch(authAction.registerThunk(form, registerSuccess, registerDenied));
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
            <View style={styles.wrapperPwd}>
              <TextInput
                secureTextEntry={isPwdShown}
                style={styles.inputPwd}
                value={form.password_user}
                placeholder="Enter your password"
                placeholderTextColor="white"
                onChangeText={text => onChangeHandler(text, 'password_user')}
              />
              <FontAwesome
                icon={isPwdShown ? SolidIcons.eye : SolidIcons.eyeSlash}
                style={styles.iconPwd}
                onPress={tooglePassword}
              />
            </View>
            <TextInput
              style={styles.input}
              keyBoardType="text"
              value={form.phone_number}
              placeholder="Enter your phone number"
              placeholderTextColor="white"
              onChangeText={text => onChangeHandler(text, 'phone_number')}
            />
            {isPending ? (
              <View style={styles.btnLoading}>
                <ActivityIndicator />
              </View>
            ) : (
              <TouchableOpacity style={styles.btnNewAcc} onPress={handleSubmit}>
                <Text style={styles.textBtnNewAcc}>Create Account</Text>
              </TouchableOpacity>
            )}

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
