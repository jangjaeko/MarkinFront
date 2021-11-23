import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import instaLogo from '../../../images/instaLogo.png';
import Icons from '../../Icons/Icons';
import setting from '../../../images/setting.png';
import IdModal from './IdModal';

//더미 아이디
const Id = ['lkjhgf45', 'jangjaeko45'];

export default function MyFeedHeader(props) {
  const [isModal, setisModal] = useState(false);
  // 추후 인스타와 유튜브 구분 변수 필요
  const [IdNum, setIdNum] = useState(0);

  return (
    <>
      <TouchableOpacity
        style={{flexDirection: 'row', marginTop: 35}}
        onPress={() => setisModal(true)}>
        <View style={styles.LogoImg}>
          <Image source={instaLogo} style={{width: 20, height: 20}} />
        </View>
        <Text style={styles.IdText}>{Id[IdNum]}</Text>
        <Icons.AntDesign
          name="down"
          size={13}
          style={{marginTop: 23, marginLeft: 3}}
        />
      </TouchableOpacity>
      <IdModal
        isModal={isModal}
        setisModal={setisModal}
        IdNum={IdNum}
        setIdNum={setIdNum}
      />
      <Image source={setting} style={styles.setting} />
    </>
  );
}

const styles = StyleSheet.create({
  setting: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 50,
    right: 20,
  },
  IdText: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginTop: 21,
  },
  LogoImg: {
    width: 30,
    height: 30,
    marginTop: 20,
    marginLeft: 20,
  },
});
