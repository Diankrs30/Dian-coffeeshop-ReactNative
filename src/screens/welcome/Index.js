import React, {useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import bg from '../../assets/images/bg-welcomepage.png';
import styles from './style';
import {useSelector} from 'react-redux';

const Welcome = () => {
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    if (auth.userData.token) {
      navigation.navigate('Home');
    }
  }, [auth, navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.text}>
              Get a cup of coffee for free every sunday morning
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btnNewAcc} onPress={onPressSignUp}>
              <Text style={styles.textBtnNewAcc}>Create New Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin} onPress={onPressLogin}>
              <Text style={styles.textBtnLogin}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
