import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import bg from '../../assets/images/bg-welcomepage.png';
import styles from '../welcome/style';

const Welcome = () => {
  const navigation = useNavigation();

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.text}>
            Get a cup of coffee for free every sunday morning
          </Text>
          <TouchableOpacity style={styles.btnNewAcc}>
            <Text style={styles.textBtnNewAcc} onPress={onPressSignUp}>
              Create New Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtnLogin} onPress={onPressLogin}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
