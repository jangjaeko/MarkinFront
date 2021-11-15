import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icons from '../Icons/Icons';
export default function Search() {
  const [isSearch, setisSearch] = useState('');
  const onChangeInput = event => {
    setisSearch(event);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{zIndex: 10}}>
          <Icons.Feather
            name="search"
            size={20}
            color="#111"
            style={{marginTop: 30, left: 20, opacity: 0.5}}
          />
        </TouchableOpacity>
        <TextInput
          value={isSearch}
          autoCapitalize={'none'}
          placeholder="ID를 입력하세요"
          onChangeText={onChangeInput}
          style={styles.input}></TextInput>
      </View>
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
    marginLeft: '0%',
    paddingLeft: 30,
  },
});
