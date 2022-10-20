/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Picker} from '@react-native-picker/picker';
import {Button} from 'react-native-paper';
import RNFS from 'react-native-fs';
import CameraRoll from '@react-native-community/cameraroll';
const Text2Qr = ({navigation}) => {
  const [isHidden, setisHidden] = useState(false);
  const [textvalue, settextvalue] = useState('');
  const [size, setsize] = useState(100);
  const [color, setcolor] = useState('#000');
  const [bcolor, setbcolor] = useState('#FFF');
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
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../public/icons/return2.png')}
              style={styles.back}
            />
          </TouchableOpacity>
          <Image
            source={require('../public/logo/scan2.png')}
            style={styles.logo}
          />
          <TouchableOpacity>
            <Image
              source={require('../public/icons/menu2.png')}
              style={styles.menu}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>Generate QR Code</Text>
        <Text style={styles.text2}>From your Text</Text>
        <Text style={styles.input}>Input</Text>
        <TextInput
          multiline={true}
          style={styles.TextInput}
          placeholder="Enter Your Text Here"
          onChangeText={val => {
            settextvalue(val);
            setisHidden(false);
          }}
        />
        <Text style={styles.input}>Choose size</Text>
        <Picker
          style={styles.Picker}
          selectedValue={size}
          onValueChange={si => setsize(si)}>
          <Picker.Item label="100" value={100} />
          <Picker.Item label="200" value={200} />
          <Picker.Item label="300" value={300} />
          <Picker.Item label="400" value={400} />
          <Picker.Item label="500" value={500} />
          <Picker.Item label="600" value={600} />
        </Picker>
        <Text style={styles.input}>Choose color</Text>
        <Picker
          style={styles.Picker}
          selectedValue={color}
          onValueChange={col => setcolor(col)}>
          <Picker.Item label="White" value={'#FFF'} />
          <Picker.Item label="Silver" value={'#C0C0C0'} />
          <Picker.Item label="Gray" value={'#808080'} />
          <Picker.Item label="Black" value={'#000'} />
          <Picker.Item label="Red" value={'#FF0000'} />
          <Picker.Item label="Maroon" value={'#800000'} />
          <Picker.Item label="Yellow" value={'#FFFF00'} />
          <Picker.Item label="Olive" value={'#808000'} />
          <Picker.Item label="Lime" value={'#00FF00'} />
          <Picker.Item label="Green" value={'#008000'} />
          <Picker.Item label="Aqua" value={'#00FFFF'} />
          <Picker.Item label="Teal" value={'#008080'} />
          <Picker.Item label="Blue" value={'#0000FF'} />
          <Picker.Item label="Navy" value={'#000080'} />
          <Picker.Item label="Fuchsia" value={'#FF00FF'} />
          <Picker.Item label="Purple" value={'#800080'} />
        </Picker>
        <Text style={styles.input}>Choose background Color</Text>
        <Picker
          style={styles.Picker}
          selectedValue={bcolor}
          onValueChange={bcol => setbcolor(bcol)}>
          <Picker.Item label="White" value={'#FFF'} />
          <Picker.Item label="Silver" value={'#C0C0C0'} />
          <Picker.Item label="Gray" value={'#808080'} />
          <Picker.Item label="Black" value={'#000'} />
          <Picker.Item label="Red" value={'#FF0000'} />
          <Picker.Item label="Maroon" value={'#800000'} />
          <Picker.Item label="Yellow" value={'#FFFF00'} />
          <Picker.Item label="Olive" value={'#808000'} />
          <Picker.Item label="Lime" value={'#00FF00'} />
          <Picker.Item label="Green" value={'#008000'} />
          <Picker.Item label="Aqua" value={'#00FFFF'} />
          <Picker.Item label="Teal" value={'#008080'} />
          <Picker.Item label="Blue" value={'#0000FF'} />
          <Picker.Item label="Navy" value={'#000080'} />
          <Picker.Item label="Fuchsia" value={'#FF00FF'} />
          <Picker.Item label="Purple" value={'#800080'} />
        </Picker>
        <Button
          style={styles.button}
          theme={{
            colors: {
              primary: 'white',
            },
            fonts: {
              medium: {
                fontWeight: '700',
                fontSize: 16,
                letterSpacing: 1.6,
              },
            },
          }}
          onPress={() => setisHidden(true)}>
          SUBMMIT
        </Button>
        {isHidden && textvalue !== '' ? (
          <View style={styles.qr}>
            <QRCode
              value={textvalue}
              size={size}
              getRef={ref => setsvg(ref)}
              color={color}
              backgroundColor={bcolor}
            />
            <Button
              style={styles.button}
              theme={{
                colors: {
                  primary: 'white',
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#F1F5F6',
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
    backgroundColor: '#223B5D',

    height: 48,
    width: 268,
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 32,
    justifyContent: 'center',
  },
  qr: {
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {fontSize: 16, color: '#223B5D', fontWeight: '700', marginLeft: 22},
  TextInput: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#DDDDDD',
    fontSize: 16,
    fontWeight: '700',
    color: '#223B5D',
    padding: 12,
    height: 160,
  },
  text1: {
    fontSize: 24,
    color: '#223B5D',
    fontWeight: '700',
    lineHeight: 29,
    marginLeft: 32,
    marginTop: 64,
  },
  text2: {
    fontSize: 16,
    color: '#223B5D',
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
    backgroundColor: '#DDDDDD',
    margin: 16,
    height: 64,
    color: '#223B5D',
  },
});

export default Text2Qr;
