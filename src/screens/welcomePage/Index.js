import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
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
          <View>
            <Text style={styles.text}>Coffee for Everyone</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btn} onPress={onPressHandler}>
              <Text style={styles.textBtn}>Get started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomePage;
