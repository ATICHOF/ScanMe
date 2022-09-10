/* eslint-disable prettier/prettier */
import React from 'react';
import {AppBar, IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppHeader = () => (
  <AppBar
    color="#FF8A7A"
    title="SCAN ME"
    centerTitle={true}
    style={{height: 72, justifyContent: 'center'}}
    trailing={
      <IconButton variant="outline" icon={<Icon name="close" size={40} />} />
    }
    leading={
      <IconButton icon={<Icon name="menu" size={40} />} variant="outline" />
    }
  />
);

export default AppHeader;
