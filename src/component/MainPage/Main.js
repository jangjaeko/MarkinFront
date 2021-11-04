import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from '../Icons/Icons';
import DayChange from './Sections/DayChange';
export default function Main(props) {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.HeaderStyle}>
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            style={{width: 20, height: 20}}>
            <Icons.Feather
              name="search"
              size={20}
              color="#111"
              style={{position: 'absolute', left: 30, top: 0}}
            />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: [{translateX: -27}, {translateY: 0}],
            }}>
            MARKIN
          </Text>
          <Icons.Feather
            name="bell"
            size={20}
            color="#111"
            style={{position: 'absolute', right: 60, top: 0}}
          />
          <Icons.Ionicons
            name="md-paper-plane-outline"
            size={20}
            color="#111"
            style={{position: 'absolute', right: 26, top: 0}}
          />
        </View>
        <View>
          <Text style={{position: 'absolute', left: 75, top: 35}}>Home</Text>
          <Text style={{position: 'absolute', left: 178, top: 35}}>Feed</Text>
          <Text style={{position: 'absolute', right: 59, top: 35}}>
            Ranking
          </Text>
        </View>
      </View>
      {/* Header */}

      {/* DayChange */}
      <View style={{width: '100%', marginTop: 20}}>
        <DayChange />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    height: 180,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(212, 212, 212)',
  },
});
