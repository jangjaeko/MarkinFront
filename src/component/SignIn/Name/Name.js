import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from '../../Icons/Icons';

export default function Name(props) {
  return (
    <View style={styles.allView}>
      <TouchableOpacity
        style={{zIndex: 10}}
        onPress={() => props.navigation.goBack()}>
        <Icons.Entypo
          name="chevron-thin-left"
          size={20}
          color="black"
          style={{left: -5, top: 10}}
        />
      </TouchableOpacity>
      <View style={{marginTop: 40}}>
        <Text style={{fontFamily: 'Roboto-Bold', fontSize: 28}}>
          이름을 입력해주세요
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
});
