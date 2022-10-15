/* eslint-disable prettier/prettier */
'use strict';
import * as React from 'react';
import {Component} from 'react';

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class QrScanner extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../public/logo/scan2.png')}
            style={styles.logo}
          />
          <TouchableOpacity>
            <Image
              source={require('../public/icons/menu2.png')}
              style={styles.menu}
            />
          </TouchableOpacity>
        </View>
        <QRCodeScanner
          cameraContainerStyle={styles.camera}
          onRead={this.onSuccess}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 4,
    marginLeft: '40%',
  },
  menu: {
    width: 40,
    height: 40,
    margin: 24,
  },
  text: {
    marginTop: 8,
    fontSize: 22,
    fontFamily: 'Inter',
    color: '#223B5D',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 27,
  },
  camera: {
    display: 'flex',
    width: '100%',
  },
});

export default QrScanner;
