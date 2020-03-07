import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import AzureConnection from 'util/AzureConnection';

export default function FinalProcessing(
  key,
  currentChoice,
  vehicleMake,
  imageUrl,
  navigation,
) {
  if (currentChoice === false) {
    AzureConnection.uploadImageForTrainingMake(key, imageUrl, navigation);
  } else if (currentChoice === true) {
    if (vehicleMake === 'Volkswagen') {
      AzureConnection.uploadImageForTrainingVwModel(key, imageUrl, navigation);
    } else if (vehicleMake === 'Ford') {
      AzureConnection.uploadImageForTrainingFordModel(
        key,
        imageUrl,
        navigation,
      );
    }
  }
  navigation.navigate('SorryPage', { didUpload: true });
}
