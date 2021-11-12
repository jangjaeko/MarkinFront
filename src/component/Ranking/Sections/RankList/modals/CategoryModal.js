import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

export default function CategoryModal(props) {
  return (
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
          <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 30}}>
            <TouchableOpacity>
              <Text style={styles.TopText}>카테고리</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={props.handleCorF}>
              <Text style={styles.TopFalText}>팔로워 수</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
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
