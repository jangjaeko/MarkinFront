import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ProfileImage from '../../../images/Profile.png';
import instaLogo from '../../../icons/instaLogo.png';
import Knock from '../../../icons/knock.png';
import fist1 from '../../../icons/fist1.png';
import fist2 from '../../../icons/fist2.png';
import fist3 from '../../../icons/fist3.png';
import fist4 from '../../../icons/fist4.png';
import fist5 from '../../../icons/fist5.png';

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
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 20, fontSize: 16, opacity: 0.7}}>
              팔로워
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 19,
                marginLeft: 13,
                fontSize: 16,
              }}>
              56.8만
            </Text>
            <Text
              style={{
                marginTop: 20,
                marginLeft: 20,
                fontSize: 16,
                opacity: 0.7,
              }}>
              프렌즈
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 19,
                marginLeft: 13,
                fontSize: 16,
              }}>
              36
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <TouchableOpacity style={styles.KnockBut}>
          <Image source={fist5} style={{width: 25, height: 25}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Freinding}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            프렌징
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Message}>
          <Text style={{textAlign: 'center'}}>메세지</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  KnockBut: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    width: 45,
    height: 45,
    marginTop: -10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    opacity: 0.2,
  },
  Freinding: {
    backgroundColor: '#FD780F',
    width: 140,
    height: 45,
    borderRadius: 12,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -10,
    marginLeft: 15,
  },
  Message: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EBEBEC',
    width: 140,
    height: 45,
    marginTop: -10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    opacity: 0.5,
  },
});
