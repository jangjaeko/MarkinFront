import React from 'react';
import {View, Text, Image} from 'react-native';
import issue1 from '../../../images/issue1.png';
import Time from '../../../images/Time.png';
export default function Pictures() {
  return (
    <View style={{marginBottom: 100}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'yellow',
            aspectRatio: 1,
            borderWidth: 1,
            borderColor: '#EBEBEC',
          }}>
          <Image source={issue1} style={{width: '100%', height: '100%'}} />
          {/* <View style={{zIndex: 10, position: 'absolute'}}>
            <Image source={Time} style={{width: 50, height: 50}} />
          </View> */}
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#EBEBEC',
            aspectRatio: 1,
          }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: '#EBEBEC',
            aspectRatio: 1,
          }}></View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'yellow',
            aspectRatio: 1,
            borderWidth: 1,
            borderColor: '#EBEBEC',
          }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#EBEBEC',
          }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: '#EBEBEC',
          }}></View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'yellow',
            aspectRatio: 1,
            borderWidth: 1,
            borderColor: '#EBEBEC',
          }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#EBEBEC',
            aspectRatio: 1,
          }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: '#EBEBEC',
            aspectRatio: 1,
          }}></View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'yellow',
            aspectRatio: 1,
            borderWidth: 1,
            borderColor: '#EBEBEC',
            aspectRatio: 1,
          }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#EBEBEC',
            aspectRatio: 1,
          }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: '#EBEBEC',
            aspectRatio: 1,
          }}></View>
      </View>
    </View>
  );
}
