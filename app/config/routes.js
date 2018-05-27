import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Kicks from '../screens/Kicks';
import Cart from '../screens/Cart';

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
  Kicks: {
    screen: Kicks,
    navigationOptions: {
      headerTitle: 'Shop Kicks',
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      headerTitle: 'Cart',
    }
  }
});
