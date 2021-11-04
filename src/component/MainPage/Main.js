import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from '../Icons/Icons';
import DayChange from './Sections/DayChange';
import ChatBot from './Sections/ChatBot';
import MainHeader from './MainHeader';
export default function Main(props) {
  const navigateToHome = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {/* Header */}
      <View style={styles.HeaderStyle}>
        <MainHeader navigateToHome={navigateToHome} />
      </View>
      {/* DayChange */}
      <View style={{width: '100%', marginTop: 20}}>
        <DayChange />
      </View>
      <View style={{width: '100%', marginTop: 20}}>
        <ChatBot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    height: 180,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(212, 212, 212)',
  },
  Logo: {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{translateX: -27}, {translateY: 0}],
  },
});
