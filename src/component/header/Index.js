import {View, Image} from 'react-native';
import React from 'react';
import styles from './style';
import Ionic from 'react-native-vector-icons/Ionicons';

import Hambuger from '../../assets/images/hamburger.png';
import ShoppingCart from '../../assets/images/shopping-cart.png';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Image source={Hambuger} />
        {/* <Ionic name={'cart-outline'} /> */}
      </View>
      <View>
        <Image source={ShoppingCart} />
      </View>
    </View>
  );
};

export default Header;
