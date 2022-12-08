import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: 56,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 140,
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
  btnNewAcc: {
    alignItems: 'center',
    backgroundColor: '#6A4029',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 350,
  },
  btnLogin: {
    alignItems: 'center',
    backgroundColor: '#FFBA33',
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
    fontWeight: 'bold',
  },
});

export default styles;
