import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import issue1 from '../../../../images/issue1.png';
export default function RList(props) {
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
  return (
    <View style={{marginBottom: '200%'}}>
      {Categoly.map(
        item =>
          item.id.toLowerCase().includes(props.isSearch) === true && (
            <View style={styles.outView} key={item.key}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: '5%',
                }}>
                <View style={{width: 30}}>
                  <Text style={styles.rankText}>{item.key}</Text>
                </View>
                <View style={styles.idSpace}>
                  <Image source={item.pImage} style={styles.pImagest} />
                  <Text style={{marginLeft: 8, fontSize: 15}}>{item.id} </Text>
                </View>
                <View style={{width: 70}}>
                  <Text style={styles.realFollowerText}>
                    {item.realFollower} k
                  </Text>
                </View>
                <View style={{width: 75}}>
                  <Text style={styles.followerText}>{item.Follower} k</Text>
                </View>
              </View>
            </View>
          ),
      )}
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
  followerText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Regular',
    textAlign: 'right',
  },
  realFollowerText: {
    fontSize: 15,
    color: '#7553FF',
    fontFamily: 'NotoSansKR-Regular',
    textAlign: 'right',
  },
  pImagest: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginTop: -5,
  },
  rankText: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  idSpace: {
    width: 150,
    flexDirection: 'row',
    marginLeft: 20,
  },
});
