import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import appLogo from '../../../images/appLogo.png';
export default function ChooseWay(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{position: 'absolute', top: 200, marginLeft: '5%'}}>
        <Text
          style={{fontFamily: 'Roboto-Bold', fontSize: 26, letterSpacing: 3}}>
          MARKIN의
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 26,
            marginTop: 8,
            letterSpacing: 2,
          }}>
          특별한 관리를 받으세요!
        </Text>
        <Text
          style={{
            fontFamily: 'NotoSansKR-Regular',
            fontSize: 14,
            color: '#676767',
            marginTop: 8,
            letterSpacing: 2,
          }}>
          당신의 특별한 하루를 마킨과 함께하세요.
        </Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={[
            {justifyContent: 'center', backgroundColor: '#433FFF'},
            styles.btnDesign,
          ]}>
          <Icon
            name="instagram"
            size={30}
            color="white"
            style={{top: 10, left: 32, position: 'absolute'}}
          />
          <Text style={[styles.btnText, {color: 'white'}]}>
            Instagram으로 로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              justifyContent: 'center',
              backgroundColor: '#FF4B4B',
            },
            styles.btnDesign,
          ]}>
          <Icon
            name="google"
            size={30}
            color="white"
            style={{top: 10, left: 32, position: 'absolute'}}
          />
          <Text style={[styles.btnText, {color: 'white'}]}>
            Google로 로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Terms')}
          style={[
            {justifyContent: 'center', backgroundColor: 'black'},
            styles.btnDesign,
          ]}>
          <Image
            source={appLogo}
            style={{
              width: 45,
              height: 45,
              top: 5,
              left: 23,
              position: 'absolute',
            }}
          />
          <Text style={[styles.btnText, {color: 'white'}]}>Apple로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Terms')}
          style={[
            {justifyContent: 'center', backgroundColor: 'white'},
            styles.btnDesign,
          ]}>
          <Icon
            name="mail"
            size={30}
            color="black"
            style={{top: 10, left: 32, position: 'absolute'}}
          />
          <Text style={[styles.btnText, {color: 'black'}]}>Email로 로그인</Text>
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          position: 'absolute',
          top: 760,
          justifyContent: 'center',
          width: '90%',
          flexDirection: 'row',
          marginLeft: '5%',
        }}>
        <Text style={styles.belowText}>이미 계정이 있다면?</Text>
        <TouchableOpacity>
          <Text
            style={[
              {textDecorationLine: 'underline', marginLeft: 10},
              styles.belowText,
            ]}>
            로그인하기
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  btnView: {
    position: 'absolute',
    top: 500,
    marginLeft: '5%',
    width: '90%',
  },
  btnDesign: {
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginTop: 15,
  },
  btnText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 19,
    marginLeft: -10,
  },
  belowText: {
    fontFamily: 'NotoSansKR-Medium',
  },
});
