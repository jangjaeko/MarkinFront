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
      realFollower: 23.5,
      Follower: 123.5,
    },
    {
      key: 4,
      id: 'Seeun_lynn',
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
          <Text style={{fontSize: 12}}>카테고리</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greyBtn2}>
          <Text style={{fontSize: 12}}>팔로워수</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginLeft: 150}}>
          <Image source={filter} style={{width: 12, height: 12}} />
          <Text style={{fontSize: 12, marginLeft: 10}}>팔로워순</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, marginLeft: '5%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>순위</Text>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 75}}>
          계정
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 85}}>
          실팔로워
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 30}}>
          팔로워
        </Text>
      </View>
      <ScrollView style={{marginTop: 20}}>
        <View style={{marginBottom: '150%'}}>
          {Categoly.map(item => (
            <View style={styles.outView}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: '5%',
                }}>
                <Text style={{marginLeft: 7, fontSize: 15}}>{item.key} </Text>
                <Image
                  source={item.pImage}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    marginTop: -5,
                    marginLeft: 30,
                  }}
                />
                <Text style={{marginLeft: 8, fontSize: 15}}>{item.id} </Text>
                <Text style={{marginLeft: 30, fontSize: 15, color: '#FD780F'}}>
                  {item.realFollower} k{' '}
                </Text>
                <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '300'}}>
                  {item.Follower} k{' '}
                </Text>
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
    height: 60,

    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
    justifyContent: 'center',
    marginBottom: 20,
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
