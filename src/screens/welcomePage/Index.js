import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from '../welcomePage/style';
import bg from '../../assets/images/bg.png';

const WelcomePage = () => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('Welcome');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <View style={styles.content}>
          <Text style={styles.text}>Coffee for Everyone</Text>
          <TouchableOpacity style={styles.btn} onPress={onPressHandler}>
            <Text style={styles.textBtn}>Get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomePage;
