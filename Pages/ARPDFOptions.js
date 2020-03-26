/* The AR and PDF view page, where the user can choose which format of user manual they would like to view. */
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Alert,
} from 'react-native';
import logo from 'assets/app-logo.png';

export default function ARPDFOptions({ route, navigation }) {
  const { predictionMake } = route.params;
  const { previousPrediction } = route.params;

  return (
    <View style={styles.viewOne}>
      <View style={styles.logoView}>
        <Image source={logo} style={{ height: 130, width: 130 }} />
      </View>
      <View style={styles.middleView}>
        <View style={styles.anotherView}>
          <Text style={styles.anotherView2}>Your vehicle is a</Text>
        </View>
        <View style={styles.someView}>
          <Text style={{ fontSize: 35, color: '#656565' }}>
            {previousPrediction} {predictionMake}
          </Text>
        </View>
        <View style={styles.someOtherView}>
          <Text style={styles.textView}>
            Which format would you like to view your manual in ...
          </Text>
        </View>
      </View>
      <View style={styles.buttonViewOne}>
        {/* Logic added to manage the vehicle makes and models that do not have AR mappings or PDF manuals available. */}
        <TouchableOpacity
          style={styles.buttonViewMain}
          activeOpacity={0.5}
          onPress={() => {
            predictionMake === 'Fiesta' || predictionMake === 'Golf'
              ? Alert.alert(
                  'Oops, this is embarassing!',
                  "Apologies, this feature isn't ready just yet, but watch this space!!",
                )
              : navigation.navigate('ARView', { model: predictionMake });
          }}>
          <Image
            source={require('assets/ar-icon.png')}
            style={{ height: 50, width: 50, marginBottom: 25 }}
          />
          <Text style={styles.buttonTextView}>AR</Text>
        </TouchableOpacity>
        <View style={{ width: 50 }} />
        <TouchableOpacity
          style={styles.buttonViewMain}
          activeOpacity={0.5}
          onPress={() => {
            predictionMake === 'Polo' || predictionMake === 'Golf'
              ? Alert.alert(
                  'Oops, this is embarassing!',
                  "Apologies, this feature isn't ready just yet, but watch this space!!",
                )
              : navigation.navigate('PDFView', { model: predictionMake });
          }}>
          <Image
            source={require('assets/pdf-icon.png')}
            style={{ height: 50, width: 50, marginBottom: 25 }}
          />
          <Text style={styles.buttonTextView}>PDF</Text>
        </TouchableOpacity>
      </View>
      {/* Allow the user to start again if they feel an error has been made along the process. */}
      <TouchableOpacity
        style={styles.bottomButtonView}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('MakePrediction');
        }}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>
          SCAN A NEW VEHICLE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
  },
  middleView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 25,
  },
  anotherView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  anotherView2: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#656565',
  },
  someView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  someOtherView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonViewOne: {
    flex: 1,
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 25,
  },
  textView: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#656565',
  },
  buttonViewMain: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(58, 136, 233, 0.2)',
  },
  buttonTextView: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#656565',
  },
  bottomButtonView: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A88E9',
    borderRadius: 10,
  },
});
