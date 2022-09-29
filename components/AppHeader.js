/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
const AppHeader = () => (
  <Appbar.Header style={styles.header}>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content
      icon={({size, color}) => (
        <Image
          source={require('../assets/chameleon.jpg')}
          style={{width: size, height: size, tintColor: color}}
        />
      )}
    />
    <Appbar.Action icon="menu" onPress={() => {}} />
  </Appbar.Header>
);
const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: '#F1F5F6',
  },
  logo: {
    width: 64,
    height: 64,
  },
});

export default AppHeader;
