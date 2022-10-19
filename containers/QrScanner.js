/* eslint-disable prettier/prettier */
'use strict';
import * as React from 'react';
import {Component} from 'react';

import {View, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';

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
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Image
              source={require('../public/icons/return2.png')}
              style={styles.back}
            />
          </TouchableOpacity>
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
          cameraProps={{ratio: '1:1'}}
          showMarker={true}
          customMarker={
            <View>
              <Image
                source={require('../public/icons/cadre.png')}
                style={styles.cadre}
              />
            </View>
          }
          cameraContainerStyle={styles.camera}
          cameraStyle={styles.cameraStyle}
          onRead={this.onSuccess}
          fadeIn={true}
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
    alignItems: 'center',
  },
  logo: {
    width: 64,
    height: 64,
    marginTop: 4,
  },
  menu: {
    width: 40,
    height: 40,
    margin: 24,
  },
  back: {width: 30, height: 30, margin: 24},
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraStyle: {
    width: '100%',
    height: 666,
  },
  cadre: {
    width: 294,
    height: 312,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
export default QrScanner;
