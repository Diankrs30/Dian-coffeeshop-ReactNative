import React, {useEffect, useState} from 'react';
import styles from './style';
import Drawer from '../../component/drawer/Index';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import PushNotification from 'react-native-push-notification';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from 'react-native';

import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import productAction from '../../redux/actions/product';
import ImageDefault from '../../assets/images/icon-food.png';
import pencil from '../../assets/images/pencil.png';
import authAction from '../../redux/actions/auth';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const allProduct = useSelector(state => state.product.allProduct);
  const isLoading = useSelector(state => state.product.isLoading);
  const auth = useSelector(state => state.auth.userData);
  const [selectProduct, setSelectProduct] = useState('');
  const [search, setSearch] = useState('');
  const [querys, setQuerys] = useState({
    order: '',
    sort: '',
    category: '',
    page: 1,
    limit: 6,
  });

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const toProductDetail = item => {
    setSelectProduct(item.id);
    console.log('....', item.id);
    navigation.navigate('Product Detail', {
      id: item.id,
    });
  };

  const handleCofee = () => {
    const param = {
      order: '',
      sort: '',
      category: 'Coffee',
      page: 1,
      limit: 6,
    };
    setQuerys({...querys, ...param});
    dispatch(productAction.getAllProductThunk(param));
  };
  const handleNonCofee = () => {
    const param = {
      order: '',
      sort: '',
      category: 'Non Coffee',
      page: 1,
      limit: 6,
    };
    setQuerys({...querys, ...param});
    dispatch(productAction.getAllProductThunk(param));
  };
  const handleFood = () => {
    const param = {
      order: '',
      sort: '',
      category: 'Food',
      page: 1,
      limit: 6,
    };
    setQuerys({...querys, ...param});
    dispatch(productAction.getAllProductThunk(param));
  };

  const handleFavorite = () => {
    const param = {
      sort: 'total_selling',
      order: 'desc',
      category: '',
      page: 1,
      limit: 6,
    };
    setQuerys({...querys, ...param});
    dispatch(productAction.getAllProductThunk(param));
  };

  const handlersearch = text => {
    setSearch(text);
  };

  const handlePresSearch = () => {
    const param = {
      search,
      page: 1,
      limit: 6,
    };
    dispatch(productAction.getAllProductThunk(param));
  };

  useEffect(() => {
    const queryParam = {
      page: 1,
      limit: 6,
    };
    dispatch(productAction.getAllProductThunk(queryParam));
  }, [dispatch]);

  // const handleShowNotification = msg => {
  //   PushNotification.localNotification({
  //     channelId: 'local-notification',
  //     title: 'Local Notification',
  //     message: msg,
  //   });
  // };

  return (
    <View style={styles.container}>
      <Drawer>
        <ScrollView>
          <Text style={styles.title}>A good coffee is a good day</Text>
          <View style={styles.wrapperSearch}>
            <TextInput
              style={styles.textPlaceholder}
              placeholder="Search"
              placeholderTextColor="d#BCBABA"
              onChangeText={handlersearch}
            />
            <FontAwesome
              icon={SolidIcons.search}
              style={styles.iconSearch}
              onPress={handlePresSearch}
            />
          </View>
          <View style={styles.wrapperMenu}>
            <ScrollView horizontal={true} style={styles.sectionMenu}>
              <TouchableOpacity>
                <Text
                  style={
                    querys.sort === 'total_selling' ? styles.brown : styles.grey
                  }
                  onPress={handleFavorite}>
                  Favorite
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.grey}>Promo</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={
                    querys.category === 'Coffee' ? styles.brown : styles.grey
                  }
                  onPress={handleCofee}>
                  Coffee
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={
                    querys.category === 'Non Coffee'
                      ? styles.brown
                      : styles.grey
                  }
                  onPress={handleNonCofee}>
                  Non Coffee
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={
                    querys.category === 'Food' ? styles.brown : styles.grey
                  }
                  onPress={handleFood}>
                  Food
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.grey}>Add on</Text>
              </TouchableOpacity>
            </ScrollView>
            <Text
              style={styles.seeMore}
              onPress={() => {
                navigation.navigate('Screen Favorite');
              }}>
              See more
            </Text>
          </View>
          {isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator size={'large'} />
            </View>
          ) : (
            <ScrollView horizontal={true} style={styles.wrapperCard}>
              {allProduct.length > 0 &&
                allProduct.map((item, idx) => (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => toProductDetail(item)}
                    key={idx}>
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
                      {auth.role === 'admin' && (
                        <Pressable
                          style={styles.wrapperPencil}
                          onPress={() => toProductDetail(item)}>
                          <Image source={pencil} />
                        </Pressable>
                      )}
                    </View>
                    <View style={styles.wrapperProduct}>
                      <Text style={styles.productName}>
                        {item.product_name}
                      </Text>
                      <Text style={styles.productPrice}>
                        {rupiah(item.price)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          )}
          {/* <Pressable
            style={{width: 70, height: 70}}
            onPress={() =>
              handleShowNotification('Welcome to Dian Coffeeshop')
            }>
            <Text style={{fontSize: 18}}>Proceed payment</Text>
          </Pressable> */}
          {auth.role === 'admin' && (
            <TouchableOpacity
              style={styles.btnAddProd}
              onPress={() =>
                navigation.navigate('HomeTab', {screen: 'Create Product'})
              }>
              <Text style={styles.textBtnAddProd}>Add Product</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </Drawer>
    </View>
  );
};

export default Home;
