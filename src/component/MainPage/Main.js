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
  const navigateToMyFeed = () => {
    props.navigation.navigate('YourFeed');
  };
  const navigateToRanking = () => {
    props.navigation.navigate('Ranking');
  };
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {/* Header */}
      <View style={styles.HeaderStyle}>
        <MainHeader
          navigateToHome={navigateToHome}
          navigateToRanking={navigateToRanking}
        />
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
        <View style={{marginLeft: '5%', marginTop: 20, marginBottom: 150}}>
          <Text style={{fontFamily: 'NotoSansKR-Bold'}}>I S S U E</Text>
          <Issue />
        </View>
      </ScrollView>
      <View style={styles.FooterStyle}>
        <MainFooter
          navigateToMyFeed={navigateToMyFeed}
          navigateToMain={navigateToMain}
        />
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
    borderTopWidth: 1,
    borderTopColor: 'rgb(212, 212, 212)',
    position: 'absolute',
    bottom: 0,
  },
});
