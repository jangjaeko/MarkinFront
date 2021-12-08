import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Category() {
  const [Selected, setSelected] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const handleCheck = item => {
    setSelected(items => ({...items, [item]: Selected[item] + 1}));
  };
  return (
    <View style={{marginTop: 120}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => handleCheck(0)}
          style={[
            styles.nonClickBut,
            {
              backgroundColor: Selected[0] % 2 === 0 ? 'white' : '#7553FF',
              borderWidth: Selected[0] % 2 === 0 ? 1 : 0,
            },
          ]}>
          <Text
            style={[
              styles.inText,
              {color: Selected[0] % 2 === 0 ? 'black' : 'white'},
            ]}>
            음식
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.settingBut}>
        <Text style={styles.settingText}>설정</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  settingBut: {
    width: '90%',
    backgroundColor: 'black',
    borderRadius: 17,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 200,
  },
  nonClickBut: {
    borderColor: 'black',
    height: 30,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  settingText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'NotoSansKR-Medium',
    textAlign: 'center',
  },
  inText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Bold',
    textAlign: 'center',
  },
});
