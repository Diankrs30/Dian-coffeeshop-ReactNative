import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f0',
  },
  title: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 34,
    color: '#000',
    paddingLeft: 40,
    paddingRight: 80,
  },
  wrapperMenu: {
    marginLeft: 40,
  },
  wrapperSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    marginLeft: 40,
    marginRight: 65,
    borderRadius: 30,
    backgroundColor: '#EFEEEE',
    elevation: 1,
    shadowColor: '#393939',
  },
  iconSearch: {
    color: '#000',
    fontSize: 20,
    marginRight: 10,
  },
  textPlaceholder: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    flex: 1,
  },
  sectionMenu: {
    marginTop: 46,
  },
  grey: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#9A9A9D',
    marginRight: 29,
  },
  brown: {
    fontFamily: 'Poppins-Bold',
    textDecorationLine: 'underline',
    fontSize: 17,
    color: '#6A4029',
    marginRight: 29,
  },
  seeMore: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#6A4029',
    textAlign: 'right',
    paddingRight: 27,
    marginTop: 45,
  },
  wrapperCard: {
    marginLeft: 20,
    flexDirection: 'row',
    gap: 38,
    marginBottom: 20,
  },
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
    resizeMode: 'stretch',
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
