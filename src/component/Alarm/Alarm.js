import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AlarmHeader from './AlarmHeader';
import MainFooter from '../MainPage/Sections/MainFooter';
export default function Alarm(props) {
  const goBack = () => {
    props.navigation.goBack();
  };
  const navigateToMyFeed = () => {
    props.navigation.navigate('YourFeed');
  };
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.HeaderStyle}>
        <AlarmHeader goBack={goBack} />
      </View>
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
    paddingTop: 40,
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
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
