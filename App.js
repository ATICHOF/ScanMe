import React from 'react';
import Text2Qr from './containers/Text2Qr';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './containers/MainScreen';
import TextRegognizer from './containers/TextRecognizer';
import Wifi2Qr from './containers/Wifi2Qr';
import QrScanner from './containers/QrScanner';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Text" component={Text2Qr} />
      <Stack.Screen name="TextR" component={TextRegognizer} />
      <Stack.Screen name="Wifi" component={Wifi2Qr} />
      <Stack.Screen name="Qr" component={QrScanner} />
    </Stack.Navigator>
  );
};

export default App;
