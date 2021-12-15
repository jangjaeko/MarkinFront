import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icons from '../../../../Icons/Icons';
export default function Search(props) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{zIndex: 10}}>
        <Icons.Feather
          name="search"
          size={20}
          color="#111"
          style={{
            top: 30,
            left: 20,
            opacity: 0.5,
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <TextInput
        value={props.isSearch}
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder="검색어를 입력하세요"
        onChangeText={props.handleSearch}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 56,
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '5%',
    paddingLeft: 30,
    fontFamily: 'NotoSansKR-Regular',
    lineHeight: 30,
    fontSize: 16,
  },
});
