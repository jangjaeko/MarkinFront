import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AlarmHeader from './AlarmHeader';
export default function Alarm(props) {
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.HeaderStyle}>
        <AlarmHeader goBack={goBack} />
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
