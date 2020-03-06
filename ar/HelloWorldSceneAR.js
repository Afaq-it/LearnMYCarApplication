'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
      pauseUpdates: false,
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onAnchorFound = this._onAnchorFound.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroText
          text={this.state.text}
          scale={[0.2, 0.2, 0.2]}
          position={[0, -0.5, 0]}
          rotation={[-90, -25, -1]}
          style={styles.helloWorldTextStyle}
        />
        <ViroARImageMarker
          target={'fordtarget2'}
          onAnchorFound={this._onAnchorFound}
          pauseUpdates={this.state.pauseUpdates}>
          <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />
          <Viro3DObject
            source={require('./res/hazard.obj')}
            position={[0.25, -3, -1]}
            rotationPivot={[0, 0, 0]}
            rotation={[-180, -25, -1]}
            scale={[0.015, 0.01, 0.015]}
            type="OBJ"
          />
        </ViroARImageMarker>
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

  _onAnchorFound() {
    this.setState({
      pauseUpdates: true,
    });
  }
}

ViroARTrackingTargets.createTargets({
  fordtarget2: {
    source: require('./res/ford-focus.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1, // real world width in meters
  },
});

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
