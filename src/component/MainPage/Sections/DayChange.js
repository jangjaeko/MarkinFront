import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function DayChange(props) {
  const [FollowChange, setFollowChange] = useState(1);
  const [PostingChange, setPostingChange] = useState(0);
  const handleFollow = () => {
    setFollowChange(1);
    setPostingChange(0);
  };
  const handlePosing = () => {
    setFollowChange(0);
    setPostingChange(1);
  };
  return (
    <View style={FollowChange === 1 ? styles.FollowView : styles.PostView}>
      <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 10}}>
        <Text
          style={{
            marginLeft: 20,
            fontFamily: 'NotoSansKR-Bold',
            marginTop: 8,
            fontSize: 16,
          }}>
          일별 계정 변화
        </Text>
        <TouchableOpacity style={{marginLeft: 120}} onPress={handleFollow}>
          {FollowChange === 1 ? (
            <View style={styles.Focus}>
              <Text style={styles.FocusText}>팔로워</Text>
            </View>
          ) : (
            <View style={styles.unFocus}>
              <Text style={styles.unFocusText}>팔로워</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10}} onPress={handlePosing}>
          {FollowChange === 1 ? (
            <View style={styles.unFocus}>
              <Text style={styles.unFocusText}>포스팅</Text>
            </View>
          ) : (
            <View style={styles.Focus}>
              <Text style={styles.FocusText}>포스팅</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      {FollowChange === 1 ? (
        <>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>팔로워 증가</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={{textAlign: 'right', marginRight: '5%'}}>
                500 명
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>기존 팔로워 감소</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={{textAlign: 'right', marginRight: '5%'}}>
                200 명
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>총 팔로워</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={{textAlign: 'right', marginRight: '5%'}}>
                90,000 명
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>도달 수</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={{textAlign: 'right', marginRight: '5%'}}>
                500,000 회
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>노출 수</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={{textAlign: 'right', marginRight: '5%'}}>
                600,000 회
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>댓글</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={{textAlign: 'right', marginRight: '5%'}}>30 명</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>좋아요</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={{textAlign: 'right', marginRight: '5%'}}>
                60,000 개
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  FollowView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    width: '90%',
    height: 180,
    marginLeft: '5%',
    borderRadius: 10,
    borderColor: '#111111',
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
  },
  PostView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    width: '90%',
    height: 200,
    marginLeft: '5%',
    borderRadius: 10,
    borderColor: '#111111',
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
  },
  unFocus: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    width: 50,
    borderWidth: 2,
    height: 30,
    justifyContent: 'center',
  },
  unFocusText: {
    textAlign: 'center',
    color: '#000000B2',
    fontFamily: 'NotoSansKR-Light',
  },
  Focus: {
    backgroundColor: '#747474',
    borderRadius: 30,
    width: 50,
    height: 30,
    justifyContent: 'center',
  },
  FocusText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  LightText: {
    marginLeft: 20,
    fontWeight: '200',
    fontFamily: 'NotoSansKR-Light',
  },
  NumText: {
    textAlign: 'right',
    marginRight: '5%',
    fontFamily: 'NotoSansKR-Bold',
  },
});
