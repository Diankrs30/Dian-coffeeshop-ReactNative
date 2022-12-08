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
  text: {
    fontSize: 65,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
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
  },
  textBtn: {
    color: 'black',
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default styles;
