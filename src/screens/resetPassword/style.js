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
    textAlign: 'center',
    marginHorizontal: 30,
    paddingTop: 107,
    marginBottom: 20,
  },
  titleDesc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 15,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 100,
    marginBottom: 70,
  },
  form: {
    // paddingTop: 130,
  },
  resetPwd: {
    alignItems: 'center',
    backgroundColor: '#FFBA33',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 130,
  },
  textResetPwd: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
  // input: {
  //   fontFamily: 'Poppins-Bold',
  //   fontSize: 14,
  //   color: '#fff',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#fff',
  //   marginHorizontal: 31,
  //   paddingBottom: 3,
  // },
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
    marginTop: 130,
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
});

export default styles;
