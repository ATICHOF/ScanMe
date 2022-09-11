/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import AppHeader from '../components/AppHeader';

const HomeScreen = () => {
  return (
    <View style={{height: '100%'}}>
      <AppHeader />
      <View style={styles.container}>
        <Button title="Scan" style={{margin: 4}} />
        <Button title="Read" style={{margin: 4}} />
        <Button title="Transform" style={{margin: 4}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
export default HomeScreen;
