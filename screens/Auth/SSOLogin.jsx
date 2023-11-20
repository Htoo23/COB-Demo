import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
const SSOLoginScreen = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/yoma.png')} style={styles.image} />
      <Text style={styles.boldText}>Centralized Onboarding</Text>
      <Text style={styles.redText}>Login With</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleButtonClick}>
          <Image source={require('../../assets/yoma.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Image source={require('../../assets/wave.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/smile.png')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
      {
        buttonClicked ? (
          <View>
            <Text>Button Clicked!</Text>
          </View>
        ) : (
          <Image source={require('../../assets/watermark.png')} style={styles.watermark} />

        )
      }

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  watermark: {
    position: 'absolute',
    top: 10,
    left: 10,
    opacity: 0.2,
  },
  image: {
    width: 80,
    height: 100,

  },
  boldText: {
    marginTop: '5%',
    fontWeight: 'bold',
  },
  redText: {
    color: 'red',
    marginTop: '5%',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: '10%'
  },
  circleButton: {
    top: 50,
    width: 60,
    height: 70,
    borderRadius: 50,
    // backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonImage: {
    width: 50,
    marginLeft: 20,
    height: 60,
    padding: 10,
    borderRadius:70,
  },

});
export default SSOLoginScreen;
