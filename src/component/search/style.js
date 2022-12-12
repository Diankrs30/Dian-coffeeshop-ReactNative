import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapperSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    marginLeft: 40,
    marginRight: 65,
    borderRadius: 30,
    backgroundColor: '#EFEEEE',
    elevation: 1,
    shadowColor: '#393939',
  },
  iconSearch: {
    color: '#000',
    fontSize: 20,
    marginRight: 10,
  },
  textPlaceholder: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    flex: 1,
  },
});

export default styles;
