import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MessageHeader from './Sections/MessageHeader';
export default function Message(props) {
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.HeaderStyle}>
        <MessageHeader goBack={goBack} />
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
  },
});
