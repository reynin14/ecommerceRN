import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Kicks from '../screens/Kicks';

export default createStackNavigator({
  Home: {
    screen: Home,
  },
  Kicks: {
    screen: Kicks,
  }
});
