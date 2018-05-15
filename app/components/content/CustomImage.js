import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './styles';

import ImageOverlay  from './ImageOverlay';

const CustomImage = ({ imageSource, header, paragraph }) => {
  return (
    <ImageBackground source={imageSource} style={styles.image}>
      <ImageOverlay
        header={header}
        paragraph={paragraph}
      />
    </ImageBackground>
  )
};

export default CustomImage;
