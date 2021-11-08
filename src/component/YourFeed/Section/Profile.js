import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ProfileImage from '../../../images/Profile.png';
import instaLogo from '../../../icons/instaLogo.png';
import Knock from '../../../icons/knock.png';
export default function Profile() {
  return (
    <View style={{marginBottom: 50}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={ProfileImage}
          style={{width: 100, height: 100, borderRadius: 100 / 2}}
        />
        <View style={{marginLeft: 30, marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={instaLogo} style={{width: 20, height: 20}} />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 20,
                marginTop: -3,
              }}>
              seeun_lynn
            </Text>
          </View>
          <Text style={{marginTop: 10, fontSize: 15}}>
            뷰티·패션 인플루언서입니다.
          </Text>
          <Text style={{fontWeight: 'bold', marginTop: 20}}>
            팔로워 56.8만 프렌즈 36
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <TouchableOpacity style={styles.KnockBut}>
          <Image source={Knock} style={{width: 30, height: 30, opacity: 0.5}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Freinding}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            프렌징
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Message}>
          <Text style={{textAlign: 'center', opacity: 0.5}}>메세지</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  KnockBut: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EBEBEC',
    width: 50,
    height: 50,
    marginTop: -10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
  Freinding: {
    backgroundColor: '#FD780F',
    width: 130,
    height: 50,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -10,
    marginLeft: 20,
  },
  Message: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EBEBEC',
    width: 130,
    height: 50,
    marginTop: -10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    opacity: 0.5,
  },
});
