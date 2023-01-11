import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import userAction from '../../redux/actions/user';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import styles from './style';

const back = require('../../assets/images/iconBack.png');

const EditPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector(state => state.auth.userData.token);
  const isLoading = useSelector(state => state.user.isLoading);
  const errorMsg = useSelector(state => state.user.error);

  const [isNewPwdShown, setIsNewPwdShown] = useState(true);
  const [isConfirmPwdShown, setIsConfirmPwdShown] = useState(true);
  const [isOtpShown, setIsOtpShown] = useState(true);
  const [similarity1, setSimilarity1] = useState(false);
  const [similarity2, setSimilarity2] = useState(false);
  const [form, setForm] = useState({
    old_password: '',
    new_password: '',
    // confirm_password: '',
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

  const toogleOldPwd = () => {
    setIsOtpShown(!isOtpShown);
  };

  const saveHandler = e => {
    e.preventDefault();

    if (!form.old_password && !form.new_password && !form.confirm_password) {
      return ToastAndroid.showWithGravity(
        'Fill your data correctly',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    if (!form.old_password) {
      return ToastAndroid.showWithGravity(
        'Input your old passwod',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    if (!form.new_password) {
      return ToastAndroid.showWithGravity(
        'Input your new passwod',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    if (!form.confirm_password) {
      return ToastAndroid.showWithGravity(
        'Confirm your new passwod',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    if (form.old_password === form.new_password) {
      return ToastAndroid.showWithGravity(
        'Old password already exist. Please change your new password',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    const editSuccess = () => {
      ToastAndroid.showWithGravity(
        'Password has been changed',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        navigation.navigate('Profile'),
      );
      navigation.navigate('Home');
    };

    const editDenied = errorMsg => {
      ToastAndroid.showWithGravity(
        `${errorMsg}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };

    if (form.new_password !== form.confirm_password) {
      return ToastAndroid.showWithGravity(
        "Confirm Password doesn't match!",
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    dispatch(
      userAction.editPasswordThunk(form, token, editSuccess, editDenied),
    );
  };

  // useEffect(() => {
  //   dispatch(userAction.getProfileThunk(token));
  // }, [dispatch, token]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.textHeader}>Edit Password</Text>
        </View>
      </View>
      <ScrollView style={{paddingHorizontal: 50, marginTop: 30}}>
        <View>
          <Text style={styles.textForm}>Old Password</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              secureTextEntry={isOtpShown}
              style={styles.inputPwd}
              keyBoardType="text"
              value={form.old_password}
              placeholder="Enter your old password"
              placeholderTextColor="#000"
              onChangeText={text => onChangeHandler(text, 'old_password')}
            />
            <FontAwesome
              icon={isOtpShown ? SolidIcons.eye : SolidIcons.eyeSlash}
              style={styles.iconPwd}
              onPress={toogleOldPwd}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textForm}>New Password</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              secureTextEntry={isNewPwdShown}
              style={styles.inputPwd}
              keyBoardType="text"
              value={form.new_password}
              placeholder="Enter your new password"
              placeholderTextColor="#000"
              onChangeText={text => onChangeHandler(text, 'new_password')}
            />
            <FontAwesome
              icon={isNewPwdShown ? SolidIcons.eye : SolidIcons.eyeSlash}
              style={styles.iconPwd}
              onPress={toogleNewPassword}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textForm}>Confirm Password</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              secureTextEntry={isConfirmPwdShown}
              style={styles.inputPwd}
              keyBoardType="text"
              value={form.confirm_password}
              placeholder="Enter your confirm password"
              placeholderTextColor="#000"
              onChangeText={text => onChangeHandler(text, 'confirm_password')}
            />
            <FontAwesome
              icon={isConfirmPwdShown ? SolidIcons.eye : SolidIcons.eyeSlash}
              style={styles.iconPwd}
              onPress={toogleConfirmPassword}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.btnSave} onPress={saveHandler}>
          {isLoading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <Text style={styles.textBtnSave}>Save and Update</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EditPassword;
