import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import issue1 from '../../../../images/issue1.png';
import issue2 from '../../../../images/issue2.png';
export default function Popular() {
  return (
    <View>
      {/* <View style={{flexDirection: 'row'}}> */}
      <Text
        style={{color: '#232323', fontFamily: 'NotoSansKR-Bold', fontSize: 16}}>
        #인기폭발
      </Text>
      <Text
        style={{
          color: '#424242',
          fontFamily: 'NotoSansKR-Regular',
          position: 'absolute',
          right: '5%',
        }}>
        전체보기
      </Text>
      {/* </View> */}
      <ScrollView
        horizontal={true}
        style={{marginTop: 20}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 280}}>
            <TouchableOpacity style={{width: 280}}>
              <Image source={issue1} style={styles.ImgStyle} />
              <Text style={styles.TitleText}>감성커피</Text>
              <Text style={styles.subText}>
                드라마가 끝이 아니야, 현 트렌드의 끝판왕
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 300}}>
            <TouchableOpacity style={{width: 280}}>
              <Image source={issue2} style={styles.ImgStyle} />
              <Text style={styles.TitleText}>강소백</Text>
              <Text style={styles.subText}>
                크러쉬 조이, 음색 끝판왕 둘의 만남
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  subText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#424242',
  },
  ImgStyle: {
    width: 250,
    height: 275,
    borderRadius: 5,
  },
  TitleText: {
    fontSize: 15,
    marginTop: 2,
    fontFamily: 'NotoSansKR-Medium',
  },
});
