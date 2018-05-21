import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

import greedy from './images/shoes.png'

const Item = () => {
  return (
    <View style={styles.item}>
      <Text>Nike Prestos (Greedy)</Text>
      <Image source={greedy} style={styles.image} />
      <Text>Price: $120</Text>
      <Text>Add to cart</Text>
    </View>
  )
};

export default Item;
