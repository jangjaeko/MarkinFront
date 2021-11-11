import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from '../../Icons/Icons';

export default function YourFeedHeader(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigateToMain()}
        style={{width: 150, height: 150, position: 'absolute'}}>
        <Icons.EvilIcons
          name="chevron-left"
          size={50}
          color="#111"
          style={{position: 'absolute', left: 8, top: 10}}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontFamily: 'NotoSansKR-Light',
        }}>
        seeun_lynn
      </Text>
      <TouchableOpacity
        onPress={() => props.navigateToMain()}
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          right: 5,
          top: 20,
        }}>
        <Icons.Entypo
          name="dots-three-horizontal"
          size={18}
          color="#111"
          style={{position: 'absolute'}}
        />
      </TouchableOpacity>
    </View>
  );
}
