import React from 'react';
import Text2Qr from './containers/Text2Qr';
import MainScreen from './containers/MainScreen';
import TextRegognizer from './containers/TextRecognizer';
import Wifi2Qr from './containers/Wifi2Qr';
import QrScanner from './containers/QrScanner';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from './containers/About';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="QrScanner" component={QrScanner} />
      <Drawer.Screen name="Text ⇄ Qr" component={Text2Qr} />
      <Drawer.Screen name="Wifi ⇄ Qr" component={Wifi2Qr} />
      <Drawer.Screen name="Text Regognizer" component={TextRegognizer} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default App;
