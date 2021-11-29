import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icons from '../../Icons/Icons';
export default function PhonNum(props) {
  const [isPhNum, setisPhNum] = useState('');
  const [ProveNum, setProveNum] = useState('');
  const [isborderColor, setisborderColor] = useState(1);
  const [isborderColor2, setisborderColor2] = useState(1);
  const onChangeInput = event => {
    setisPhNum(event);
    setisborderColor(2);
  };
  const onChangeProveInput = event => {
    setProveNum(event);
    setisborderColor2(2);
  };
  return (
    <View style={styles.allView}>
      <TouchableOpacity
        style={{zIndex: 10}}
        onPress={() => props.navigation.goBack()}>
        <Icons.Entypo
          name="chevron-thin-left"
          size={20}
          color="black"
          style={{left: -5, top: 10}}
        />
      </TouchableOpacity>
      <View style={{marginTop: 40}}>
        <Text style={{fontFamily: 'Roboto-Bold', fontSize: 28}}>
          휴대폰 번호 인증이 {'\n'}필요합니다.
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 18,
            color: '#676767',
            marginTop: 10,
          }}>
          개인정보는 절대 공개되지 않습니다.
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 80}}>
        <TextInput
          placeholder="휴대폰 번호를 이력하세요."
          autoCapitalize={'none'}
          autoCorrect={false}
          clearTextOnFocus={true}
          value={isPhNum}
          onChangeText={onChangeInput}
          onEndEditing={() => setisborderColor(1)}
          style={[
            {width: '65%', borderColor: isborderColor == 1 ? '#DEDEDE' : 'red'},
            styles.input,
          ]}
        />
        <TouchableOpacity
          style={{
            borderRadius: 3,
            backgroundColor: '#DEDEDE',
            justifyContent: 'center',
            height: 50,
            width: 88,
            alignItems: 'center',
            marginTop: 5,
            marginLeft: 15,
          }}>
          <Text style={{color: 'white', fontFamily: 'NotoSansKR-Medium'}}>
            인증요청
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="인증번호 6자리를 입력하세요"
          autoCapitalize={'none'}
          autoCorrect={false}
          value={ProveNum}
          onChangeText={onChangeProveInput}
          onEndEditing={() => setisborderColor2(1)}
          style={[
            {
              width: '92%',
              borderColor: isborderColor2 == 1 ? '#DEDEDE' : 'red',
            },
            styles.input,
          ]}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnDesign}
          onPress={() => props.navigation.navigate('Name')}>
          <Text style={styles.btnText}>다음</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    height: 56,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    paddingLeft: 10,
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 16,
  },
  btnDesign: {
    backgroundColor: '#DEDEDE',
    width: '90%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',

    top: 300,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
});
