import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import logo from './images/bargainBuysLogo.png'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.cart}/>
      <Text style={styles.logo}>Bargain Buys</Text>
    </View>
  )
};

export default Header;
