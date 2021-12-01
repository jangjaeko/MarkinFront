import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Address(props) {
  const [DetailAd, setDetailAd] = useState('');
  const onChangeInput = event => {
    setDetailAd(event);
  };
  return (
    <View style={styles.allView}>
      <Text>Address</Text>
      <Text style={{fontfamily: 'NotoSansKR-Bold'}}>배송 주소</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput />
        <TouchableOpacity style={{backgroundColor: '#DEDEDE', borderRadius: 3}}>
          <Text style={{fontFamily: 'NotoSansKR-Regular', color: 'white'}}>
            주소 검색
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontfamily: 'NotoSansKR-Bold'}}>상세주소 </Text>
      <View>
        <TextInput
          placeholder="상세주소를 입력하세요."
          autoCapitalize={'none'}
          autoCorrect={false}
          value={DetailAd}
          onChangeText={onChangeInput}
          //   onEndEditing={() => setisborderColor2(1)}
          style={[
            {
              width: '90%',
              borderColor: '#DEDEDE',
            },
            styles.input,
          ]}
        />
      </View>
      <TouchableOpacity
        style={styles.btnDesign}
        onPress={() => props.navigation.navigate('Category')}>
        <Text style={styles.btnText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: '5%',
  },
  btnDesign: {
    backgroundColor: 'black',
    width: '95%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    left: '5%',
    top: 750,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
  input: {
    height: 36,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    paddingLeft: 10,
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 14,
  },
});
