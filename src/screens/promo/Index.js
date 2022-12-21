import React, {useEffect, useState} from 'react';

import styles from './style';
import Card from '../../component/cardPromo/Index';
import IconIon from 'react-native-vector-icons/Ionicons';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

import {
  View,
  Image,
  ScrollView,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import productAction from '../../redux/actions/product';

const back = require('../../assets/images/iconBack.png');
import ImageDefault from '../../assets/images/icon-food.png';
import pencil from '../../assets/images/pencil.png';
// import debounce from 'lodash.debounce';

function AllPromo() {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const promo = useSelector(state => state.product.promo);
  const isLoading = useSelector(state => state.product.isLoading);
  const pagination = useSelector(state => state.product.meta);
  const auth = useSelector(state => state.auth.userData);

  const [selectPromo, setSelectPromo] = useState('');
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState({
    code: '',
    page: 1,
  });

  const nextItems = () => {
    if (query.page === pagination.totalPage) {
      return setQuery({...query, page: query.page + 1});
    }
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
    dispatch(productAction.getAllPromoThunk(param));
  };

  const toEditPromo = item => {
    setSelectPromo(item.id);
    console.log('....', item.id);
    navigation.navigate('Edit Promo', {
      id: item.id,
    });
  };

  //   const debounceHandler = useCallback(
  //     debounce(text => {
  //       // console.log(text);
  //       setQuery({...query, code: text});
  //     }, 500),
  //     [],
  //   );

  //   const searchHandler = text => {
  //     if (!text) {
  //       return;
  //     }
  //     debounceHandler(text);
  //   };

  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
          justifyContent: 'center',
          paddingBottom: 10,
        }}>
        {isLoading && <ActivityIndicator size="large" color="black" />}
        {pagination.totalPage === query.page && (
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontFamily: 'Poppins-Regular',
            }}>
            No more promo
          </Text>
        )}
      </View>
    );
  };

  useEffect(() => {
    dispatch(productAction.getAllPromoThunk(query));
  }, [dispatch, query]);

  return (
    <View style={styles.container}>
      <View style={{padding: 30}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            onLongPress={() => {
              navigation.navigate('Home');
            }}>
            <Image source={back} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Promo</Text>
        <View style={styles.wrapperSearch}>
          <TextInput
            style={styles.textPlaceholder}
            placeholder="Search"
            placeholderTextColor="#BCBABA"
            onChangeText={handlersearch}
            // onChangeText={text => searchHandler(text)}
            // onChangeText={handlersearch}
          />
          <TouchableOpacity onPress={handlePresSearch}>
            <FontAwesome icon={SolidIcons.search} style={styles.iconSearch} />
          </TouchableOpacity>
        </View>
      </View>
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            paddingTop: 200,
          }}>
          <ActivityIndicator size={'large'} color={'#6A4029'} />
        </View>
      ) : (
        promo &&
        promo.length > 0 && (
          <FlatList
            data={promo}
            renderItem={({item, idx}) => {
              return (
                // <Card
                //   image={item.image}
                //   code_promo={item.code_promo}
                //   promo_description={item.promo_description}
                //   // subtotal={item.subtotal}
                // />
                <View key={idx}>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      paddingLeft: 25,
                      paddingRight: 25,
                      marginVertical: 10,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#F5C361',
                        width: width / 1.15,
                        display: 'flex',
                        borderRadius: 20,
                        flexDirection: 'row',
                        padding: 15,
                      }}>
                      <View>
                        <Image
                          // source={{
                          //   uri:
                          //     `${item.image}` !== null
                          //       ? `${item.image}`
                          //       : ImageDefault,
                          // }}
                          source={
                            `${item.image}`
                              ? {uri: `${item.image}`}
                              : ImageDefault
                          }
                          style={styles.imageCard}
                        />
                      </View>
                      <View
                        style={{
                          paddingLeft: 15,
                          justifyContent: 'center',
                        }}>
                        <Text style={styles.cardTitle}>{item.code_promo}</Text>
                        <Text style={styles.cardStatus}>
                          {item.promo_description}
                        </Text>
                      </View>
                    </View>
                    {auth.role === 'admin' && (
                      <Pressable
                        style={styles.wrapperPencil}
                        onPress={() => toEditPromo(item)}>
                        <Image source={pencil} />
                      </Pressable>
                    )}
                  </TouchableOpacity>
                </View>
              );
            }}
            onEndReachedThreshold={0.5}
            onEndReached={nextItems}
            ListFooterComponent={renderFooter}
          />
        )
      )}
    </View>
  );
}

export default AllPromo;
