import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const ImageOverlay = ({ header, paragraph }) => {

  let newHeader = header ? <Text style={styles.overlayHeader}>{header}</Text> : null;

  let newParagraph = paragraph ? <Text style={styles.overlayText}>{paragraph}</Text> : null;

  return (
    <View>
      {newHeader}
      {newParagraph}
    </View>
  )
};

export default ImageOverlay;
