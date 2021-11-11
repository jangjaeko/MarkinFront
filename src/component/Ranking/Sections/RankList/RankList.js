import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Touchable,
} from 'react-native';
import filter from '../../../../icons/filter.png';
import issue1 from '../../../../images/issue1.png';
export default function RankList() {
  const Categoly = [
    {
      key: 1,
      id: 'Seeun_lynn',
      pImage: issue1,
      realFollower: 23.5,
      Follower: 123.5,
    },
    {
      key: 2,
      id: 'Seeun_lynn',
      pImage: issue1,
      realFollower: 23.5,
      Follower: 123.5,
    },
    {
      key: 3,
      id: 'Seeun_lynn',
      pImage: issue1,
      realFollower: 2333.5,
      Follower: 123.5,
    },
    {
      key: 4,
      id: 'lkjhgf45',
      pImage: issue1,
      realFollower: 23.5,
      Follower: 123.5,
    },
    {
      key: 5,
      id: 'Seeun_lynn',
      pImage: issue1,
      realFollower: 23.5,
      Follower: 123.5,
    },
    {
      key: 6,
      id: 'Seeun_lynn',
      pImage: issue1,
      realFollower: 23.5,
      Follower: 123.5,
    },
    {
      key: 7,
      id: 'Seeun_lynn',
      pImage: issue1,
      realFollower: 23.5,
      Follower: 123.5,
    },
    {
      key: 8,
      id: 'Seeun_lynn',
      pImage: issue1,
      realFollower: 23.5,
      Follower: 123.5,
    },
    {
      key: 9,
      id: 'Seeun_lynn',
      pImage: issue1,
      realFollower: 23.5,
      Follower: 123.5,
    },
    {
      key: 10,
      id: 'Seeun_lynn',
      pImage: issue1,
      realFollower: 23.5,
      Follower: 123.5,
    },
  ];
  const [myWidth, setmyWidth] = useState(null);
  const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setmyWidth(width);
  };
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <TouchableOpacity style={styles.greyBtn}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'NotoSansKR-Regular',
              textAlign: 'center',
            }}>
            카테고리
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greyBtn2}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'NotoSansKR-Regular',
              textAlign: 'center',
            }}>
            팔로워수
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginLeft: 150}}>
          <View style={{opacity: 0.5, flexDirection: 'row'}}>
            <Image
              source={filter}
              style={{width: 12, height: 12, marginTop: 5}}
            />
            <Text
              style={{
                fontSize: 12,
                marginLeft: 10,
                fontFamily: 'NotoSansKR-Regular',
              }}>
              팔로워순
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, marginLeft: '5%'}}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'NotoSansKR-Medium',
          }}>
          순위
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 75,
            fontFamily: 'NotoSansKR-Medium',
          }}>
          계정
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 85,
            fontFamily: 'NotoSansKR-Medium',
          }}>
          실팔로워
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 30,
            fontFamily: 'NotoSansKR-Medium',
          }}>
          팔로워
        </Text>
      </View>
      <ScrollView style={{marginTop: 20}}>
        <View style={{marginBottom: '110%'}}>
          {Categoly.map(item => (
            <View style={styles.outView}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: '5%',
                }}>
                <View style={{width: 30}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 15,
                      fontFamily: 'Roboto-Medium',
                    }}>
                    {item.key}{' '}
                  </Text>
                </View>
                <View
                  style={{
                    width: 150,
                    flexDirection: 'row',
                    marginLeft: 20,
                  }}>
                  <Image
                    source={item.pImage}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30 / 2,
                      marginTop: -5,
                    }}
                  />
                  <Text style={{marginLeft: 8, fontSize: 15}}>{item.id} </Text>
                </View>
                <View style={{width: 70}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#FD780F',
                      fontFamily: 'NotoSansKR-Regular',
                      textAlign: 'right',
                    }}>
                    {item.realFollower} k{' '}
                  </Text>
                </View>
                <View style={{width: 75}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: 'NotoSansKR-Regular',
                      textAlign: 'right',
                    }}>
                    {item.Follower} k{' '}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  TitleText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  outView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    height: 70,
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
    justifyContent: 'center',
    marginBottom: 3,
  },
  greyBtn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EBEBEC',
    width: 60,
    height: 35,
    marginTop: -10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    opacity: 0.5,
  },
  greyBtn2: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EBEBEC',
    width: 60,
    height: 35,
    marginTop: -10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    opacity: 0.5,
  },
});
