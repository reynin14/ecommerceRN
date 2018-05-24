import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import logo from './images/logo.png'
import { Cart } from '../cart';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Cart style={styles.cart}/>
    </View>
  )
};

export default Header;
