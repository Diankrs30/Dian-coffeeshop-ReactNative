import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingTop: 40,
    paddingBottom: 10,
  },
  containerContent: {
    paddingHorizontal: 50,
    marginTop: 30,
  },
  textTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#000',
  },
  card: {
    height: 120,
    elevation: 1,
    shadowColor: '#000',
    borderColor: '#000',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  wrapperImg: {
    width: 100,
    height: 109,
    borderRadius: 20,
  },
  image: {
    width: 100,
    height: 109,
    borderRadius: 20,
  },
  order: {
    flex: 1,
    marginHorizontal: 5,
  },
  wrapperCount: {
    width: 49,
    height: 34,
    backgroundColor: '#E0E0E2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
