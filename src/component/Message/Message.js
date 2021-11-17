import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MessageHeader from './Sections/MessageHeader';
import SearchBar from './Sections/MessageSearchBar';
export default function Message(props) {
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.HeaderStyle}>
        <MessageHeader goBack={goBack} />
      </View>
      <SearchBar />
    </View>
  );
}
const styles = StyleSheet.create({
  HeaderStyle: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
