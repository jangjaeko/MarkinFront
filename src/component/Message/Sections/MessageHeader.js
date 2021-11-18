import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from '../../Icons/Icons';
export default function MessageHeader(props) {
  return (
    <View style={{flexDirection: 'row', width: '100%'}}>
      <TouchableOpacity
        onPress={props.goBack}
        style={{
          width: 30,
          height: 30,
          marginTop: 0,
          marginLeft: 20,
        }}>
        <Icons.Entypo name="chevron-thin-left" size={20} style={{}} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'NotoSansKR-Medium',
          textAlign: 'center',
          marginLeft: '27%',
        }}>
        메세지
      </Text>
    </View>
  );
}
