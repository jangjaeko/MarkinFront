import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
import Categories from './Categories';
export default function CategoryModal(props) {
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setCatModalVis(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.CatModalVis}
        onBackdropPress={props.handleCatModlaVisable}>
        <View
          style={{
            height: 500,
            backgroundColor: 'white',
            borderRadius: 35,
          }}>
          {props.showCorF ? (
            <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 30}}>
              <TouchableOpacity style={{}} onPress={props.handleCorF}>
                <Text style={styles.TopFalText}>카테고리</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 20}}>
                <Text style={styles.TopText}>팔로워 수</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <View
                style={{flexDirection: 'row', marginTop: 30, marginLeft: 30}}>
                <TouchableOpacity>
                  <Text style={styles.TopText}>카테고리</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 20}}
                  onPress={props.handleCorF}>
                  <Text style={styles.TopFalText}>팔로워 수</Text>
                </TouchableOpacity>
              </View>
              <Categories />
              <TouchableOpacity
                style={{
                  marginLeft: '5%',
                  width: '90%',
                  backgroundColor: 'black',
                  borderRadius: 17,
                  height: 50,
                  justifyContent: 'center',
                  marginTop: 170,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'NotoSansKR-Medium',
                    textAlign: 'center',
                  }}>
                  {' '}
                  설정{' '}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  TopText: {
    fontSize: 20,
    fontFamily: 'NotoSansKR-Medium',
  },
  TopFalText: {
    fontSize: 20,
    fontFamily: 'NotoSansKR-Medium',
    color: '#B3B3B3',
  },
});
