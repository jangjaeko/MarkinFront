import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MyFeedHeader from './Sections/MyFeedHeader';
import MyfeedFooter from '../Footer/MyfeedFooter';
import Profile from './Sections/Profile';
export default function MyFeed(props) {
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <View style={{height: '100%'}}>
      <View style={styles.HeaderStyle}>
        <MyFeedHeader />
      </View>
      <View style={{width: '100%', backgroundColor: 'white'}}>
        <Profile />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%'}}></View>
      </ScrollView>
      <View style={styles.FooterStyle}>
        <MyfeedFooter navigateToMain={navigateToMain} />
      </View>
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
