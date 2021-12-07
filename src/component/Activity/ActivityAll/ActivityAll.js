import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import Cards from './Sections/Cards';
export default function ActivityAll() {
  return (
    <ScrollView>
      <View style={{marginBottom: '60%'}}>
        <Cards />
      </View>
    </ScrollView>
  );
}
