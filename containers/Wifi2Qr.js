/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import QRCode from 'react-native-qrcode-svg';
import {Picker} from '@react-native-picker/picker';
import {Button, Checkbox, Text, TextInput} from 'react-native-paper';
import RNFS from 'react-native-fs';
import CameraRoll from '@react-native-community/cameraroll';
const Wifi2Qr = () => {
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
    <ScrollView>
      <AppHeader />
      <SafeAreaView style={styles.container}>
        <TextInput
          style={{margin: 16}}
          placeholder="Enter Your Wi-Fi SSID"
          label="Wi-Fi Name"
          mode="outlined"
          onChangeText={val => {
            setssid(val);
            setisHidden(false);
          }}
        />
        <TextInput
          style={{margin: 16}}
          placeholder="Enter Your Wi-Fi Password"
          label="Password"
          mode="outlined"
          secureTextEntry={hidepassword}
          onChangeText={val => {
            setpassword(val);
            setisHidden(false);
          }}
          right={
            hidepassword ? (
              <TextInput.Icon
                icon="eye"
                onPress={() => {
                  sethidepassword(false);
                }}
              />
            ) : (
              <TextInput.Icon
                icon="eye-off"
                onPress={() => {
                  sethidepassword(true);
                }}
              />
            )
          }
        />
        <Text>Security Type :</Text>
        <Picker
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
          <Text>Wi-Fi Hidden :</Text>
          <Checkbox
            status={hidden ? 'checked' : 'unchecked'}
            onPress={() => {
              sethidden(!hidden);
            }}
          />
        </View>
        <Button style={styles.button} onPress={() => setisHidden(true)}>
          SUBMMIT
        </Button>
        {isHidden && ssid !== '' && password !== '' && securitytype !== '' ? (
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
            <Button style={styles.button} onPress={e => saveQrToDisk()}>
              Download
            </Button>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    display: 'flex',
    flex: 1,
    margin: 8,
  },
  qr: {
    display: 'flex',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Wifi2Qr;
