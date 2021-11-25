import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Icons from '../Icons/Icons';
import DayChange from './Sections/DayChange';
import ChatBot from './Sections/ChatBot';
import MainHeader from './Sections/MainHeader';
import DaySchedule from './Sections/DaySchedule';
import MainFooter from '../Footer/MainFooter';
import Issue from './Sections/Issue';
import RankList from '../Ranking/Sections/RankList/RankList';
import Feed from './Feed/Feed';

export default function Main(props) {
  const navigateToHome = () => {
    props.navigation.navigate('Home');
  };
  const navigateToMyPage = () => {
    props.navigation.navigate('MyPage');
  };
  const navigateToRanking = () => {
    props.navigation.navigate('Ranking');
  };
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  const navigateToSearch = () => {
    props.navigation.navigate('Search');
  };
  const navigateToAlarm = () => {
    props.navigation.navigate('Alarm');
  };
  const navigateToMessage = () => {
    props.navigation.navigate('Message');
  };

  const [stateChange, setstateChange] = useState(1);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {/* Header */}
      <View style={styles.HeaderStyle}>
        <MainHeader
          navigateToHome={navigateToHome}
          navigateToRanking={navigateToRanking}
          stateChange={stateChange}
          setstateChange={setstateChange}
          navigateToSearch={navigateToSearch}
          navigateToAlarm={navigateToAlarm}
          navigateToMessage={navigateToMessage}
        />
      </View>
      {stateChange === 1 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: '#F1F1F1'}}>
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
      )}
      {stateChange === 2 && <Feed />}
      {stateChange === 3 && (
        <View style={{width: '100%'}}>
          <RankList />
        </View>
      )}
      <View style={styles.FooterStyle}>
        <MainFooter
          navigateToMyPage={navigateToMyPage}
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
