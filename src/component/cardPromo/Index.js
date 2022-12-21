import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const CardAllPromo = ({id, image, code_promo, promo_description}) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const role = useSelector(state => state.auth.userData.role);

  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        paddingLeft: 25,
        paddingRight: 25,
        marginVertical: 10,
      }}
      onPress={() => {
        navigation.navigate('Detail Promo', id);
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
          <Image source={{uri: image}} style={styles.imageCard} />
        </View>
        <View
          style={{
            paddingLeft: 15,
            justifyContent: 'center',
          }}>
          <Text style={styles.cardTitle}>{code_promo}</Text>
          <Text style={styles.cardStatus}>{promo_description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardAllPromo;
