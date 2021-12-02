import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icons from '../../Icons/Icons';
import CatBut from './Sections/CatBut';

export default function Category(props) {
  const [isFood, setisFood] = useState(false);
  const [isMusic, setisMusic] = useState(false);
  const [isWrite, setisWrite] = useState(false);
  const [isTravel, setisTravel] = useState(false);
  const [isPet, setisPet] = useState(false);
  const [isLove, setisLove] = useState(false);
  const [isGym, setisGym] = useState(false);
  const [isGame, setisGame] = useState(false);
  const [isFashion, setisFashion] = useState(false);
  const [isCoffee, setisCoffee] = useState(false);
  const [isBeauti, setisBeauti] = useState(false);
  const [isbaby, setisbaby] = useState(false);
  const SendAndGo = () => {
    var cnt = 0;
    if (isFood === true) cnt += 1;
    if (isMusic === true) cnt += 1;
    if (isWrite === true) cnt += 1;
    if (isTravel === true) cnt += 1;
    if (isPet === true) cnt += 1;
    if (isLove === true) cnt += 1;
    if (isGym === true) cnt += 1;
    if (isGame === true) cnt += 1;
    if (isFashion === true) cnt += 1;
    if (isCoffee === true) cnt += 1;
    if (isBeauti === true) cnt += 1;
    if (isbaby === true) cnt += 1;

    if (isFood) {
      props.navigation.navigate('Main');
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.allView}>
      <View style={{marginBottom: '70%'}}>
        <TouchableOpacity
          style={{zIndex: 10, marginLeft: '-1%'}}
          onPress={() => props.navigation.goBack()}>
          <Icons.Entypo
            name="chevron-thin-left"
            size={20}
            color="black"
            style={{left: -5, top: 10}}
          />
        </TouchableOpacity>
        <View style={{marginTop: 40}}>
          <Text style={styles.TitleLetter}>
            선호하는 카테고리를 {'\n'}3개 이상 선택해주세요
          </Text>
        </View>
        <CatBut
          isFood={isFood}
          setisFood={setisFood}
          isBeauti={isBeauti}
          setisBeauti={setisBeauti}
          isCoffee={isCoffee}
          setisCoffee={setisCoffee}
          isFashion={isFashion}
          setisFashion={setisFashion}
          isGame={isGame}
          setisGame={setisGame}
          isGym={isGym}
          setisGym={setisGym}
          isMusic={isMusic}
          setisMusic={setisMusic}
          isTravel={isTravel}
          setisTravel={setisTravel}
          isWrite={isWrite}
          setisWrite={setisWrite}
          isbaby={isbaby}
          setisbaby={setisbaby}
          isLove={isLove}
          setisLove={setisLove}
          isPet={isPet}
          setisPet={setisPet}
        />
      </View>
      <TouchableOpacity style={styles.btnDesign} onPress={SendAndGo}>
        <Text style={styles.btnText}>시작하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: '5%',
  },
  TitleLetter: {fontFamily: 'Roboto-Bold', fontSize: 24, lineHeight: 35},
  btnDesign: {
    backgroundColor: '#DEDEDE',
    width: '95%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',

    top: 1150,
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
