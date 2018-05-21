import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const ItemContainer = () => {
  return (
    <View style={styles.itemContainer}>
      <Text>Inside Item Container</Text>
    </View>
  )
}

export default ItemContainer;
