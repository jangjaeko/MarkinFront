import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import boy from '../../../images/boy.png';
import girl from '../../../images/girl.png';
import Icons from '../../Icons/Icons';

export default function AgeChoose(props) {
  return (
    <View style={styles.allView}>
      <TouchableOpacity
        style={{zIndex: 10, marginLeft: '7%'}}
        onPress={() => props.navigation.goBack()}>
        <Icons.Entypo
          name="chevron-thin-left"
          size={20}
          color="black"
          style={{left: -5, top: 10}}
        />
      </TouchableOpacity>
      <View style={{marginTop: 40, marginLeft: '5%'}}>
        <Text style={styles.TitleLetter}>성별, 연령대를 {'\n'}알려주세요</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: '15%',
          width: '70%',
          marginTop: 50,
        }}>
        <TouchableOpacity style={{alignItems: 'center', width: '40%'}}>
          <Image source={boy} style={{width: 90, height: 90}} />
          <Text
            style={{
              marginTop: 15,
              fontFamily: 'NotoSansKR-Medium',
              fontSize: 16,
            }}>
            남성
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', width: '40%', marginLeft: '20%'}}>
          <Image source={girl} style={{width: 90, height: 90}} />
          <Text
            style={{
              marginTop: 15,
              fontFamily: 'NotoSansKR-Medium',
              fontSize: 16,
            }}>
            여성
          </Text>
        </TouchableOpacity>
      </View>
      {/* button */}
      <View style={{width: '90%', marginTop: 30, marginLeft: '5%'}}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity style={[styles.catBut, {left: 30}]}>
            <Text style={styles.catText}>19세 이하</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.catBut, {right: 30, position: 'absolute'}]}>
            <Text style={styles.catText}>20-24세</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity style={[styles.catBut, {left: 30}]}>
            <Text style={styles.catText}>25-29세</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.catBut, {right: 30, position: 'absolute'}]}>
            <Text style={styles.catText}>30-34세</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity style={[styles.catBut, {left: 30}]}>
            <Text style={styles.catText}>35세-39세</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.catBut, {right: 30, position: 'absolute'}]}>
            <Text style={styles.catText}>40세-44세</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity style={[styles.catBut, {left: 30}]}>
            <Text style={styles.catText}>45세-49세</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.catBut, {right: 30, position: 'absolute'}]}>
            <Text style={styles.catText}>50세 이상</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnDesign}
          onPress={() => props.navigation.navigate('AgeChoose')}>
          <Text style={styles.btnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TopText: {fontSize: 24, fontFamily: 'Roboto-Bold', letterSpacing: 3},
  TitleLetter: {fontFamily: 'Roboto-Bold', fontSize: 28},
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  catBut: {
    backgroundColor: '#F5F5F5',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 45,
  },
  catText: {
    color: '#00000080',
    fontFamily: 'Roboto-Medium',
  },
  btnDesign: {
    backgroundColor: 'black',
    width: '90%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    top: 50,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
});
