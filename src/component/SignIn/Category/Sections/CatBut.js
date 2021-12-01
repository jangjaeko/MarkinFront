import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import music from '../../../../images/music.png';
import write from '../../../../images/write.png';
import travel from '../../../../images/travel.png';
import pet from '../../../../images/pet.png';
import love from '../../../../images/love.png';
import gym from '../../../../images/gym.png';
import game from '../../../../images/game.png';
import food from '../../../../images/food.png';
import fashion from '../../../../images/fashion.png';
import coffee from '../../../../images/coffee.png';
import beauti from '../../../../images/beauti.png';
import baby from '../../../../images/baby.png';
export default function CatBut() {
  return (
    <View style={{width: '90%', marginTop: 50, marginLeft: '5%'}}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '5%'}]}>
          <Image source={food} style={{width: 50, height: 50}} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '20%'}]}>
          <Image source={coffee} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '5%'}]}>
          <Image source={beauti} style={{width: 50, height: 50}} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '20%'}]}>
          <Image source={fashion} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '5%'}]}>
          <Image source={gym} style={{width: 50, height: 50}} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '20%'}]}>
          <Image source={travel} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '5%'}]}>
          <Image source={baby} style={{width: 50, height: 50}} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '20%'}]}>
          <Image source={pet} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '5%'}]}>
          <Image source={game} style={{width: 50, height: 50}} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '20%'}]}>
          <Image source={write} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '5%'}]}>
          <Image source={love} style={{width: 50, height: 50}} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.CatView, {marginLeft: '20%'}]}>
          <Image source={music} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CatView: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    shadowColor: '#dedede',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
