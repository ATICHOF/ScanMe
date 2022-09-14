import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TextRecognizer from './containers/TextRecognizer';
const App = () => {
  return (
    <NavigationContainer>
      <TextRecognizer />
    </NavigationContainer>
  );
};

export default App;
