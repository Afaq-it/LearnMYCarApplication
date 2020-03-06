'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroButton,
  Viro3DObject,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroConstants,
} from 'react-viro';

ViroARTrackingTargets.createTargets({
  fordtarget: {
    source: require('./res/f-focus.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1, // real world width in meters
  },
});

var createReactClass = require('create-react-class');

var HelloWorldSceneAR = createReactClass({
  getInitialState() {
    return {
      hasARInitialized: false,
      text: 'Initializing AR...',
    };
  },

  render: function() {
    return (
      <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>
        <ViroButton
          source={require('./res/ford_logo.jpg')}
          position={[0.25, -0.5, -1]}
          height={0.2}
          width={0.3}
        />
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
        <ViroARImageMarker target={'fordtarget'}>
          <Viro3DObject
            source={require('./res/airbag.obj')}
            position={[0.25, -0.5, -1]}
            rotationPivot={[0, 0, 0]}
            rotation={[-90, -25, -1]}
            scale={[0.015, 0.01, 0.015]}
            type="OBJ"
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  },
  _onTrackingUpdated(state, reason) {
    // if the state changes to "TRACKING_NORMAL" for the first time, then
    // that means the AR session has initialized!
    if (
      !this.state.hasARInitialized &&
      state == ViroConstants.TRACKING_NORMAL
    ) {
      this.setState({
        hasARInitialized: true,
        text: 'Hello World!',
      });
    }
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
