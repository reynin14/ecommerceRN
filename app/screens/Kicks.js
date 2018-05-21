import React from 'react';
import { View, Text } from 'react-native';

import { ItemContainer } from '../components/content';

const Kicks = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the kicks screen</Text>
      <ItemContainer />
    </View>
  )
};

export default Kicks;
