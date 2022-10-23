/* eslint-disable prettier/prettier */
'use strict';
import React, {useCallback, useState} from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import TextRecognition from 'react-native-text-recognition';
import Svg, {Path} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';

const TextRegognizer = ({navigation}) => {
  const [image, setimage] = useState(null);
  const [result, setresult] = useState('');
  const pickImage = useCallback(async () => {
    launchImageLibrary({}, setimage);
  }, []);
  const analyse = useCallback(async () => {
    if (image) {
      const res = await TextRecognition.recognize(image.assets[0].uri);
      setresult(res);
    }
  }, [image]);
  return (
    <ScrollView>
      <LinearGradient
        useAngle={true}
        angle={168}
        colors={['#223b5d', '#355887']}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../public/icons/return3.png')}
                style={styles.back}
              />
            </TouchableOpacity>
            <Image
              source={require('../public/logo/scan.png')}
              style={styles.logo}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Image
                source={require('../public/icons/menu3.png')}
                style={styles.menu}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>Text Recognizer</Text>
          <Text style={styles.text2}>
            Pick an image{'\n'}that containe text from your device
          </Text>
          <TouchableOpacity
            onPress={() => {
              pickImage();
            }}
            style={styles.button}>
            <Text style={styles.text3}>Pick Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (image) {
                analyse();
              }
            }}
            style={styles.button}>
            <Text style={styles.text3}>Analyse</Text>
          </TouchableOpacity>
          <Text style={styles.text4}>Result</Text>
          <TextInput
            multiline={true}
            value={result}
            onChange={txt => setresult(txt)}
            style={styles.TextInput}
          />
          <View style={styles.footer}>
            <TouchableOpacity>
              <Svg
                width={36}
                height={36}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M2 26v4a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-4m-8-8-8 8m0 0-8-8m8 8V2"
                  stroke="#F1F5F6"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text style={styles.txt}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Svg
                width={33}
                height={35}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M9.442 16.199a3.487 3.487 0 0 0-1.679-1.503 3.522 3.522 0 0 0-2.255-.17 3.498 3.498 0 0 0-1.887 1.235 3.45 3.45 0 0 0 0 4.245 3.498 3.498 0 0 0 1.887 1.235c.75.193 1.543.133 2.255-.17a3.486 3.486 0 0 0 1.679-1.503m0-3.37c.28.5.44 1.074.44 1.686a3.43 3.43 0 0 1-.44 1.684m0-3.37 14.863-8.19M9.442 19.568l14.863 8.191m0-19.751a3.475 3.475 0 0 0 2.096 1.699 3.523 3.523 0 0 0 2.69-.294 3.488 3.488 0 0 0 1.673-2.11 3.44 3.44 0 0 0-.347-2.663 3.493 3.493 0 0 0-2.095-1.602 3.521 3.521 0 0 0-2.627.312 3.474 3.474 0 0 0-1.654 2.047 3.444 3.444 0 0 0 .264 2.61Zm0 19.751a3.45 3.45 0 0 0 1.36 4.718 3.516 3.516 0 0 0 4.755-1.348c.45-.805.56-1.753.305-2.638a3.475 3.475 0 0 0-1.664-2.08 3.522 3.522 0 0 0-2.66-.303 3.493 3.493 0 0 0-2.096 1.651Z"
                  stroke="#F1F5F6"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text style={styles.txt}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 64,
    height: 64,
    marginTop: 4,
  },
  menu: {
    width: 40,
    height: 40,
    margin: 24,
  },
  back: {
    width: 32,
    height: 32,
    margin: 24,
  },
  button: {
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 312,
    borderRadius: 8,
    margin: 16,
  },
  txt: {color: 'white', fontWeight: '700', alignSelf: 'center', marginTop: 4},
  text1: {
    fontSize: 24,
    color: '#F1F5F6',
    fontWeight: '700',
    lineHeight: 29,
    marginLeft: 32,
    marginTop: 64,
  },
  text2: {
    fontSize: 16,
    color: '#F1F5F6',
    fontWeight: '700',
    lineHeight: 19,
    marginLeft: 32,
    marginBottom: 32,
    marginTop: 8,
  },
  text3: {
    fontSize: 16,
    color: '#223B5D',
    fontWeight: '700',
  },
  text4: {fontSize: 14, color: 'white', fontWeight: '700', marginLeft: 42},
  TextInput: {
    backgroundColor: 'white',
    color: '#223B5D',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    borderRadius: 8,
    margin: 16,
    padding: 12,
    height: 160,
    width: 312,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 180,
    alignSelf: 'center',
    margin: 16,
  },
});

AppRegistry.registerComponent('App', () => TextRegognizer);
export default TextRegognizer;
