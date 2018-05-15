import React from 'react';
import { View } from 'react-native';

import CustomImage from './CustomImage';
import styles from './styles';

import image1 from './images/banner2.png';
import image2 from './images/shoes.png';
import image3 from './images/watches2.jpg';
import image4 from './images/backpack.jpg';
import image5 from './images/beanie.jpeg';

const ContentContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.col2}>
        <CustomImage imageSource={image2} header={'Kicks'} />
      </View>

      <View style={styles.col1}>
        <CustomImage imageSource={image1} header={'Jackets'} />
      </View>

      <View style={styles.contentBanner}>
        <CustomImage imageSource={image3} header={'Accessories'} />
      </View>

      <View style={styles.col1}>
        <CustomImage imageSource={image5} header={'Hats'} />
      </View>

      <View style={styles.col2}>
        <CustomImage imageSource={image4} header={'Backpacks'} />
      </View>
    </View>
  )
};

export default ContentContainer;
