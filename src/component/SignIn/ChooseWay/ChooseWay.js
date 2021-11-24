import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
export default function ChooseWay() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{position: 'absolute', top: 300, marginLeft: '5%'}}>
        <Text>MARKIN의</Text>
        <Text>특별한 관리를 받으세요</Text>
        <Text>당신의 특별한 하루를 마킨과 함께하세요</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={[{backgroundColor: 'black'}, styles.btnDesign]}>
          <Icon name="instagram" size={30} color="white" />
          <Text style={[styles.btnText, {color: 'white'}]}>
            인스타그램으로 로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {backgroundColor: '#FF4B4B', marginTop: 10},
            styles.btnDesign,
          ]}>
          <Icon name="google" size={30} color="white" />
          <Text style={[styles.btnText, {color: 'white'}]}>구글로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{backgroundColor: 'white', marginTop: 10}, styles.btnDesign]}>
          <Icon name="mail" size={30} color="black" />
          <Text style={[styles.btnText, {color: 'black'}]}>
            이메일로 로그인
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 760,
          justifyContent: 'center',
          width: '90%',
          flexDirection: 'row',
          marginLeft: '5%',
        }}>
        <Text>이미 계정이 있다면?</Text>
        <TouchableOpacity>
          <Text style={{textDecorationLine: 'underline', marginLeft: 10}}>
            로그인하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnView: {
    position: 'absolute',
    top: 550,
    marginLeft: '5%',
    width: '90%',
  },
  btnDesign: {
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  btnText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 2.5,
  },
});
