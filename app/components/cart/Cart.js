import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Cart = ({ onPress }) => {
  return(
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      <Ionicons name="ios-cart-outline" size={32} />
    </TouchableOpacity>
  )
};

export default Cart;
