import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';

export default function ARView({ route, navigation }) {
  const { model } = route.params;

  const InitialARScene = getInitialARScene();
  /* Logic to decide which AR mapping file to load in the ARSceneNavigator which delivers the AR functionality. */
  function getInitialARScene() {
    if (model === 'Focus') {
      var scene = require('ar/FordFocusAR');
      return scene;
    } else if (model === 'Polo') {
      var scene = require('ar/VWPoloAR');
      return scene;
    }
  }

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator initialScene={{ scene: InitialARScene }} />
    </View>
  );
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
