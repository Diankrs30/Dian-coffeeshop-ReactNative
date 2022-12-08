import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: 56,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 140,
    marginBottom: 50,
  },
  text: {
    fontSize: 14,
    fontWeight: 'reguler',
    fontFamily: 'Poppins',
    lineHeight: 26,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 66,
  },
  form: {
    paddingTop: 150,
  },
  btnNewAcc: {
    alignItems: 'center',
    backgroundColor: '#6A4029',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 25,
  },
  btnLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 17,
  },
  textBtnNewAcc: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: 'bold',
  },
  textBtnLogin: {
    color: 'black',
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: 'reguler',
  },
  icon: {
    marginRight: 15,
  },
  input: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginHorizontal: 31,
    marginBottom: 12,
    paddingBottom: 3,
  },
});

export default styles;
