import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import CustomImage from './CustomImage';
import styles from './styles';

import image1 from './images/banner2.png';
import image2 from './images/shoes.png';
import image3 from './images/watches2.jpg';
import image4 from './images/backpack.jpg';
import image5 from './images/beanie.jpeg';

const ContentContainer = ({ handleKicksPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.col2} onPress={handleKicksPress} >
        <CustomImage imageSource={image2} header={'Kicks'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.col1}>
        <CustomImage imageSource={image1} header={'Jackets'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentBanner}>
        <CustomImage imageSource={image3} header={'Accessories'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.col1}>
        <CustomImage imageSource={image5} header={'Hats'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.col2}>
        <CustomImage imageSource={image4} header={'Backpacks'} />
      </TouchableOpacity>
    </View>
  )
};

export default ContentContainer;
