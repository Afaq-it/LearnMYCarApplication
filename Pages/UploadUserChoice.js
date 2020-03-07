import * as React from 'react';
import {
  FlatList,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Data from 'app-data.json';
import ListCard from 'Components/ListCard';
import FinalProcessing from 'Pages/FinalProcessing';

export default function ImageUploadProcessing({ route, navigation }) {
  const { currentChoice } = route.params;
  const { imageUrl } = route.params;
  const { vehicleMake } = route.params;

  const ListData = getData();

  function getData() {
    if (currentChoice === false) {
      return Data.imageTagsMakes;
    } else if (currentChoice === true) {
      if (vehicleMake === 'Focus' || vehicleMake === 'Fiesta') {
        return Data.imageTagsFordModels;
      } else if (vehicleMake === 'Polo' || vehicleMake === 'Golf') {
        return Data.imageTagsVwModels;
      }
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topViewstyles}>
        <Text style={styles.textStyling}>
          Please scroll through the list and select the right one for your
          vehicle ...
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <FlatList
          data={ListData}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() =>
                FinalProcessing(
                  item.id,
                  currentChoice,
                  vehicleMake,
                  imageUrl,
                  navigation,
                )
              }>
              <ListCard>Name = {item.name}</ListCard>
            </TouchableHighlight>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topViewstyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyling: {
    textAlign: 'center',
    fontSize: 35,
    color: '#3A88E9',
  },
});
