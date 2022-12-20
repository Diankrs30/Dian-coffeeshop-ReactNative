import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';

import styles from './style';
const back = require('../../assets/images/iconBack.png');
import ImageDefault from '../../assets/images/icon-food.png';
import {useDispatch, useSelector} from 'react-redux';
import productAction from '../../redux/actions/product';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

const AllProduct = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectProduct, setSelectProduct] = useState('');
  const allProduct = useSelector(state => state.product.allProduct);
  const totalPage = useSelector(state => state.product.meta.totalPage);
  const isLoading = useSelector(state => state.product.isLoading);
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

  const handleMaxPrice = () => {
    const param = {
      sort: 'price',
      order: 'desc',
      category: '',
      page: 1,
      limit: 6,
    };
    setQuerys({...querys, ...param});
    dispatch(productAction.getAllProductThunk(param));
  };

  const handleMinPrice = () => {
    const param = {
      sort: 'price',
      order: 'asc',
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

  const getAllProductMore = () => {
    dispatch(productAction.getAllProductThunk(querys));
  };

  const getPagination = () => {
    const nextPage = (querys.page ?? 1) + 1;
    if (nextPage <= totalPage) {
      setQuerys({...querys, page: nextPage});
      getAllProductMore();
    }
  };

  const loadingPagination = () => {
    return (
      <View style={{width: '100%', alignItems: 'center'}}>
        {isLoading ? <Text style={{fontSize: 20}}>Loading . . .</Text> : null}
      </View>
    );
  };

  useEffect(() => {
    dispatch(productAction.getAllProductThunk(querys));
  }, [dispatch, querys]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            onLongPress={() => navigation.navigate('Home')}>
            <Image source={back} />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', flex: 1}}>
            <Text style={styles.textHeader}>All Products</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginTop: 30}}>
          <View style={styles.wrapperSearch}>
            <TextInput
              style={styles.textPlaceholder}
              placeholder="Search"
              placeholderTextColor="#BCBABA"
              onChangeText={handlersearch}
            />
            <TouchableOpacity onPress={handlePresSearch}>
              <FontAwesome icon={SolidIcons.search} style={styles.iconSearch} />
            </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('HomeTab', {screen: 'All Promo'})
                }>
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
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.radio}>
              <Pressable
                style={
                  querys.order === 'desc'
                    ? styles.checkedOuter
                    : styles.unchekedOuter
                }
                onPress={handleMaxPrice}>
                <View
                  style={
                    querys.order === 'desc'
                      ? styles.checkedInner
                      : styles.uncheckedInner
                  }
                />
              </Pressable>
              <Text
                style={
                  querys.order === 'desc'
                    ? styles.checkedText
                    : styles.uncheckedText
                }>
                Max Price
              </Text>
            </View>
            <View style={styles.radio}>
              <Pressable
                style={
                  querys.order === 'asc'
                    ? styles.checkedOuter
                    : styles.unchekedOuter
                }
                onPress={handleMinPrice}>
                <View
                  style={
                    querys.order === 'asc'
                      ? styles.checkedInner
                      : styles.uncheckedInner
                  }
                />
              </Pressable>
              <Text
                style={
                  querys.order === 'asc'
                    ? styles.checkedText
                    : styles.uncheckedText
                }>
                Min Price
              </Text>
            </View>
          </View>
          <View style={{height: 450}}>
            <FlatList
              data={allProduct}
              keyExtractor={item => item.id}
              ListFooterComponent={loadingPagination}
              onEndReachedThreshold={0.2}
              onEndReached={getPagination}
              numColumns={2}
              renderItem={({item, index}) => {
                // if (item.photo === null) {
                //   item.photo =
                //     'https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.jpg';
                // }
                return (
                  <View style={styles.wrapperCard} key={index}>
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
                        <Text style={styles.productName}>
                          {item.product_name}
                        </Text>
                        <Text style={styles.productPrice}>
                          {rupiah(item.price)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default AllProduct;
