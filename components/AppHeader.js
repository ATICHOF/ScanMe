import React from 'react';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppHeader = () => (
  <AppBar
    color="#FF8A7A"
    title="Scan Me"
    centerTitle={true}
    style={{height: 72, justifyContent: 'center'}}
    trailing={
      <Icon.Button
        name="close"
        iconStyle={{marginRight: 1}}
        backgroundColor="#A34639"
        size={30}
        borderRadius={0}
      />
    }
    leading={
      <Icon.Button
        name="menu"
        iconStyle={{marginRight: 1}}
        backgroundColor="#A34639"
        size={30}
        borderRadius={0}
      />
    }
  />
);

export default AppHeader;
