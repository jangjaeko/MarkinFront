import React from 'react';
import {View, Text} from 'react-native';

export default function RTiltle() {
  return (
    <View style={{flexDirection: 'row', marginTop: 20, marginLeft: '5%'}}>
      <Text
        style={{
          fontSize: 15,
          fontFamily: 'NotoSansKR-Medium',
        }}>
        순위
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginLeft: 75,
          fontFamily: 'NotoSansKR-Medium',
        }}>
        계정
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginLeft: 85,
          fontFamily: 'NotoSansKR-Medium',
        }}>
        실팔로워
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginLeft: 30,
          fontFamily: 'NotoSansKR-Medium',
        }}>
        팔로워
      </Text>
    </View>
  );
}
