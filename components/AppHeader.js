/* eslint-disable prettier/prettier */
import React from 'react';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppHeader = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content color="#FF8A7A" title="Scan ME" />
    <Appbar.Action icon="menu" onPress={() => {}} />
  </Appbar.Header>
);

export default AppHeader;
