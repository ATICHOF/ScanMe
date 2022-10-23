import React from 'react';
import Text2Qr from './containers/Text2Qr';
import MainScreen from './containers/MainScreen';
import TextRegognizer from './containers/TextRecognizer';
import Wifi2Qr from './containers/Wifi2Qr';
import QrScanner from './containers/QrScanner';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="Text" component={Text2Qr} />
      <Drawer.Screen name="TextR" component={TextRegognizer} />
      <Drawer.Screen name="Wifi" component={Wifi2Qr} />
      <Drawer.Screen name="Qr" component={QrScanner} />
    </Drawer.Navigator>
  );
};

export default App;
