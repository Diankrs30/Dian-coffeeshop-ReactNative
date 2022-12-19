import React, {useEffect, useState} from 'react';
import {SwipeItem, SwipeButtonsContainer} from 'react-native-swipe-item';
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
  const history = useSelector(state => state.transaction.history);
  const isLoading = useSelector(state => state.transaction.isLoading);
  const totalPage = useSelector(state => state.transaction.meta.totalPage);
  const token = useSelector(state => state.auth.userData.token);
  const [querys, setQuerys] = useState({
    page: 1,
    limit: 5,
  });

  const rupiah = number => {
    return `IDR ${number
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
  };

  const getAllHistoryMore = () => {
    dispatch(transactionActions.getHistoryThunk(querys, token));
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
    dispatch(transactionActions.getHistoryThunk(querys, token));
  }, [dispatch, token, querys]);

  return (
    <View style={styles.container}>
      <View style={{padding: 30}}>
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
      {history.length === 0 ? (
        <View>
          <View style={styles.containerEmpty}>
            <>
              <Image source={iconHistory} />
            </>
            <Text style={styles.titleEmpty}>No history yet</Text>
            <Text style={styles.decsEmpty}>
              Hit the orange button down below to Create an order
            </Text>
          </View>
          <View style={{paddingHorizontal: 50}}>
            <TouchableOpacity
              style={styles.btnOrder}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textBtnOrder}>Start ordering</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <View>
            <Text style={styles.title}>Order History</Text>
            <View style={styles.swipe}>
              <Image source={iconSwipe} />
              <Text style={styles.swipeText}>swipe on an item to delete</Text>
            </View>
          </View>
          {/* card history */}
          <View style={{paddingHorizontal: 30, height: 550}}>
            <FlatList
              data={history}
              keyExtractor={item => item.id}
              onEndReachedThreshold={0.2}
              onEndReached={getPagination}
              ListFooterComponent={loadingPagination}
              renderItem={({item, index}) => {
                return (
                  // <SwipeItem containerView={ViewOverflow} rightButtons={leftButton}>
                  <View key={index} style={{marginBottom: 10}}>
                    <View
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
                  // </SwipeItem>
                );
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default History;
