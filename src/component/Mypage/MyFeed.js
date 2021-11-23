import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import MyFeedHeader from './Sections/MyFeedHeader';
import MyfeedFooter from '../Footer/MyfeedFooter';
import Profile from './Sections/Profile';
import Pictures from './Sections/Pictures';
import filterimage from '../../icons/filter.png';
export default function MyFeed(props) {
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
      <View
        style={{
          flexDirection: 'row',
          marginLeft: '80%',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <Image
          source={filterimage}
          style={{width: 10, height: 10, marginTop: 6, marginRight: 5}}
        />
        <Text style={{fontFamily: 'NotoSansKR-Regular'}}>최신순</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%'}}>
          <Pictures />
        </View>
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
