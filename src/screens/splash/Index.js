import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import {View, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearState} from '../../helper/clearState';
import userAction from '../../redux/actions/user';
import styles from './style';
import splash from '../../assets/images/splash.png';

function SplashScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.userData.token);
  console.log(token);

  const navigateStarted = () => {
    clearState(dispatch);
    navigation.dispatch(StackActions.replace('Welcome Page'));
  };

  const navigateHome = () => navigation.dispatch(StackActions.replace('Home'));

  useEffect(() => {
    dispatch(userAction.getProfileThunk(token, navigateHome, navigateStarted));
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={splash} resizeMode="cover" style={styles.bg} />
    </View>
  );
}

export default SplashScreen;
