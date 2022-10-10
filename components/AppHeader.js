/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const AppHeader = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          source={require('../public/icons/return2.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: '#fff',
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default AppHeader;
