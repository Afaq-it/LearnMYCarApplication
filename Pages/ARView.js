import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';

var InitialARScene = require('ar/HelloWorldSceneAR');

export default class ARView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator initialScene={{ scene: InitialARScene }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
