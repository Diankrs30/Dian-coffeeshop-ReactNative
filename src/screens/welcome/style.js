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
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 65,
    fontFamily: 'Poppins-Bold',
    lineHeight: 56,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 140,
  },
  text: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    lineHeight: 26,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 60,
  },
  btnNewAcc: {
    alignItems: 'center',
    backgroundColor: '#6A4029',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 350,
  },
  btnLogin: {
    alignItems: 'center',
    backgroundColor: '#FFBA33',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 17,
    marginBottom: 50,
  },
  textBtnNewAcc: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
  textBtnLogin: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
});

export default styles;
