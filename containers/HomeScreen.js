import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../components/AppHeader';

const HomeScreen = () => {
  return (
    <View style={{height: '100%'}}>
      <AppHeader />
      <View style={styles.container}>
        <Icon.Button>Scan Qr</Icon.Button>
        <Icon.Button>Image to Qr</Icon.Button>
        <Icon.Button>Text to Qr</Icon.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    width: 128,
  },
});
export default HomeScreen;
