import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './styles';
import banner from './images/banner3.jpeg';

import { ImageOverlay } from '../content';

const Banner = () => {
  return (
    <ImageBackground source={banner} style={styles.banner}>
      <ImageOverlay
        header='- Streetwear -'
      />
    </ImageBackground>
  )
};

export default Banner;
