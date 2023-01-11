import React, {useEffect, useState} from 'react';
import {
  SwipeItem,
  SwipeButtonsContainer,
  SwipeProvider,
} from 'react-native-swipe-item';
import ImageDefault from '../../assets/images/icon-food.png';
import {ViewOverflow} from 'react-native-view-overflow';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import transactionActions from '../../redux/actions/transaction';
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

import styles from './style';
const back = require('../../assets/images/iconBack.png');
import iconSwipe from '../../assets/images/iconSwipe.png';
import iconDelete from '../../assets/images/iconDelete.png';
import iconHistory from '../../assets/images/iconHistory.png';

function History() {
  const leftButton = (
    <SwipeButtonsContainer style={{paddingTop: 30, paddingRight: 20}}>
      <TouchableOpacity
        onPress={() => console.log('left button clicked')}
        style={styles.trash}>
        <Image source={iconDelete} />
      </TouchableOpacity>
    </SwipeButtonsContainer>
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  // const history = useSelector(state => state.transaction.history);

  const [history, setHistory] = useState([]);
  const isLoading = useSelector(state => state.transaction.isLoading);
  const totalPage = useSelector(state => state.transaction.meta.totalPage);
  const token = useSelector(state => state.auth.userData.token);
  const [querys, setQuerys] = useState({
    sort: 'created_at',
    order: 'asc',
    page: 1,
    limit: 5,
  });

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  console.log(history);
  const getAllHistoryMore = async () => {
    try {
      const result = await dispatch(
        transactionActions.getHistoryThunk(querys, token),
      );
      setHistory([...history, ...result.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getPagination = () => {
    const nextPage = (querys.page ?? 1) + 1;
    if (nextPage <= totalPage) {
      setQuerys({...querys, page: nextPage});
      getAllHistoryMore();
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
    // dispatch(transactionActions.getHistoryThunk(querys, token));
    getAllHistoryMore();
  }, []);

  return (
    <View style={styles.container}>
      {history && history.length !== 0 ? (
        <View>
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                onLongPress={() => {
                  navigation.navigate('HomeTab', {screen: 'Home'});
                }}>
                <Image source={back} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.title}>Order History</Text>
              <View style={styles.swipe}>
                <Image source={iconSwipe} />
                <Text style={styles.swipeText}>swipe on an item to delete</Text>
              </View>
            </View>
            {/* card history */}
            {isLoading ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ActivityIndicator size={'large'} />
              </View>
            ) : (
              <View style={{paddingHorizontal: 25, height: 550}}>
                <FlatList
                  data={history}
                  keyExtractor={item => item.id}
                  renderItem={({item, index}) => {
                    return (
                      // <SwipeProvider>
                      //   <SwipeItem
                      //     containerView={ViewOverflow}
                      //     rightButtons={leftButton}>
                      <View style={{marginBottom: 10}}>
                        <View
                          key={item.id}
                          style={{
                            backgroundColor: 'white',
                            width: width / 1.15,
                            borderRadius: 20,
                            flexDirection: 'row',
                            padding: 15,
                          }}>
                          <View>
                            <Image
                              source={{
                                uri:
                                  `${item.image}` !== null
                                    ? `${item.image}`
                                    : ImageDefault,
                              }}
                              style={styles.imageCard}
                            />
                          </View>
                          <View style={{paddingLeft: 10}}>
                            <Text style={styles.cardTitle}>
                              {item.product_name}
                            </Text>
                            <Text style={styles.cardPrice}>
                              {rupiah(item.total_price)}
                            </Text>
                            <Text style={styles.cardStatus}>
                              {item.status_order}
                            </Text>
                          </View>
                        </View>
                      </View>
                      //   </SwipeItem>
                      // </SwipeProvider>
                    );
                  }}
                  onEndReachedThreshold={0.2}
                  onEndReached={getPagination}
                  ListFooterComponent={loadingPagination}
                />
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                onLongPress={() => {
                  navigation.navigate('HomeTab', {screen: 'Home'});
                }}>
                <Image source={back} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerEmpty}>
            <>
              <Image source={iconHistory} />
            </>
            <Text style={styles.titleEmpty}>No history yet</Text>
            <Text style={styles.decsEmpty}>
              Hit the orange button down below to Create an order
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.btnOrder}
              onPress={() => navigation.navigate('HomeTab', {screen: 'Home'})}>
              <Text style={styles.textBtnOrder}>Start ordering</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

export default History;
