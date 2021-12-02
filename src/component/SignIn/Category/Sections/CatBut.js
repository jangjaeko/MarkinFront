import React, {useState} from 'react';
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
import Icons from '../../../Icons/Icons';
export default function CatBut(props) {
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

  return (
    <View style={{width: '90%', marginTop: 50, marginLeft: '5%'}}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          style={[
            styles.CatView,
            {
              marginLeft: '5%',
              borderColor: props.isFood === true && 'black',
              borderWidth: props.isFood === true && 2,
              opacity: props.isFood === true ? 0.5 : 1,
            },
          ]}
          onPress={() => props.setisFood(!props.isFood)}>
          <Image source={food} style={{width: 50, height: 50}} />
          {props.isFood === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setisCoffee(!props.isCoffee)}
          style={[
            styles.CatView,
            {
              marginLeft: '20%',
              borderColor: props.isCoffee === true && 'black',
              borderWidth: props.isCoffee === true && 2,
              opacity: props.isCoffee === true ? 0.5 : 1,
            },
          ]}>
          <Image source={coffee} style={{width: 50, height: 50}} />
          {props.isCoffee === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
      </View>

      {/* 222222222222222 */}

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity
          onPress={() => props.setisBeauti(!props.isBeauti)}
          style={[
            styles.CatView,
            {
              marginLeft: '5%',
              borderColor: props.isBeauti === true && 'black',
              borderWidth: props.isBeauti === true && 2,
              opacity: props.isBeauti === true ? 0.5 : 1,
            },
          ]}>
          <Image source={beauti} style={{width: 50, height: 50}} />
          {props.isBeauti === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setisFashion(!props.isFashion)}
          style={[
            styles.CatView,
            {
              marginLeft: '20%',
              borderColor: props.isFashion === true && 'black',
              borderWidth: props.isFashion === true && 2,
              opacity: props.isFashion === true ? 0.5 : 1,
            },
          ]}>
          <Image source={fashion} style={{width: 50, height: 50}} />
          {props.isFashion === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity
          onPress={() => props.setisGym(!props.isGym)}
          style={[
            styles.CatView,
            {
              marginLeft: '5%',
              borderColor: props.isGym === true && 'black',
              borderWidth: props.isGym === true && 2,
              opacity: props.isGym === true ? 0.5 : 1,
            },
          ]}>
          <Image source={gym} style={{width: 50, height: 50}} />
          {props.isGym === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setisTravel(!props.isTravel)}
          style={[
            styles.CatView,
            {
              marginLeft: '20%',
              borderColor: props.isTravel === true && 'black',
              borderWidth: props.isTravel === true && 2,
              opacity: props.isTravel === true ? 0.5 : 1,
            },
          ]}>
          <Image source={travel} style={{width: 50, height: 50}} />
          {props.isTravel === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity
          style={[
            styles.CatView,
            {
              marginLeft: '5%',
              borderColor: props.isbaby === true && 'black',
              borderWidth: props.isbaby === true && 2,
              opacity: props.isbaby === true ? 0.5 : 1,
            },
          ]}
          onPress={() => props.setisbaby(!props.isbaby)}>
          <Image source={baby} style={{width: 50, height: 50}} />
          {props.isbaby === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setisPet(!props.isPet)}
          style={[
            styles.CatView,
            {
              marginLeft: '20%',
              borderColor: props.isPet === true && 'black',
              borderWidth: props.isPet === true && 2,
              opacity: props.isPet === true ? 0.5 : 1,
            },
          ]}>
          <Image source={pet} style={{width: 50, height: 50}} />
          {props.isPet === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity
          onPress={() => props.setisGame(!props.isGame)}
          style={[
            styles.CatView,
            {
              marginLeft: '5%',
              borderColor: props.isGame === true && 'black',
              borderWidth: props.isGame === true && 2,
              opacity: props.isGame === true ? 0.5 : 1,
            },
          ]}>
          <Image source={game} style={{width: 50, height: 50}} />
          {props.isGame === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setisWrite(!props.isWrite)}
          style={[
            styles.CatView,
            {
              marginLeft: '20%',
              borderColor: props.isWrite === true && 'black',
              borderWidth: props.isWrite === true && 2,
              opacity: props.isWrite === true ? 0.5 : 1,
            },
          ]}>
          <Image source={write} style={{width: 50, height: 50}} />
          {props.isWrite === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TouchableOpacity
          onPress={() => props.setisLove(!props.isLove)}
          style={[
            styles.CatView,
            {
              marginLeft: '5%',
              borderColor: props.isLove === true && 'black',
              borderWidth: props.isLove === true && 2,
              opacity: props.isLove === true ? 0.5 : 1,
            },
          ]}>
          <Image source={love} style={{width: 50, height: 50}} />
          {props.isLove === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setisMusic(!props.isMusic)}
          style={[
            styles.CatView,
            {
              marginLeft: '20%',
              borderColor: props.isMusic === true && 'black',
              borderWidth: props.isMusic === true && 2,
              opacity: props.isMusic === true ? 0.5 : 1,
            },
          ]}>
          <Image source={music} style={{width: 50, height: 50}} />
          {props.isMusic === true && (
            <Icons.AntDesign
              name="checkcircle"
              size={30}
              color="black"
              style={{position: 'absolute', zIndex: 10, top: 75, left: 70}}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
