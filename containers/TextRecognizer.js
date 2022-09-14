/* eslint-disable prettier/prettier */
'use strict';
import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import TextRecognition from 'react-native-text-recognition';

const TextRegognizer = () => {
  const [camera, setcamera] = useState(null);
  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          setcamera(ref);
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            takePicture(camera);
          }}
          style={styles.capture}>
          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
            SNAP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const takePicture = async camera => {
  if (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    const result = await TextRecognition.recognize(data.uri);
    console.log(result);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

AppRegistry.registerComponent('App', () => TextRegognizer);
export default TextRegognizer;
