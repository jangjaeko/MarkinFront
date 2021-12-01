import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icons from '../../Icons/Icons';
import AgeBut from './Sections/AgeBut';
import SexBut from './Sections/SexBut';
export default function AgeChoose(props) {
  const [Isboy, setIsboy] = useState(false);
  const [Isgirl, setIsgirl] = useState(false);
  const [IsAge, setIsAge] = useState(0);

  return (
    <View style={styles.allView}>
      <TouchableOpacity
        style={{zIndex: 10, marginLeft: '7%'}}
        onPress={() => props.navigation.goBack()}>
        <Icons.Entypo
          name="chevron-thin-left"
          size={20}
          color="black"
          style={{left: -5, top: 10}}
        />
      </TouchableOpacity>
      <View style={{marginTop: 40, marginLeft: '5%'}}>
        <Text style={styles.TitleLetter}>성별, 연령대를 {'\n'}알려주세요</Text>
      </View>
      {/* Sex button */}
      <SexBut
        Isboy={Isboy}
        setIsboy={setIsboy}
        Isgirl={Isgirl}
        setIsgirl={setIsgirl}
      />
      {/* Age button */}
      <AgeBut IsAge={IsAge} setIsAge={setIsAge} />
      {/* next button */}

      {IsAge !== 0 && (Isboy || Isgirl) ? (
        <TouchableOpacity
          style={[styles.btnDesign, {backgroundColor: 'black'}]}
          onPress={() => props.navigation.navigate('Address')}>
          <Text style={styles.btnText}>다음</Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.btnDesign, {backgroundColor: '#DEDEDE'}]}>
          <Text style={styles.btnText}>다음</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  TopText: {fontSize: 24, fontFamily: 'Roboto-Bold', letterSpacing: 3},
  TitleLetter: {fontFamily: 'Roboto-Bold', fontSize: 28},
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  btnDesign: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    top: 750,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
});
