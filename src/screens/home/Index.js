import React, {useEffect, useState} from 'react';
import styles from './style';
import Drawer from '../../component/drawer/Index';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import productAction from '../../redux/actions/product';
import ImageDefault from '../../assets/images/icon-food.png';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const allProduct = useSelector(state => state.product.allProduct);
  const [selectProduct, setSelectProduct] = useState('');
  // const [param, setParam] = useState('');

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  // const getAllProduct = () => {
  //   const queryParam = {
  //     page: 1,
  //     limit: 6,
  //   };
  //   dispatch(productAction.getAllProductThunk(queryParam));
  // };

  const toProductDetail = item => {
    console.log('first', item);
    setSelectProduct(item.id);
    navigation.navigate('Product Detail', {
      id: item.id,
    });
  };

  useEffect(() => {
    // const getAllProduct = () => {
    const queryParam = {
      page: 1,
      limit: 6,
    };
    dispatch(productAction.getAllProductThunk(queryParam));
    // };

    // getAllProduct();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Drawer>
        <ScrollView>
          <Text style={styles.title}>A good coffee is a good day</Text>
          <View style={styles.wrapperSearch}>
            <FontAwesome icon={SolidIcons.search} style={styles.iconSearch} />
            <TextInput
              style={styles.textPlaceholder}
              placeholder="Search"
              placeholderTextColor="d#BCBABA"
              // onChangeText={handlersearch}
            />
          </View>
          <View style={styles.wrapperMenu}>
            <ScrollView horizontal={true} style={styles.sectionMenu}>
              <Text style={styles.grey}>Favorite</Text>
              <Text style={styles.grey}>Promo</Text>
              <Text style={styles.grey}>Coffee</Text>
              <Text style={styles.grey}>Non Coffee</Text>
              <Text style={styles.grey}>Food</Text>
              <Text style={styles.grey}>Add on</Text>
            </ScrollView>
            <Text
              style={styles.seeMore}
              onPress={() => {
                navigation.navigate('Screen Favorite');
              }}>
              See more
            </Text>
          </View>
          <ScrollView horizontal={true} style={styles.wrapperCard}>
            {allProduct.length > 0 &&
              allProduct.map((item, idx) => (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => toProductDetail(item)}>
                  <View style={styles.wrapperImage}>
                    <Image
                      source={{
                        uri:
                          `${item.image}` !== null
                            ? `${item.image}`
                            : ImageDefault,
                      }}
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.wrapperProduct}>
                    <Text style={styles.productName}>{item.product_name}</Text>
                    <Text style={styles.productPrice}>
                      {rupiah(item.price)}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            {/* {allProduct.length > 0 &&
              allProduct.map((item, idx) => {
                return <CardProduct key={idx} props={item} />;
              })} */}
          </ScrollView>
        </ScrollView>
      </Drawer>
    </View>
  );
};

export default Home;
