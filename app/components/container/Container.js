import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, ScrollView, Image } from 'react-native';

import styles from './styles';

const Container = ( {children} ) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {children}
      </View>
    </ScrollView>
  )
};

Container.propTypes = {
  children: PropTypes.any,
}

export default Container;
