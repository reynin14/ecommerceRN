import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import Item from './Item';

const ItemContainer = () => {
  return (
    <View style={styles.itemContainer}>
      <Item />
    </View>
  )
}

export default ItemContainer;
