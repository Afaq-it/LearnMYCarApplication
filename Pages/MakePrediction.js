/* This function class manages the Make Prediction process. Imports the CameraAccess component and passes parameters to the component which in turn allows the CameraAccess to take pictures and direct the user to the correct pages. */
import * as React from 'react';
import { View } from 'react-native';
import CameraAccess from 'util/CameraAccess';
import { useIsFocused } from '@react-navigation/native';

export default function MakePrediction({ navigation }) {
  // This hook returns `true` if the screen is focused, otherwise it's `false`
  const isFocused = useIsFocused();
  if (isFocused) {
    return (
      <View style={{ flex: 1 }}>
        <CameraAccess
          makePredicted={false}
          navig={navigation}
          trainNewVehicle={false}
        />
      </View>
    );
  } else {
    return null;
  }
}
