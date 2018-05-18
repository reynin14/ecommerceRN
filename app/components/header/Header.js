import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import logo from './images/logo.png'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
    </View>
  )
};

export default Header;
