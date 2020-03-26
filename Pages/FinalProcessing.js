import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import AzureConnection from 'util/AzureConnection';
/* Page to manage the logic behind which Azure Connection function needs to be called and then the user is directed to the final page in the application. */
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
