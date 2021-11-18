import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icons from '../Icons/Icons';
import HotSearch from './Sections/HotSearch';
import CurrentSearch from './Sections/CurrentSearch';
export default function Search() {
  const [isSearch, setisSearch] = useState('');
  const [SearchCat, setSearchCat] = useState(1);
  const [SaveCookie, setSaveCookie] = useState(1);
  const handleHot = () => {
    setSearchCat(1);
  };
  const handleCurrent = () => {
    setSearchCat(2);
  };
  const onChangeInput = event => {
    setisSearch(event);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', marginTop: 50}}>
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
          style={styles.input}
        />
      </View>
      {SearchCat === 1 && isSearch === '' && (
        <>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 30}}>
            <TouchableOpacity style={styles.blackBox}>
              <Text style={styles.focusText}>인기 검색어</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.whiteBox, {marginLeft: 10}]}
              onPress={handleCurrent}>
              <Text style={styles.unfocusText}>최근 검색어</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 15, marginLeft: 35}}>
            <HotSearch />
          </View>
        </>
      )}
      {SearchCat === 2 && isSearch === '' && (
        <>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 30}}>
            <TouchableOpacity style={styles.whiteBox} onPress={handleHot}>
              <Text style={styles.unfocusText}>인기 검색어</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.blackBox, {marginLeft: 10}]}>
              <Text style={styles.focusText}>최근 검색어</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 15, marginLeft: 35}}>
            <CurrentSearch />
          </View>
        </>
      )}
      {isSearch !== '' && (
        <>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 30}}>
            <TouchableOpacity style={styles.whiteBox}>
              <Text style={styles.unfocusText}>인기 검색어</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.whiteBox, {marginLeft: 10}]}>
              <Text style={styles.unfocusText}>최근 검색어</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 15, marginLeft: 35}}>
            <Text style={{fontSize: 20}}>검색내용~~!</Text>
          </View>
        </>
      )}
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
    fontFamily: 'NotoSansKR-Regular',
  },
  blackBox: {
    backgroundColor: 'black',
    height: 30,
    justifyContent: 'center',
    width: 100,
    borderRadius: 15,
  },
  focusText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  unfocusText: {
    opacity: 0.5,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  whiteBox: {
    width: 100,
    justifyContent: 'center',
    height: 30,
  },
});
