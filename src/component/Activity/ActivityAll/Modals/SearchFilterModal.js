import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
import Category from './Sections/Category';
export default function SearchFilterModal(props) {
  const [SettingTitle, setSettingTitle] = useState(1);
  const Title = StyleSheet.create({
    focusTitle: {
      fontFamily: 'NotoSansKR-Bold',
      fontSize: 18,
    },
    unFocusTitle: {
      fontFamily: 'NotoSansKR-Medium',
      fontSize: 18,
      color: '#B2B2B2',
    },
  });
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setSearchModalVis(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.SearchModalVis}
        onBackdropPress={() => props.setSearchModalVis(false)}>
        <View style={styles.ModalView}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setSettingTitle(1)}>
              <Text
                style={
                  SettingTitle === 1 ? Title.focusTitle : Title.unFocusTitle
                }>
                카테고리
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => setSettingTitle(2)}>
              <Text
                style={
                  SettingTitle === 2 ? Title.focusTitle : Title.unFocusTitle
                }>
                활동유형
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => setSettingTitle(3)}>
              <Text
                style={
                  SettingTitle === 3 ? Title.focusTitle : Title.unFocusTitle
                }>
                지역
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 120}}>
              <Text style={{fontSize: 16, fontFamily: 'NotoSansKR-Medium'}}>
                초기화
              </Text>
            </TouchableOpacity>
          </View>
          <Category />
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  ModalView: {
    height: 500,
    backgroundColor: 'white',
    borderRadius: 35,
    paddingTop: 20,
    paddingLeft: '5%',
  },
});
