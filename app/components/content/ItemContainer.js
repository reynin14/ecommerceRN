import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import Item from './Item';

import greedy from './images/shoes.png'

const ItemContainer = () => {

  return (
    <View style={styles.itemContainer}>
      <Item
        name='Nike Prestos (Greedy)'
        image={greedy}
        price={120}
      />
      <Item
        name='Nike Prestos (Greedy)'
        image={greedy}
        price={120}
      />
    </View>
  )
}

export default ItemContainer;
