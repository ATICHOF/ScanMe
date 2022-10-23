/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Picker} from '@react-native-picker/picker';
import {Button, Checkbox, Text, TextInput} from 'react-native-paper';
import RNFS from 'react-native-fs';
import CameraRoll from '@react-native-community/cameraroll';
import LinearGradient from 'react-native-linear-gradient';
const Wifi2Qr = ({navigation}) => {
  const [isHidden, setisHidden] = useState(false);
  const [ssid, setssid] = useState('');
  const [password, setpassword] = useState('');
  const [hidepassword, sethidepassword] = useState(true);
  const [hidden, sethidden] = useState(false);
  const [securitytype, setsecuritytype] = useState('');
  const [svg, setsvg] = useState();

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }
  async function saveQrToDisk() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    svg.toDataURL(data => {
      RNFS.writeFile(
        RNFS.CachesDirectoryPath + '/' + ssid + '.png',
        data,
        'base64',
      ).then(success => {
        return CameraRoll.save(
          RNFS.CachesDirectoryPath + '/' + ssid + '.png',
          'photo',
        ).then(() => {
          ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT);
        });
      });
    });
  }

  return (
    <View>
      <LinearGradient
        useAngle={true}
        angle={168}
        colors={['#223b5d', '#355887']}>
        <ScrollView style={styles.container}>
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
          <Text style={styles.text1}>Generate QR Code</Text>
          <Text style={styles.text2}>For your Wi-Fi</Text>
          <TextInput
            underlineColor="#355887"
            activeUnderlineColor="white"
            placeholderTextColor={'white'}
            theme={{colors: {text: 'white', placeholder: 'white'}}}
            style={styles.TextInput}
            placeholder="Enter Your Wi-Fi SSID"
            label="Wi-Fi Name"
            mode="flat"
            onChangeText={val => {
              setssid(val);
              setisHidden(false);
            }}
          />
          <TextInput
            theme={{colors: {text: 'white', placeholder: 'white'}}}
            underlineColor="#355887"
            activeUnderlineColor="white"
            placeholderTextColor="white"
            style={styles.TextInput}
            placeholder="Enter Your Wi-Fi Password"
            label="Password"
            mode="flat"
            secureTextEntry={hidepassword}
            onChangeText={val => {
              setpassword(val);
              setisHidden(false);
            }}
            right={
              hidepassword ? (
                <TextInput.Icon
                  icon="eye"
                  color="white"
                  onPress={() => {
                    sethidepassword(false);
                  }}
                />
              ) : (
                <TextInput.Icon
                  icon="eye-off"
                  color="white"
                  onPress={() => {
                    sethidepassword(true);
                  }}
                />
              )
            }
          />
          <Text style={styles.text3}>Security Type :</Text>
          <Picker
            style={styles.Picker}
            selectedValue={securitytype}
            onValueChange={si => setsecuritytype(si)}>
            <Picker.Item label="None" value={''} />
            <Picker.Item label="WEP" value={'WEP'} />
            <Picker.Item label="WPA" value={'WPA'} />
            <Picker.Item label="WPA2" value={'WPA2'} />
          </Picker>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Checkbox
              color="white"
              uncheckedColor="white"
              status={hidden ? 'checked' : 'unchecked'}
              onPress={() => {
                sethidden(!hidden);
              }}
            />
            <Text style={styles.text4}>Wi-Fi Hidden</Text>
          </View>
          <Button
            theme={{
              colors: {
                primary: '#223B5D',
              },
              fonts: {
                medium: {fontWeight: '700', fontSize: 16, letterSpacing: 1.6},
              },
            }}
            style={styles.button}
            onPress={() => setisHidden(true)}>
            SUBMMIT
          </Button>
          {isHidden && ssid !== '' && password !== '' ? (
            <View style={styles.qr}>
              <QRCode
                value={
                  'WIFI:S:' +
                  ssid +
                  ';T:' +
                  securitytype +
                  ';P:' +
                  password +
                  ';H:' +
                  hidden +
                  ';;'
                }
                size={300}
                getRef={ref => setsvg(ref)}
              />
              <Button
                style={styles.button}
                theme={{
                  colors: {
                    primary: '#223B5D',
                  },
                  fonts: {
                    medium: {
                      fontWeight: '700',
                      fontSize: 16,
                      letterSpacing: 1.6,
                    },
                  },
                }}
                onPress={e => saveQrToDisk()}>
                Download
              </Button>
            </View>
          ) : null}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
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
    margin: 8,
    backgroundColor: 'white',
    height: 48,
    width: 268,
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 32,
    justifyContent: 'center',
  },
  qr: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#5175A752',
    fontSize: 16,
    fontWeight: '700',
  },
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
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
    marginLeft: 26,
    marginTop: 8,
  },
  text4: {
    color: '#F1F5F6',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter',
    fontStyle: 'normal',
  },
  Picker: {
    backgroundColor: '#5175A752',
    margin: 16,
    height: 64,
    color: 'white',
  },
});

export default Wifi2Qr;
