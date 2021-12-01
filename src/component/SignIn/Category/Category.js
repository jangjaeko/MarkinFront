import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from '../../Icons/Icons';

export default function Category(props) {
  return (
    <View style={styles.allView}>
      <TouchableOpacity
        style={{zIndex: 10, marginLeft: '-1%'}}
        onPress={() => props.navigation.goBack()}>
        <Icons.Entypo
          name="chevron-thin-left"
          size={20}
          color="black"
          style={{left: -5, top: 10}}
        />
      </TouchableOpacity>
      <View style={{marginTop: 40}}>
        <Text style={styles.TitleLetter}>
          선호하는 카테고리를 {'\n'}3개 선택해주세요
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: '5%',
  },
  TitleLetter: {fontFamily: 'Roboto-Bold', fontSize: 24, lineHeight: 35},
});
