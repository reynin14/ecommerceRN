import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  col1: {
    flex: 1,
    padding: 5,
  },
  col2: {
    flex: 2,
    padding: 5,
  },
  contentBanner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  image: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayHeader: {
    alignSelf: 'center',
    fontSize: 26,
    color: '#292929',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontWeight: 'bold',
  },
  overlayText: {
    alignSelf: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#292929',
    textAlign: 'center',
    padding: 8,
    marginTop: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',

  },
});
