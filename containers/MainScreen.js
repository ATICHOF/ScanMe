/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppHeader from '../components/AppHeader';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <AppHeader />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#223B5D',
    width: '100%',
    height: '100%',
  },
  top: {
    backgroundColor: '#F1F5F6',
    width: '100%',
    height: '32%',
  },
});

export default MainScreen;
