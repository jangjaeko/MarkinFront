import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ForMe from './Sections/ForMe';
import Popular from './Sections/Popular';
import SoonEnd from './Sections/SoonEnd';
export default function ActivityHome() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginBottom: '80%', paddingLeft: '5%'}}>
        <View style={{marginTop: 50}}>
          <ForMe />
        </View>

        <View style={{marginTop: 50}}>
          <Popular />
        </View>
        <View style={{marginTop: 50}}>
          <SoonEnd />
        </View>
      </View>
    </ScrollView>
  );
}
