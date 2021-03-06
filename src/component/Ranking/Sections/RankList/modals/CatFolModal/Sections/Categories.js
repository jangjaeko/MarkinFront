import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Categories() {
  const [Selected, setSelected] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const handleCheck = item => {
    setSelected(items => ({...items, [item]: Selected[item] + 1}));
  };
  return (
    <View style={{marginTop: 120}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            marginLeft: '5%',
          }}
          onPress={() => handleCheck(0)}>
          <View
            style={[
              styles.greyBtn,
              {backgroundColor: Selected[0] % 2 === 0 ? 'white' : '#7553FF'},
            ]}>
            <Text
              style={[
                styles.inText,
                {color: Selected[0] % 2 === 0 ? 'black' : 'white'},
              ]}>
              전체
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => handleCheck(1)}>
          <View
            style={[
              styles.greyBtn,
              {backgroundColor: Selected[1] % 2 === 0 ? 'white' : '#7553FF'},
            ]}>
            <Text
              style={[
                styles.inText,
                {color: Selected[1] % 2 === 0 ? 'black' : 'white'},
              ]}>
              뷰티
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => handleCheck(2)}>
          <View
            style={[
              styles.greyBtn,
              {backgroundColor: Selected[2] % 2 === 0 ? 'white' : '#7553FF'},
            ]}>
            <Text
              style={[
                styles.inText,
                {color: Selected[2] % 2 === 0 ? 'black' : 'white'},
              ]}>
              동물
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => handleCheck(3)}>
          <View
            style={[
              styles.greyBtn5,
              {backgroundColor: Selected[3] % 2 === 0 ? 'white' : '#7553FF'},
            ]}>
            <Text
              style={[
                styles.inText,
                {color: Selected[3] % 2 === 0 ? 'black' : 'white'},
              ]}>
              엔터테이먼트
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* 두번쨰줄 */}
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          style={{marginLeft: '5%'}}
          onPress={() => handleCheck(4)}>
          <View
            style={[
              styles.greyBtn,
              {backgroundColor: Selected[4] % 2 === 0 ? 'white' : '#7553FF'},
            ]}>
            <Text
              style={[
                styles.inText,
                {color: Selected[4] % 2 === 0 ? 'black' : 'white'},
              ]}>
              운동
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => handleCheck(5)}>
          <View
            style={[
              styles.greyBtn4,
              {backgroundColor: Selected[5] % 2 === 0 ? 'white' : '#7553FF'},
            ]}>
            <Text
              style={[
                styles.inText,
                {color: Selected[5] % 2 === 0 ? 'black' : 'white'},
              ]}>
              디자이너
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => handleCheck(6)}>
          <View
            style={[
              styles.greyBtn,
              {backgroundColor: Selected[6] % 2 === 0 ? 'white' : '#7553FF'},
            ]}>
            <Text
              style={[
                styles.inText,
                {color: Selected[6] % 2 === 0 ? 'black' : 'white'},
              ]}>
              여행
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => handleCheck(7)}>
          <View
            style={[
              styles.greyBtn,
              {backgroundColor: Selected[7] % 2 === 0 ? 'white' : '#7553FF'},
            ]}>
            <Text
              style={[
                styles.inText,
                {color: Selected[7] % 2 === 0 ? 'black' : 'white'},
              ]}>
              패션
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greyBtn: {
    borderWidth: 1,
    borderColor: 'black',
    height: 35,
    width: 55,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  greyBtn5: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    height: 35,
    width: 120,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  greyBtn4: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    height: 35,
    width: 90,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  inText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Bold',
  },
});
