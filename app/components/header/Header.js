import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, Image } from 'react-native';

import styles from './styles';
import logo from './images/logo.png'
import { Cart } from '../cart';

const Header = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Cart
        style={styles.cart}
        onPress={onPress}
      />
    </View>
  )
};

Header.propTypes = {
  onPress: PropTypes.func,
}

export default Header;
