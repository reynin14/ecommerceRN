import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    marginTop: 30,
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#c2bebe',
  },
  cart: {
    width: 40,
    height: 40,
  },
  logo: {
    fontSize: 20,
    marginLeft: 10,
    fontStyle: 'italic',
    color: '#292929',
  },
});
