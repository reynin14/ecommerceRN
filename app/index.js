import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

import Home from './screens/Home';

EStyleSheet.build({

});

export default () => (
  <Navigator />
);
