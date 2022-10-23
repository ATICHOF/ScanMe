/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Image
            source={require('../public/logo/scan2.png')}
            style={styles.logo}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image
              source={require('../public/icons/menu2.png')}
              style={styles.menu}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <TouchableOpacity>
            <Svg
              width={96}
              height={96}
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M71.928 74.9A29.953 29.953 0 0 0 48 63a29.953 29.953 0 0 0-23.928 11.9m0 0a36 36 0 1 1 47.852 0A35.864 35.864 0 0 1 48 84a35.863 35.863 0 0 1-23.928-9.1ZM60 39a12 12 0 1 1-24 0 12 12 0 0 1 24 0Z"
                stroke="#223B5D"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.text}>Welcome To Scan Me</Text>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.cat}>CATEGORIES</Text>
        <Text style={styles.start}>
          start a new exprerience by choosing your option {'\n'} Enjoy!
        </Text>
        <View style={styles.option}>
          <View style={styles.row1}>
            <TouchableOpacity
              style={styles.qr}
              onPress={() => {
                navigation.navigate('QrScanner');
              }}>
              <Image
                style={styles.img}
                source={require('../public/menuicons/qr1.png')}
              />
              <Text style={styles.txt}>SCAN QR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.qr}
              onPress={() => {
                navigation.navigate('Wifi ⇄ Qr');
              }}>
              <Image
                style={styles.img}
                source={require('../public/menuicons/wifi2.png')}
              />
              <Text style={styles.txt}>WIFI ⇄ QR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row2}>
            <TouchableOpacity
              style={styles.qr}
              onPress={() => {
                navigation.navigate('Text ⇄ Qr');
              }}>
              <Image
                style={styles.img}
                source={require('../public/menuicons/text3.png')}
              />
              <Text style={styles.txt}>TEXT ⇄ QR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.qr}
              onPress={() => {
                navigation.navigate('Text Regognizer');
              }}>
              <Image
                style={styles.img}
                source={require('../public/menuicons/img1.png')}
              />
              <Text style={styles.txt}>TEXT DETECTOR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#223B5D',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  profile: {alignItems: 'center'},
  text: {fontSize: 22, fontWeight: '700', color: '#223B5D'},
  top: {
    backgroundColor: '#F1F5F6',
    width: '100%',
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 4,
    marginLeft: '40%',
  },
  menu: {
    width: 40,
    height: 40,
    margin: 24,
  },
  main: {
    flex: 2,
  },
  cat: {
    marginTop: 32,
    fontSize: 19,
    fontFamily: 'Inter',
    color: '#F1F5F6',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 23,
    alignSelf: 'center',
  },
  start: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#F1F5F6',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  option: {
    alignSelf: 'center',
    marginTop: 24,
    display: 'flex',
  },
  row1: {
    flexDirection: 'row',
  },
  row2: {
    flexDirection: 'row',
  },
  qr: {
    width: 128,
    height: 128,
    borderColor: '#E26035',
    borderStyle: 'solid',
    borderWidth: 4,
    borderRadius: 32,
    backgroundColor: '#F1F5F6',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 56,
    height: 56,
    marginTop: 4,
  },
  txt: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 15,
    color: '#223B5D',
    marginTop: 4,
  },
});

export default MainScreen;
