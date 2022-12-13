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
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 18,
    color: '#000',
  },
  card: {
    height: 120,
    elevation: 1,
    shadowColor: '#000',
    marginBottom: 20,
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
  productName: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 17,
    color: '#000',
    height: 30,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000',
    marginTop: 10,
  },
  order: {
    flex: 1,
    marginHorizontal: 20,
  },
  car: {
    width: 74,
    height: 64,
    backgroundColor: '#E0E0E2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  wrapperDelete: {
    width: 30,
    height: 30,
    backgroundColor: '#E0E0E2',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperCount: {
    width: 100,
    height: 34,
    backgroundColor: '#E0E0E2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputCount: {
    width: 60,
    textAlign: 'center',
    fontSize: 12,
  },
  iconArrow: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 200,
  },
  completeOrder: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#000',
    marginRight: 30,
    marginVertical: 20,
  },
});

export default styles;
