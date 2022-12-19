import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingTop: 40,
    paddingBottom: 10,
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 34,
    color: '#000',
  },
  wrapperAddress: {
    marginTop: 30,
  },
  cardAddress: {
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    elevation: 1,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    paddingBottom: 3,
  },
  input2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000',
    paddingBottom: 3,
  },
  cardDeliveryMethods: {
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    elevation: 1,
    flexDirection: 'row',
  },
  radio: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
    marginVertical: 12.5,
  },
  checkedOuter: {
    width: 20,
    height: 20,
    borderColor: '#6A4029',
    borderWidth: 2,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedInner: {
    backgroundColor: '#6A4029',
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  unchekedOuter: {
    width: 20,
    height: 20,
    borderColor: '#9F9F9F',
    borderWidth: 2,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMethod: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: 'black',
    marginBottom: 5,
    marginVertical: 5,
    width: 220,
  },
  wrapperSetTime: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  wrapperCost: {
    height: 65,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 1,
    borderRadius: 20,
    marginTop: 40,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCost: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000',
  },
  btnConfirm: {
    height: 65,
    backgroundColor: '#6A4029',
    shadowColor: '#000',
    elevation: 1,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 40,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textConfirm: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
