import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Div} from 'reactnative-ui-bootstrap';
import issue1 from '../../../../images/issue1.png';
export default function Cards() {
  return (
    <Div className={'row '}>
      <Div className={'col-6'} style={{height: 300}}>
        <View style={styles.ImageView}>
          <Image source={issue1} style={styles.Imagestyle} />
        </View>
      </Div>
      <Div className={'col-6'} style={{height: 300}}>
        <View style={styles.ImageView}>
          <Image source={issue1} style={styles.Imagestyle} />
        </View>
        <View style={{flexDirection: 'row', paddingLeft: '5%', marginTop: 10}}>
          <Text>감성커피</Text>
          <View
            style={{
              backgroundColor: '#F1F1F1',
              position: 'absolute',
              right: '6%',
              borderRadius: 3,
              padding: 3,
              marginTop: -2,
            }}>
            <Text style={{fontSize: 10}}>0일 남음</Text>
          </View>
        </View>
        <Text style={{marginTop: 5, paddingLeft: '6%'}}>
          감성커피 X 초록매실 어쩌구
        </Text>
        <View style={{flexDirection: 'row', marginTop: 5, paddingLeft: '6%'}}>
          <Text style={{color: 'red'}}>32명</Text>
          <Text style={{color: '#B2B2B2'}}>/32명 모집</Text>
          <Text style={{position: 'absolute', right: '6%'}}> 40,000P</Text>
        </View>
      </Div>
      <Div className={'col-6'} style={{height: 300}}>
        <View style={styles.ImageView}>
          <Image source={issue1} style={styles.Imagestyle} />
        </View>
        <Text>감성커피</Text>
      </Div>
      <Div className={'col-6'} style={{height: 300}}>
        <View style={styles.ImageView}>
          <Image source={issue1} style={styles.Imagestyle} />
        </View>
        <Text>감성커피</Text>
      </Div>
      <Div className={'col-6'} style={{height: 300}}>
        <View style={styles.ImageView}>
          <Image source={issue1} style={styles.Imagestyle} />
        </View>
        <Text>감성커피</Text>
      </Div>
    </Div>
  );
}

const styles = StyleSheet.create({
  ImageView: {
    paddingLeft: '5%',
    width: '95%',
    height: 210,
    marginTop: 10,
  },
  Imagestyle: {
    width: '100%',
    borderRadius: 5,

    height: 210,
  },
});
