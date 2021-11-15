import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from 'react-native-modal';
export default function FollwerModal(props) {
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setFNumModalVis(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.FNumModalVis}
        onBackdropPress={props.handleFNumModalVisable}>
        <View
          style={{
            height: 300,
            backgroundColor: 'white',
            borderRadius: 35,
          }}>
          <View style={{marginLeft: '5%', marginTop: '10%'}}>
            <TouchableOpacity style={styles.touchWrapstyle}>
              <Text style={styles.Textstyle}>전체</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchWrapstyle}>
              <Text style={styles.Textstyle}>실 팔로워 순</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 50, marginTop: 20}}>
              <Text style={styles.Textstyle}>팔로워 순</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}
const styles = StyleSheet.create({
  Textstyle: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
    marginLeft: '3%',
  },
  touchWrapstyle: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#00000033',
    height: 50,
    width: '90%',
    marginTop: 20,
  },
});
