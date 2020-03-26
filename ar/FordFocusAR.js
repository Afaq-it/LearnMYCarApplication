/* The AR class that delivers the 3-D objects and their image marker targets. */
'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroCamera,
  ViroNode,
} from 'react-viro';

export default class FordFocusAR extends Component {
  constructor() {
    super();
    this.state = {
      coachText:
        'Slowly scan your steering wheel and middle console to see features ... \n \n \n Turn the device landscape for a better experience ...',
    };
    this._onAnchorFound = this._onAnchorFound.bind(this);
  }

  _onAnchorFound() {
    this.setState({ coachText: '' });
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroCamera active={true}>
          <ViroText
            text={this.state.coachText}
            width={2}
            height={3}
            transformBehaviors={'billboard'} //could cause issues - previously caused app to crash
            textAlign={'Center'}
            position={[0, 0, -3]}
            style={styles.coachTextStyle}
            visible={this.state.coachText === '' ? false : true}
          />
        </ViroCamera>
        {/* indicators marker */}
        <ViroARImageMarker
          target={'indicatorsMarker'}
          onAnchorFound={this._onAnchorFound}>
          <ViroNode position={[-0.5, -4, -0.1]}>
            <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />
            <Viro3DObject
              source={require('./res/objects/indicators.obj')}
              resources={[require('./res/objects/indicators-mtl.mtl')]}
              rotationPivot={[0, 0, 0]}
              rotation={[-180, -10, -0.4]}
              scale={[0.04, 0.015, 0.04]}
              type="OBJ"
            />
          </ViroNode>
        </ViroARImageMarker>
        {/* airbag marker */}
        <ViroARImageMarker
          target={'airbagMarker'}
          onAnchorFound={this._onAnchorFound}>
          <ViroNode position={[0.25, -5, -0.1]}>
            <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />
            <Viro3DObject
              source={require('./res/objects/airbag.obj')}
              resources={[require('./res/objects/airbag-mtl.mtl')]}
              rotationPivot={[0, 0, 0]}
              rotation={[-180, -10, -0.4]}
              scale={[0.04, 0.015, 0.04]}
              type="OBJ"
            />
          </ViroNode>
        </ViroARImageMarker>
        {/* hazard marker */}
        <ViroARImageMarker
          target={'hazardMarker'}
          onAnchorFound={this._onAnchorFound}>
          <ViroNode position={[-0.5, -5, -0.1]}>
            <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />
            <Viro3DObject
              source={require('./res/objects/hazard.obj')}
              resources={[require('./res/objects/hazard-mtl.mtl')]}
              rotationPivot={[0, 0, 0]}
              rotation={[-180, -10, -0.4]}
              scale={[0.04, 0.015, 0.04]}
              type="OBJ"
            />
          </ViroNode>
        </ViroARImageMarker>
        {/* horn marker */}
        <ViroARImageMarker
          target={'hornMarker'}
          onAnchorFound={this._onAnchorFound}>
          <ViroNode position={[-1, -5, -0.1]}>
            <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />
            <Viro3DObject
              source={require('./res/objects/horn.obj')}
              resources={[require('./res/objects/horn-mtl.mtl')]}
              rotationPivot={[0, 0, 0]}
              rotation={[-180, -10, -0.4]}
              scale={[0.04, 0.015, 0.04]}
              type="OBJ"
            />
          </ViroNode>
        </ViroARImageMarker>
        {/* wipers marker */}
        <ViroARImageMarker
          target={'wipersMarker'}
          onAnchorFound={this._onAnchorFound}>
          <ViroNode position={[-0.5, -3, -0.1]}>
            <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />
            <Viro3DObject
              source={require('./res/objects/wipers.obj')}
              resources={[require('./res/objects/wipers-mtl.mtl')]}
              rotationPivot={[0, 0, 0]}
              rotation={[-180, -10, -0.4]}
              scale={[0.04, 0.015, 0.04]}
              type="OBJ"
            />
          </ViroNode>
        </ViroARImageMarker>
      </ViroARScene>
    );
  }
}

ViroARTrackingTargets.createTargets({
  indicatorsMarker: {
    source: require('./res/focus-markers/indicator-marker.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
  wipersMarker: {
    source: require('./res/focus-markers/wipers-marker.jpg'),
    orientation: 'Up',
    physicalWidth: 0.05,
  },
  airbagMarker: {
    source: require('./res/focus-markers/airbag-marker.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
  hazardMarker: {
    source: require('./res/focus-markers/hazard-marker.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
  hornMarker: {
    source: require('./res/focus-markers/horn-marker.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  coachTextStyle: {
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = FordFocusAR;
