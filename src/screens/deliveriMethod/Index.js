import React from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
const back = require('../../assets/images/iconBack.png');

const DeliveryMethod = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.textHeader}>Checkout</Text>
        </View>
      </View>
      <ScrollView style={{paddingHorizontal: 50, paddingTop: 20}}>
        <Text style={styles.title}>Delivery</Text>
        <View style={styles.wrapperAddress}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontFamily: 'Poppins-Bold', fontSize: 17, color: '#000'}}>
              Address detail
            </Text>
            <Pressable>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 15,
                  color: '#6A4029',
                }}>
                change
              </Text>
            </Pressable>
          </View>
          <View style={styles.cardAddress}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.input2}
              placeholder="Enter your email address"
              placeholderTextColor="#000"
            />
          </View>
        </View>
        <View style={styles.wrapperAddress}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontFamily: 'Poppins-Bold', fontSize: 17, color: '#000'}}>
              Delivery and Time
            </Text>
          </View>
          <View style={styles.cardDeliveryMethods}>
            <View style={styles.wrapperBtnDelivery}>
              <Pressable style={styles.btnDelivery}>
                <Text>Dine in</Text>
              </Pressable>
              <Pressable style={styles.btnDelivery}>
                <Text>Door delivery</Text>
              </Pressable>
              <Pressable style={styles.btnDelivery}>
                <Text>Pick up</Text>
              </Pressable>
            </View>
            <View style={styles.wrapperSetTime}>
              <Text style={styles.textNow}>Now</Text>
              <View style={styles.wrapperbtnSetTime}>
                <Pressable style={styles.btnSetTime}>
                  <Text>Yes</Text>
                </Pressable>
                <Pressable style={styles.btnSetTime}>
                  <Text>No</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.wrapperResevation}>
              <Text style={styles.textSetTime}>Set time</Text>
              <TextInput
                style={styles.inputReservation}
                placeholder="Enter your time for reservation"
                placeholderTextColor="#000"
              />
            </View>
          </View>
          <View style={styles.wrapperCost}>
            <Text style={styles.textCost}>Cost</Text>
            <Text style={styles.textCost}>IDR 30.000</Text>
          </View>
          <TouchableOpacity
            style={styles.btnConfirm}
            onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.textConfirm}>Confirm and pay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DeliveryMethod;
