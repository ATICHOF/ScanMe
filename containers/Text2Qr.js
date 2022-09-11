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
import {Button, TextInput} from 'react-native-paper';
import RNFS from 'react-native-fs';
import CameraRoll from '@react-native-community/cameraroll';
const Text2Qr = () => {
  const [isHidden, setisHidden] = useState(false);
  const [textvalue, settextvalue] = useState('');
  const [size, setsize] = useState(100);
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
        RNFS.CachesDirectoryPath + '/some-name.png',
        data,
        'base64',
      ).then(success => {
        return CameraRoll.save(
          RNFS.CachesDirectoryPath + '/some-name.png',
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
          placeholder="Enter Your Text Here"
          label="Input"
          mode="outlined"
          onChangeText={val => {
            settextvalue(val);
            setisHidden(false);
          }}
        />
        <Picker selectedValue={size} onValueChange={si => setsize(si)}>
          <Picker.Item label="100" value={100} />
          <Picker.Item label="200" value={200} />
          <Picker.Item label="300" value={300} />
          <Picker.Item label="400" value={400} />
          <Picker.Item label="500" value={500} />
          <Picker.Item label="600" value={600} />
        </Picker>
        <Button style={styles.button} onPress={() => setisHidden(true)}>
          SUBMMIT
        </Button>
        {isHidden && textvalue !== '' ? (
          <View style={styles.qr}>
            <QRCode value={textvalue} size={size} getRef={ref => setsvg(ref)} />
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

export default Text2Qr;
