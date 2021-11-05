import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icons from '../Icons/Icons';
import DayChange from './Sections/DayChange';
import ChatBot from './Sections/ChatBot';
import MainHeader from './Sections/MainHeader';
import DaySchedule from './Sections/DaySchedule';
import MainFooter from './Sections/MainFooter';
import Issue from './Sections/Issue';
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* DayChange */}
        <View style={{width: '100%', marginTop: 20}}>
          <DayChange />
        </View>
        <View style={{width: '100%', marginTop: 20}}>
          <ChatBot />
        </View>
        <View style={{width: '100%', marginTop: 20}}>
          <DaySchedule />
        </View>
        <View style={{marginLeft: '5%', marginTop: 20, marginBottom: 20}}>
          <Text>I S S U E</Text>
          <Issue />
        </View>
      </ScrollView>
      <View style={styles.FooterStyle}>
        <MainFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    height: 140,
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
  FooterStyle: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(212, 212, 212)',
  },
});
