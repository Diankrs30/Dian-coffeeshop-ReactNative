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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 65,
    fontFamily: 'Poppins-Bold',
    lineHeight: 56,
    color: '#fff',
    marginHorizontal: 22,
    paddingTop: 70,
    marginBottom: 50,
  },
  form: {
    paddingTop: 170,
  },
  textForgot: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#fff',
    textDecorationLine: 'underline',
    marginHorizontal: 31,
    marginTop: 15,
  },
  btnLogin: {
    alignItems: 'center',
    backgroundColor: '#FFBA33',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 25,
  },
  btnLoginWithGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 25,
  },
  textBtnLogin: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
  textBtnLoginWithGoogle: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginHorizontal: 31,
    marginBottom: 12,
    paddingBottom: 3,
  },
  textLoginGoogle: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 25,
  },
  wrapperPwd: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 31,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 12,
  },
  iconPwd: {
    color: '#fff',
  },
  inputPwd: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#fff',
    flex: 1,
    paddingBottom: 3,
  },
  btnLoading: {
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 25,
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
});

export default styles;
