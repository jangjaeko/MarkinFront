import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Categories() {
  return (
    <View style={{marginTop: 80}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginLeft: '5%', opacity: 0.5}}>
          <View style={styles.greyBtn}>
            <Text style={styles.inText}>전체</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 5, opacity: 0.5}}>
          <View style={styles.greyBtn}>
            <Text style={styles.inText}>뷰티</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 5, opacity: 0.5}}>
          <View style={styles.greyBtn}>
            <Text style={styles.inText}>동물</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 5, opacity: 0.5}}>
          <View style={styles.greyBtn5}>
            <Text style={styles.inText}>엔터테이먼트</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* 두번쨰줄 */}
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity style={{marginLeft: '5%', opacity: 0.5}}>
          <View style={styles.greyBtn}>
            <Text style={styles.inText}>운동</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 5, opacity: 0.5}}>
          <View style={styles.greyBtn4}>
            <Text style={styles.inText}>디자이너</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 5, opacity: 0.5}}>
          <View style={styles.greyBtn}>
            <Text style={styles.inText}>여행</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 5, opacity: 0.5}}>
          <View style={styles.greyBtn}>
            <Text style={styles.inText}>패션</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greyBtn: {
    backgroundColor: 'white',
    borderWidth: 0.3,
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
    borderWidth: 0.3,
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
    borderWidth: 0.3,
    borderColor: 'black',
    height: 35,
    width: 90,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  inText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto-Light',
  },
});
