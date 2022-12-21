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
  Pressable,
  ToastAndroid,
  ActivityIndicator,
  Modal,
  Platform,
} from 'react-native';
import styles from './style';

import ImageDefault from '../../assets/images/default-img.png';
import pencil from '../../assets/images/pencil.png';
const back = require('../../assets/images/iconBack.png');
import calendar from '../../assets/images/calendar.png';

const EditPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector(state => state.auth.userData.token);
  const isLoading = useSelector(state => state.auth.isLoading);

  const [isNewPwdShown, setIsNewPwdShown] = useState(true);
  const [isConfirmPwdShown, setIsConfirmPwdShown] = useState(true);
  const [isOtpShown, setIsOtpShown] = useState(true);
  const [form, setForm] = useState({
    old_password: '',
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

  const toogleOldPwd = () => {
    setIsOtpShown(!isOtpShown);
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
              secureTextEntry={isOtpShown}
              style={styles.inputPwd}
              keyBoardType="text"
              value={form.new_password}
              placeholder="Enter your new password"
              placeholderTextColor="#000"
              onChangeText={text => onChangeHandler(text, 'new_password')}
            />
            <FontAwesome
              icon={isOtpShown ? SolidIcons.eye : SolidIcons.eyeSlash}
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
              secureTextEntry={isOtpShown}
              style={styles.inputPwd}
              keyBoardType="text"
              value={form.confirm_password}
              placeholder="Enter your confirm password"
              placeholderTextColor="#000"
              onChangeText={text => onChangeHandler(text, 'confirm_password')}
            />
            <FontAwesome
              icon={isOtpShown ? SolidIcons.eye : SolidIcons.eyeSlash}
              style={styles.iconPwd}
              onPress={toogleConfirmPassword}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.btnSave}>
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
