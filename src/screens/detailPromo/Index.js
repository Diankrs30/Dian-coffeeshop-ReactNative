import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import productAction from '../../redux/actions/product';
import {useNavigation} from '@react-navigation/native';
import transactionAction from '../../redux/actions/transaction';

import styles from './style';
import ImageDefault from '../../assets/images/icon-food.png';
const cart = require('../../assets/images/shopCart.png');
const back = require('../../assets/images/iconBack.png');
const pencil = require('../../assets/images/pencil2.png');

const ProductDetail = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const id = props.route.params.id;
  const promo = useSelector(state => state.product.detailPromo);
  const isPending = useSelector(state => state.product.isLoading);
  const auth = useSelector(state => state.auth.userData);

  const [selectProduct, setSelectProduct] = useState('');

  const toEditPromo = () => {
    setSelectProduct(promo[0].id);
    navigation.navigate('Edit Promo', {
      id: promo[0].id,
    });
  };

  useEffect(() => {
    dispatch(productAction.getDetailPromoThunk(id, auth.token));
  }, [dispatch, auth.token, id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        {auth.role === 'admin' ? (
          <TouchableOpacity
            onPress={() => {
              toEditPromo(promo.id);
            }}>
            <Image source={pencil} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image source={cart} />
          </TouchableOpacity>
        )}
      </View>
      {isPending ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView style={styles.section}>
          <View style={styles.wrapperImage}>
            {promo.length > 0 && (
              <Image
                source={{
                  uri:
                    `${promo[0].image}` !== null
                      ? `${promo[0].image}`
                      : ImageDefault,
                }}
                style={styles.image}
              />
            )}
          </View>
          <View style={styles.content}>
            {promo.length > 0 && (
              <View>
                <Text style={styles.productName}>{promo[0].code_promo}</Text>
                <Text style={styles.price}>{promo[0].discount} %</Text>
              </View>
            )}
            <View style={styles.delivery}>
              <Text style={styles.subTitle}>Description</Text>
              <Text style={styles.textDesc}>{promo[0].promo_description}</Text>
            </View>
            {/* {detailProduct.length > 0 && ( */}
            <View style={styles.descContent}>
              <Text style={styles.subTitle}>For product</Text>
              <Text style={styles.textDesc}>{promo[0].product_name}</Text>
            </View>
            {/* )} */}

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textBtn}>Apply coupon</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ProductDetail;
