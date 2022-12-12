import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 220,
    height: 270,
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#393939',
    borderRadius: 30,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end',
    left: 20,
    marginTop: 55,
    marginRight: 38,
  },
  image: {
    width: 168,
    height: 189,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  wrapperImage: {
    width: 168,
    height: 189,
    borderRadius: 20,
  },
  wrapperProduct: {
    width: 150,
    alignItems: 'center',
    paddingBottom: 10,
    marginTop: 15,
  },
  productName: {
    height: 50,
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 22,
    color: '#000',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    lineHeight: 26,
  },
  productPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#6A4029',
    marginTop: 8,
  },
});

export default styles;
