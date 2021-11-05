import React from 'react';
import {TouchableOpacity, ScrollView, View, Text, Image} from 'react-native';
import issue1 from '../../../images/issue1.png';
import issue2 from '.././../../images/issue2.png';
export default function Issue() {
  return (
    <ScrollView
      horizontal={true}
      style={{marginTop: 20}}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 300}}>
          <TouchableOpacity style={{width: 280}}>
            <Image
              source={issue1}
              style={{width: 280, height: 175, borderRadius: 5}}
            />
            <Text style={{marginTop: 10, fontSize: 16}}>
              드라마가 끝이 아니야, 현 트렌드의 끝판왕
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: 300}}>
          <TouchableOpacity style={{width: 280}}>
            <Image
              source={issue2}
              style={{width: 280, height: 175, borderRadius: 5}}
            />
            <Text style={{marginTop: 10, fontSize: 16}}>
              크러쉬 조이, 음색 끝판왕 둘의 만남
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
