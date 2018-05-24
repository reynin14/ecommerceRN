import React from 'react';
import { Text, View, Image, Button } from 'react-native';

import styles from './styles';

import greedy from './images/shoes.png'

const Item = () => {

  handleOnPress = () => {
    console.log('Adding to Cart')
  }

  return (
    <View style={styles.item}>
      <Text>Nike Prestos (Greedy)</Text>
      <Image source={greedy} style={styles.image} />
      <Text>Price: $120</Text>
      <Button title={'Add to cart'} onPress={this.handleOnPress}></Button>
    </View>
  )
};

export default Item;
