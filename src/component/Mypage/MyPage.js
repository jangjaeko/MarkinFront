import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import MyFeedHeader from './Header/MyFeedHeader';
import MyfeedFooter from '../Footer/MyfeedFooter';
import Profile from './InstaSections/Profile';
import Pictures from './InstaSections/Pictures';

export default function MyPage(props) {
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.HeaderStyle}>
        <MyFeedHeader />
      </View>
      <View
        style={{
          width: '100%',
          borderBottomColor: '#E5E5E5',
          borderBottomWidth: 5,
        }}>
        <Profile />
      </View>

      <View style={{width: '100%'}}>
        <Pictures />
      </View>

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
