import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MessageHeader from './Sections/MessageHeader';
import SearchBar from './Sections/MessageSearchBar';
import MainFooter from '../Footer/MainFooter';
export default function Message(props) {
  const goBack = () => {
    props.navigation.goBack();
  };
  const navigateToMyPage = () => {
    props.navigation.navigate('MyPage');
  };
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.HeaderStyle}>
        <MessageHeader goBack={goBack} />
      </View>
      <SearchBar />
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
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: 40,
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
