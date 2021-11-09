import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RankingHeader from './Sections/RankingHeader';
import Footer from '../MainPage/Sections/MainFooter';
export default function Ranking(props) {
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.HeaderStyle}>
        <RankingHeader navigateToMain={navigateToMain} />
      </View>
      <Text>Rank</Text>
      <View style={styles.FooterStyle}>
        <Footer />
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
