/* Manages the prediction results pages. Imports the Confirmation component with the correct parameters todisplay the right page to the user. */
import * as React from 'react';
import { View } from 'react-native';
import Confirmation from 'Components/Confirmation';

export default function ModelPredictionResults({ route, navigation }) {
  const { imageUrl } = route.params;
  const { prediction } = route.params;
  const { previousPrediction } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Confirmation
        imageUrl={imageUrl}
        prediction={prediction}
        navig={navigation}
        previousPrediction={previousPrediction}
      />
    </View>
  );
}
