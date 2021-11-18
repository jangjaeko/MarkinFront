import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from 'react-native-modal';
export default function FollwerModal(props) {
  const handlefollower = () => {
    props.setSort(1);
    props.setFNumModalVis(false);
  };
  const handleRealFollower = () => {
    props.setSort(2);
    props.setFNumModalVis(false);
  };
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setFNumModalVis(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.FNumModalVis}
        onBackdropPress={props.handleFNumModalVisable}>
        <View style={styles.ModalWrap}>
          <View style={{marginLeft: '5%', marginTop: '8%'}}>
            <TouchableOpacity
              onPress={handlefollower}
              style={[
                styles.touchWrapstyle,
                {opacity: props.Sort === 1 ? 1 : 0.5},
              ]}>
              <Text style={styles.Textstyle}>팔로워 순</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleRealFollower}
              style={[
                styles.RFTouchWrap,
                {opacity: props.Sort === 2 ? 1 : 0.5},
              ]}>
              <Text style={styles.Textstyle}>실 팔로워 순</Text>
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
    fontSize: 15,
    marginLeft: '3%',
  },
  touchWrapstyle: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#00000033',
    height: 50,
    width: '90%',
    paddingTop: 5,
  },
  RFTouchWrap: {
    height: 50,
    marginTop: 20,
  },
  ModalWrap: {
    height: 200,
    backgroundColor: 'white',
    borderRadius: 35,
  },
});
