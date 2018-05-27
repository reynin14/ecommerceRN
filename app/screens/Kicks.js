import React from 'react';
import { View, Text } from 'react-native';

import { ItemContainer } from '../components/content';

class Kicks extends React.PureComponent {
  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ItemContainer />
      </View>
    )
  }
};

export default Kicks;
