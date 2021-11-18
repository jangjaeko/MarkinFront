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
import MainFooter from '../MainPage/Sections/MainFooter';
export default function Search(props) {
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
  const onclear = () => {
    setisSearch('');
  };
  const navigateToMyFeed = () => {
    props.navigation.navigate('YourFeed');
  };
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          style={{zIndex: 10}}
          onPress={() => props.navigation.goBack()}>
          <Icons.Entypo
            name="chevron-thin-left"
            size={20}
            color="#111"
            style={{marginTop: 30, left: 25, opacity: 0.5}}
          />
        </TouchableOpacity>
        <TextInput
          value={isSearch}
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder="ID를 입력하세요"
          onChangeText={onChangeInput}
          style={styles.input}
        />
        {isSearch !== '' && (
          <TouchableOpacity style={{zIndex: 10}} onPress={() => onclear()}>
            <Icons.MaterialIcons
              style={{marginTop: 30, right: 35, opacity: 0.5}}
              name="clear"
              size={20}
              color="#111"
            />
          </TouchableOpacity>
        )}
      </View>
      {/* 인기 검색어  */}
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
      {/* 최근 검색어  */}
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
      {/* 검색창 연관 검색어  */}
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
