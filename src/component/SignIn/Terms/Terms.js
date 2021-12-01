import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function Terms(props) {
  const [isSelected, setisSelected] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: '15%'}}>
      <View style={{position: 'absolute', width: '90%', left: '5%', top: 150}}>
        <Text style={styles.TopText}>마킨에 오신걸 환영합니다 :)</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.TopText, {color: '#FD780F'}]}>이용약관</Text>
          <Text style={styles.TopText}>에 동의해주세요</Text>
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.btnDes}>
          <BouncyCheckbox
            size={30}
            fillColor="black"
            unfillColor="#E5E5E5"
            iconStyle={{borderColor: '#E5E5E5'}}
            onPress={() => setisSelected(!isSelected)}
            style={{paddingBottom: 10}}
          />
          <Text style={styles.innerText}>전체동의</Text>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 30, marginTop: 20}}>
          <BouncyCheckbox
            size={30}
            fillColor="black"
            unfillColor="#E5E5E5"
            iconStyle={{borderColor: '#E5E5E5'}}
            onPress={() => setisSelected(!isSelected)}
            style={{paddingBottom: 10}}
          />
          <Text style={styles.innerText}>서비스 이용약관(필수)</Text>
        </View>
        <View style={styles.TermsLet}></View>
      </View>

      <TouchableOpacity
        style={styles.btnDesign}
        onPress={() => props.navigation.navigate('PhonNum')}>
        <Text style={styles.btnText}>다음으로</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  TopText: {fontSize: 24, fontFamily: 'Roboto-Bold', letterSpacing: 3},
  btnDes: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 8,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  TermsLet: {
    backgroundColor: 'white',
    height: 100,
    borderRadius: 8,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  innerText: {
    paddingTop: 3,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
  },
  btnView: {
    position: 'absolute',
    top: 300,
    marginLeft: '5%',
    width: '90%',
  },
  btnDesign: {
    backgroundColor: '#FD780F',
    width: '90%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    left: '5%',
    top: 750,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
});
