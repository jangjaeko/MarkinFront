import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from '../Icons/Icons';

export default function MainHeader(props) {
  return (
    <>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          onPress={() => props.navigateToHome()}
          style={{width: 20, height: 20}}>
          <Icons.Feather
            name="search"
            size={20}
            color="#111"
            style={{position: 'absolute', left: 30, top: 0}}
          />
        </TouchableOpacity>
        <Text style={styles.Logo}>MARKIN</Text>
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
        <Text style={{position: 'absolute', right: 59, top: 35}}>Ranking</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Logo: {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{translateX: -27}, {translateY: 0}],
  },
});
