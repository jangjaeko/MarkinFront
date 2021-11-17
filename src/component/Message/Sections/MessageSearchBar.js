import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import filter from 'lodash.filter';
import Icons from '../../Icons/Icons';
import profile from '../../../images/Profile.png';
const data = [
  {id: '1', title: 'First item', pImage: profile},
  {id: '2', title: 'Seeun_lynn', pImage: profile},
  {id: '3', title: 'jangajae', pImage: profile},
  {id: '4', title: 'ho', pImage: profile},
];

export default function MessageSearchBar() {
  const [isSearch, setisSearch] = useState('');
  const [fullData, setFullData] = useState([]);
  const onChangeInput = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, user => {
      return contains(user, formattedQuery);
    });

    setisSearch(text);
  };
  const onclear = () => {
    setisSearch('');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{zIndex: 10}}>
          <Icons.Feather
            name="search"
            size={20}
            color="#111"
            style={{marginTop: 20, left: 35, opacity: 0.5}}
          />
        </TouchableOpacity>
        <TextInput
          autoCorrect={false}
          value={isSearch}
          autoCapitalize={'none'}
          placeholder="ID를 입력하세요"
          onChangeText={onChangeInput}
          style={styles.input}></TextInput>
        {isSearch !== '' ? (
          <TouchableOpacity style={{zIndex: 10}} onPress={() => onclear()}>
            <Icons.MaterialIcons
              style={{marginTop: 20, right: 35, opacity: 0.5}}
              name="clear"
              size={20}
              color="#111"
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
      <FlatList
        // ListHeaderComponent={renderHeader}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          item.title.toLowerCase().includes(isSearch) === true ? (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                width: '90%',
                marginLeft: '5%',
              }}>
              <Image
                source={item.pImage}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  marginTop: -5,
                }}
              />
              <View style={{marginLeft: 15}}>
                <Text style={styles.listItemText}>{item.title}</Text>
                <Text style={styles.sumChat}>
                  {' '}
                  안녕하세요 {/* last ment */}{' '}
                </Text>
              </View>
            </View>
          ) : (
            <View></View>
          )
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#0000000D',
    marginTop: 10,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    paddingLeft: 50,
    fontSize: 16,
    fontFamily: 'NotoSansKR-Regular',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700',
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  listItemText: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  sumChat: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    opacity: 0.7,
  },
});

// import React, {useState} from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {SearchBar} from 'react-native-elements';

// export default function MessageSearchBar() {
//   const [SearchData, setSearchData] = useState('');
//   const handleSearchData = text => {
//     setSearchData(text);
//   };
//   return (
//     <View>
//       <SearchBar
//         lightTheme
//         autoCapitalize="none"
//         placeholder={'검색'}
//         onChangeText={text => handleSearchData(text)}
//         value={SearchData}
//         containerStyle={{backgroundColor: 'white'}}
//         inputContainerStyle={{backgroundColor: 'white'}}
//         inputStyle={styles.inputstyle}
//         leftIconContainerStyle={styles.lefticonsst}
//         rightIconContainerStyle={styles.righticonst}
//         style={{borderColor: 'white'}}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   inputstyle: {
//     backgroundColor: '#0000000D',
//     paddingRight: 20,
//   },
//   lefticonsst: {
//     backgroundColor: '#0000000D',
//     width: 40,
//     marginRight: -10,
//     borderTopLeftRadius: 12,
//     borderBottomLeftRadius: 12,
//   },
//   righticonst: {
//     backgroundColor: '#0000000D',
//     borderTopRightRadius: 15,
//     borderBottomRightRadius: 15,
//     width: 20,
//   },
// });
