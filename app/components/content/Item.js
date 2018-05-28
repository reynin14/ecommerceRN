import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, Image, Button } from 'react-native';

import styles from './styles';

import { addToCart } from '../../actions/cart';



const Item = ({ name, image, price }) => {

  handleOnPress = () => {
    console.log('Adding to Cart')
  }

  return (
    <View style={styles.item}>
      <Text>{name}</Text>
      <Image source={image} style={styles.image} />
      <Text>Price: ${price}</Text>
      <Button title={'Add to cart'} onPress={this.handleOnPress}></Button>
    </View>
  )
};

Item.propTypes = {
  name: PropTypes.string,
  image: PropTypes.any,
  price: PropTypes.number,
}

export default Item;
