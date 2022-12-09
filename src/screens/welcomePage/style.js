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
  text: {
    fontSize: 65,
    fontFamily: 'Poppins-Bold',
    lineHeight: 56,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 160,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#FFBA33',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 31,
    marginTop: 400,
    marginBottom: 50,
  },
  textBtn: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
});

export default styles;
