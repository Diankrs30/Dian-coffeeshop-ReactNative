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
    marginBottom: 100,
  },
  form: {
    paddingTop: 130,
  },
  textConfirmation: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 25,
  },
  resendLink: {
    alignItems: 'center',
    backgroundColor: '#6A4029',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 31,
  },
  textResendLink: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginHorizontal: 31,
    paddingBottom: 3,
  },
});

export default styles;
