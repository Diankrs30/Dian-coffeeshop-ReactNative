import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingTop: 40,
    paddingBottom: 10,
  },
  wrapperImage: {
    width: 241,
    height: 241,
    paddingHorizontal: 100,
    justifyContent: 'center',
    borderRadius: 150,
    resizeMode: 'stretch',
    marginBottom: 50,
  },
  image: {
    width: 241,
    height: 241,
    borderRadius: 150,
  },
  content: {
    paddingHorizontal: 50,
  },
  productName: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 28,
    lineHeight: 42,
    color: '#000',
    textAlign: 'center',
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#6A4029',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#000',
  },
  textDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000',
  },
  delivery: {
    marginTop: 30,
  },
  descContent: {
    marginTop: 30,
  },
  button: {
    paddingHorizontal: 50,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#6A4029',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#fff',
  },
  wrapperBtnSize: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnSize: {
    width: 60,
    height: 60,
    backgroundColor: '#FFBA33',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brown: {
    width: 60,
    height: 60,
    backgroundColor: '#6A4029',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnSize: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },
  inputCount: {
    width: 40,
    textAlign: 'center',
    fontSize: 17,
    flex: 1,
  },
  btnCounter: {
    paddingHorizontal: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderWidth: 1,
    marginHorizontal: 70,
    borderRadius: 20,
    height: 50,
    backgroundColor: '#FFBA33',
  },
});

export default styles;
