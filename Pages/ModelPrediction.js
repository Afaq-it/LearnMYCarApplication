/* This function class manages the Model Prediction process. Imports the CameraAccess component and passes parameters to the component which in turn allows the CameraAccess to take pictures and direct the user to the correct pages. */
import * as React from 'react';
import { View } from 'react-native';
import CameraAccess from 'util/CameraAccess';
import { useIsFocused } from '@react-navigation/native';

export default function ModelPrediction({ route, navigation }) {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();

  const { predictionMake } = route.params;

  if (isFocused) {
    return (
      <View style={{ flex: 1 }}>
        <CameraAccess
          makePredicted={true}
          vehicleMake={predictionMake}
          navig={navigation}
        />
      </View>
    );
  } else {
    return null;
  }
}
