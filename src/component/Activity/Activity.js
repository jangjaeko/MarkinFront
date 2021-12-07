import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ActivityHome from './ActivityHome/ActivityHome';
import ActivityFooter from '../Footer/ActivityFooter';
export default function Activity(porps) {
  return (
    <View style={styles.allView}>
      <View style={{width: '100%', height: 100}}></View>

      <View>
        <ActivityHome />
      </View>
      <View style={styles.FooterStyle}>
        <ActivityFooter />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
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
