import React from 'react';
import {View, Text, Image} from 'react-native';
import FeedDum from './FeedDum';
export default function UserInfo() {
  return (
    <View style={{marginBottom: 200}}>
      {FeedDum.map(item => (
        <View
          style={{width: '100%', height: 500, backgroundColor: 'white'}}
          key={item.id}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 10,
            }}>
            <Image
              source={item.pImg}
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                marginTop: -4,
              }}
            />
            <Text style={{marginLeft: 10}}>{item.userID}</Text>
          </View>
          <Image source={item.FImg} style={{width: '100%', height: 400}} />
        </View>
      ))}
    </View>
  );
}
