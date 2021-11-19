import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import YourFeedHeader from './Section/YourFeedHeader';
import YourFeedFooter from './Section/YourFeedFooter';
import Profile from './Section/Profile';
import Pictures from './Section/Pictures';
export default function MyFeed() {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.HeaderStyle}></View>
      <View style={{width: '90%', marginLeft: '5%'}}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%'}}></View>
      </ScrollView>
      <View style={styles.FooterStyle}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  HeaderStyle: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  Logo: {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{translateX: -27}, {translateY: 0}],
  },
  FooterStyle: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(212, 212, 212)',
    position: 'absolute',
    bottom: 0,
  },
});
