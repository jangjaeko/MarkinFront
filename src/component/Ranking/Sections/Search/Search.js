import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function Search() {
  return (
    <View>
      <TextInput
        autoCapitalize={'none'}
        placeholder="ID를 입력하세요"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '70%',
    height: 56,
    backgroundColor: '#FBFBFB',
    marginTop: 10,
    borderRadius: 12,
    borderColor: '#D6D7D9',
    borderWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'center',
  },
});
