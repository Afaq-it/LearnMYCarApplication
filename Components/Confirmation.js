/* This component manages the confirmation view page the user sees when a prediction is made. The user can choose whether or not their vehicle prediction is correct. If no is pressed then a modal pop-up is displayed to give the user further options on whether they would like to upload their taken image to improve the application model. */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  View,
  Text,
} from 'react-native';

class Confirmation extends Component {
  state = {
    isModalVisible: false,
    currentChoice: false,
  };
  /* Manages the model view. */
  setisModalVisible(visible) {
    this.setState({ isModalVisible: visible });
  }
  /* Manages the logic to decide which page the parameters user will need on the next screen. */
  setCurrentState(predictionString) {
    if (predictionString === 'Ford' || predictionString === 'Volkswagen') {
      null;
    } else {
      this.setState({ currentChoice: true === true });
    }
  }

  render() {
    const predictionString = this.props.prediction;
    const imageUrl = this.props.imageUrl;
    const navigation = this.props.navig;
    return (
      <View style={styles.mainView}>
        {/* MODAL START */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={() => {
            this.setisModalVisible(!this.state.isModalVisible);
          }}>
          <View style={styles.modalOuterView}>
            <View style={styles.modalOuterView2} />
            <View style={styles.modalMainView}>
              <View style={styles.modalTopSectionView}>
                <Text style={styles.textStyle}>
                  Would you like to help improve the app by sharing the image
                  you have taken?
                </Text>
              </View>
              <View style={styles.modalBottomSectionView}>
                <View style={styles.modalButtonViewStyles}>
                  <TouchableOpacity
                    style={styles.noButtonStyle}
                    activeOpacity={0.5}
                    onPress={() => {
                      this.setisModalVisible(!this.state.isModalVisible);
                      navigation.navigate('SorryPage', { didUpload: false });
                    }}>
                    <Image
                      source={require('assets/no-icon-black.png')}
                      style={styles.imageStyles}
                    />
                    <View style={{ width: 10 }} />
                    <Text style={styles.buttonTextStyle}>No</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: 20 }} />
                <View style={styles.modalButtonViewStyles}>
                  {/* Navigation to the user choice page which will allow the user to select their correct vehicle and upload the image to the Azure Portal. CurrentChoice tells the next screen whether the vehicle make has been predicted or not. */}
                  <TouchableOpacity
                    style={styles.yesButtonStyle}
                    activeOpacity={0.5}
                    onPress={() => {
                      this.setisModalVisible(!this.state.isModalVisible);
                      navigation.navigate('UploadUserChoice', {
                        currentChoice: this.state.currentChoice,
                        vehicleMake: predictionString,
                        imageUrl: imageUrl,
                      });
                    }}>
                    <Image
                      source={require('assets/yes-icon-white.png')}
                      style={styles.imageStyles}
                    />
                    <View style={{ width: 10 }} />
                    <Text style={styles.buttonTextStyleYes}>Yes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* MODAL END */}
        <View style={styles.topSectionView}>
          <Image style={styles.imagePreview} source={{ uri: imageUrl }} />
          <Text style={styles.textStyle}>
            Is your vehicle a {predictionString}?
          </Text>
        </View>
        <View style={styles.bottomSectionView}>
          <View style={styles.buttonViewStyles}>
            <TouchableOpacity
              style={styles.noButtonStyle}
              activeOpacity={0.5}
              onPress={() => {
                this.setisModalVisible(!this.state.isModalVisible);
                this.setCurrentState(predictionString);
              }}>
              <Image
                source={require('assets/no-icon-black.png')}
                style={styles.imageStyles}
              />
              <View style={{ width: 10 }} />
              <Text style={styles.buttonTextStyle}>No</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 20 }} />
          <View style={styles.buttonViewStyles}>
            {/* Logic to determine the destination screen for the user depending on their position on the application. */}
            <TouchableOpacity
              style={styles.yesButtonStyle}
              activeOpacity={0.5}
              onPress={() => {
                let destinationPage =
                  predictionString === 'Ford' ||
                  predictionString === 'Volkswagen'
                    ? 'ModelPrediction'
                    : 'ARPDFOptions';
                if (destinationPage === 'ModelPrediction') {
                  navigation.navigate(destinationPage, {
                    predictionMake: predictionString,
                  });
                } else {
                  navigation.navigate(destinationPage, {
                    predictionMake: predictionString,
                    previousPrediction: this.props.previousPrediction,
                  });
                }
              }}>
              <Image
                source={require('assets/yes-icon-white.png')}
                style={styles.imageStyles}
              />
              <View style={{ width: 10 }} />
              <Text style={styles.buttonTextStyleYes}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            paddingTop: 8,
          }}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('MakePrediction');
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
              }}>
              START AGAIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Confirmation;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#eeeeee',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalOuterView: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalOuterView2: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  backButton: {
    flex: 1,
    height: '100%',
    alignSelf: 'flex-start',
    width: '50%',
    borderRadius: 10,
    backgroundColor: '#3A88E9',
    justifyContent: 'center',
  },
  selectionButtons: {
    height: 10,
    backgroundColor: '#353535',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 50,
  },
  topSectionView: {
    flex: 2,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  imagePreview: { width: '100%', height: 250 },
  textStyle: {
    textAlign: 'center',
    fontSize: 30,
    color: '#656565',
    paddingBottom: 15,
  },
  imageStyles: { width: 45, height: 45, marginLeft: 5 },
  bottomSectionView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  modalTopSectionView: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalBottomSectionView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 45,
  },
  buttonViewStyles: {
    flex: 1,
    flexDirection: 'row',
  },
  modalButtonViewStyles: {
    flex: 1,
    flexDirection: 'row',
  },
  noButtonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#dfdfdf',
    borderRadius: 12.5,
  },
  buttonTextStyle: {
    flex: 1,
    alignContent: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonTextStyleYes: {
    flex: 1,
    alignContent: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
  yesButtonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#3A88E9',
    borderRadius: 12.5,
  },
});
