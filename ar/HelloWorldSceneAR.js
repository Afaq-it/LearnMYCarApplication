'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />
        <ViroText
          text={this.state.text}
          scale={[0.2, 0.2, 0.2]}
          position={[0, 0.5, -1]}
          style={styles.helloWorldTextStyle}
        />
        <Viro3DObject
          source={require('./res/hazard.obj')}
          position={[0.25, -0.5, -1]}
          rotationPivot={[0, 0, 0]}
          rotation={[-90, -25, -1]}
          scale={[0.015, 0.01, 0.015]}
          type="OBJ"
        />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Hello World!',
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
