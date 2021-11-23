import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileImage from '../../../images/Profile.png';
export default function Profile() {
  return (
    <View style={{width: '90%', marginLeft: '5%', marginBottom: 40}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={ProfileImage}
          style={{width: 100, height: 100, borderRadius: 100 / 2}}
        />
        <View style={{marginLeft: 35, width: 195}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={[styles.normalText]}>팔로워</Text>
            <Text style={styles.NumText}>26.4만</Text>
            <Text style={[styles.normalText, {marginLeft: 25}]}>프렌즈</Text>
            <Text style={styles.NumText}>18</Text>
          </View>
          <View>
            <Text style={[styles.normalText, {marginTop: 20}]}>
              풍경을 좋아하는 뷰티 인플루언서 프렌징 걸어줘요
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.addFeedFrame}>
        <Text style={styles.btnText}>+ 게시글 추가</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  NumText: {fontFamily: 'NotoSansKR-Bold', marginLeft: 12},
  normalText: {
    fontFamily: 'NotoSansKR-Regular',
  },
  addFeedFrame: {
    borderWidth: 1,
    marginTop: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#424242',
    borderRadius: 4,
  },
  btnText: {
    fontFamily: 'NotoSansKR-Medium',
    color: '#424242',
  },
});
