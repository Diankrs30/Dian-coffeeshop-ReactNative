import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

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
  contentImg: {
    widt: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  wrapperImage: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    borderRadius: 150,
    resizeMode: 'stretch',
    marginBottom: 50,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 150,
  },
  wrapperPencil: {
    width: 40,
    height: 40,
    borderRadius: 150,
    backgroundColor: '#6A4029',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -85,
    marginLeft: 90,
  },
  radio: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
    marginBottom: 20,
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
  unchekedInner: {
    backgroundColor: '#9F9F9F',
    width: 15,
    height: 15,
    borderRadius: 50,
  },
  textGender: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: 'black',
    marginBottom: 5,
    marginVertical: 5,
    marginHorizontal: 15,
    width: 50,
  },
  textForm: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: '#9F9F9F',
  },
  textInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#000',
    paddingVertical: 10,
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  btnSave: {
    alignItems: 'center',
    backgroundColor: '#6A4029',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  textBtnSave: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
  checkedText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: 'black',
    marginLeft: 15,
    paddingTop: 3.5,
  },
  uncheckedText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: '#9F9F9F',
    marginLeft: 15,
    paddingTop: 3.5,
  },
  tanggal: {
    marginVertical: 10,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  berubah: {
    marginVertical: 10,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  inputDate: {
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    width: 100,
    marginHorizontal: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#6A4029',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontFamily: 'Poppins-Bold',
    width: 200,
    color: 'black',
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
  },
  inputPwd: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#000',
    paddingVertical: 10,
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  iconPwd: {
    color: '#000',
    paddingVertical: 10,
    marginBottom: 20,
  },
});

export default styles;
