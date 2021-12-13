import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icons from '../../Icons/Icons';

export default function Terms(props) {
  const [Must, setMust] = useState(false);
  const [Choose, setChoose] = useState(false);
  const [IsAll, setIsAll] = useState(false);
  const [IsMarketing, setIsMarketing] = useState(false);
  const [sns, setsns] = useState(false);
  const [email, setEmail] = useState(false);
  const onAllAgree = () => {
    if (IsAll === true) {
      setIsAll(false);
      setMust(false);
      setChoose(false);
      setIsMarketing(false);
      setsns(false);
      setEmail(false);
    } else {
      setIsAll(true);
      setMust(true);
      setChoose(true);
      setIsMarketing(true);
      setsns(true);
      setEmail(true);
    }
  };
  const onMarketingAgree = () => {
    if (IsMarketing === true) {
      setIsMarketing(false);
      setsns(false);
      setEmail(false);
    } else {
      setIsMarketing(true);
      setsns(true);
      setEmail(true);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: '15%'}}>
      <View style={{position: 'absolute', width: '90%', left: '5%', top: 150}}>
        <Text style={styles.TopText}>마킨에 오신걸 환영합니다 :)</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.TopText, {color: '#7553FF'}]}>이용약관</Text>
          <Text style={styles.TopText}>에 동의해주세요</Text>
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.btnDes}>
          <TouchableOpacity
            style={[
              IsAll === true ? styles.ClickCheckbtn : styles.unClickcheckbtn,
            ]}
            onPress={onAllAgree}>
            <Icons.Entypo name="check" size={18} style={{color: '#DEDEDE'}} />
          </TouchableOpacity>
          <Text style={styles.innerText}>전체동의</Text>
        </View>
        <View style={styles.checkView}>
          <TouchableOpacity
            style={[
              Must === true ? styles.ClickCheckbtn : styles.unClickcheckbtn,
            ]}
            onPress={() => setMust(!Must)}>
            <Icons.Entypo name="check" size={18} style={{color: '#DEDEDE'}} />
          </TouchableOpacity>
          <Text style={styles.innerText}>(필수)서비스 이용약관</Text>
        </View>
        <View style={styles.TermsLet}></View>
        <View style={styles.checkView}>
          <TouchableOpacity
            style={[
              Choose === true ? styles.ClickCheckbtn : styles.unClickcheckbtn,
            ]}
            onPress={() => setChoose(!Choose)}>
            <Icons.Entypo name="check" size={18} style={{color: '#DEDEDE'}} />
          </TouchableOpacity>
          <Text style={styles.innerText}>(선택)서비스 이용약관</Text>
        </View>
        <View style={styles.TermsLet}></View>
        <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
          <TouchableOpacity
            style={[
              IsMarketing === true
                ? styles.ClickCheckbtn
                : styles.unClickcheckbtn,
            ]}
            onPress={onMarketingAgree}>
            <Icons.Entypo name="check" size={18} style={{color: '#DEDEDE'}} />
          </TouchableOpacity>
          <Text style={styles.innerText}>(선택) 홍보및 마케팅 이용에 동의</Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <TouchableOpacity
            style={[sns === true ? styles.issmallCheck : styles.smallCheck]}
            onPress={() => setsns(!sns)}>
            <Icons.Entypo name="check" size={12} style={{color: '#DEDEDE'}} />
          </TouchableOpacity>
          <Text style={styles.smstext}>SMS</Text>
          <TouchableOpacity
            style={[email === true ? styles.issmallCheck : styles.smallCheck]}
            onPress={() => setEmail(!email)}>
            <Icons.Entypo name="check" size={12} style={{color: '#DEDEDE'}} />
          </TouchableOpacity>
          <Text style={styles.smstext}>이메일</Text>
        </View>
      </View>
      {Must === true ? (
        <TouchableOpacity
          style={styles.btnDesign}
          onPress={() => props.navigation.navigate('PhonNum')}>
          <Text style={styles.btnText}>다음</Text>
        </TouchableOpacity>
      ) : (
        <View
          style={styles.xbtnDesign}
          onPress={() => props.navigation.navigate('PhonNum')}>
          <Text style={styles.btnText}>다음</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  TopText: {fontSize: 24, fontFamily: 'NotoSansKR-Medium', letterSpacing: 3},
  btnDes: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 8,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  TermsLet: {
    backgroundColor: 'white',
    height: 100,
    borderRadius: 8,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  innerText: {
    marginLeft: 15,
    paddingTop: 3,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
  },
  btnView: {
    position: 'absolute',
    top: 250,
    marginLeft: '5%',
    width: '90%',
  },
  btnDesign: {
    backgroundColor: 'black',
    width: '90%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    left: '5%',
    top: 750,
    justifyContent: 'center',
  },
  xbtnDesign: {
    backgroundColor: '#DEDEDE',
    width: '90%',
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
  smstext: {
    marginTop: -2,
    fontFamily: 'NotoSansKR-Medium',
    marginLeft: 10,
  },
  unClickcheckbtn: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#DEDEDE',
    backgroundColor: 'white',
  },
  ClickCheckbtn: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'black',
  },
  checkView: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  smallCheck: {
    marginLeft: 20,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#DEDEDE',
    backgroundColor: 'white',
  },
  issmallCheck: {
    marginLeft: 20,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'black',
  },
});
