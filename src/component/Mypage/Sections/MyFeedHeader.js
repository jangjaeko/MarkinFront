import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import instaLogo from '../../../images/instaLogo.png';
import Icons from '../../Icons/Icons';
import setting from '../../../images/setting.png';
export default function MyFeedHeader(props) {
  return (
    <>
      <TouchableOpacity style={{flexDirection: 'row', marginTop: 20}}>
        <View
          // onPress={props.goBack}
          style={{
            width: 30,
            height: 30,
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Image source={instaLogo} style={{width: 20, height: 20}} />
        </View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Roboto-Medium',
            textAlign: 'center',
            marginTop: 19,
          }}>
          jangajaeKo
        </Text>
        <Icons.AntDesign
          name="down"
          size={13}
          style={{marginTop: 23, marginLeft: 3}}
        />
      </TouchableOpacity>
      <Image
        source={setting}
        style={{
          width: 30,
          height: 30,
          position: 'absolute',
          top: 48,
          right: 20,
        }}
      />
    </>
  );
}
