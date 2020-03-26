/* Final page in the application. The user can choose to start again from this point. */
import * as React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import logo from 'assets/app-logo-white.png';
import face from 'assets/face-icon.png';
import star from 'assets/star-icon.png';

export default function SorryPage({ route, navigation }) {
  const { didUpload } = route.params;
  // false from confirmation, true from user upload choice

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#79B7FF',
        padding: 25,
      }}>
      <Image
        source={logo}
        style={{ height: 200, width: 200, marginBottom: 40 }}
      />
      <Text style={styles.textStyles}>
        {didUpload
          ? 'Thank you very much for helping us improve our app'
          : 'We respect your right not to help improve our app'}
      </Text>
      <Image source={face} style={{ height: 80, width: 80 }} />
      <Text style={styles.textStyles}>
        We're sorry we could not find your vehicle this time around.
      </Text>
      <Image source={star} style={{ height: 80, width: 80 }} />
      <Text style={styles.textStyles}>
        Watch this space, we will be updating the app very soon with the help of
        our users!
      </Text>
      <TouchableOpacity
        style={styles.bottomButtonView}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('MakePrediction');
        }}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>START AGAIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyles: {
    color: '#fff',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  bottomButtonView: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A88E9',
    borderRadius: 10,
    marginTop: 10,
  },
});
