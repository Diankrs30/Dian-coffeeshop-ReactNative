import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './style';

import ImageDefault from '../../assets/images/icon-food.png';

const CardProduct = props => {
  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };
  return (
    <View style={styles.card}>
      <View style={styles.wrapperImage}>
        <Image
          source={props.image !== null ? props.image : ImageDefault}
          style={styles.image}
        />
      </View>
      <View style={styles.wrapperProduct}>
        <Text style={styles.productName}>{props.product_name}</Text>
        <Text style={styles.productPrice}>{rupiah(props.price)}</Text>
      </View>
    </View>
  );
};

export default CardProduct;
