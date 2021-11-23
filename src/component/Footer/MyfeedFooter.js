import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import calendaricon from '../../icons/calendaricon.png';
import campaign from '../../icons/campaign.png';
import home from '../../icons/home.png';
import managers from '../../icons/managers.png';
import myfeed from '../../icons/myfeed.png';

export default function MyfeedFooter(props) {
  return (
    <View style={{height: 80}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.navigateToMain()}
          style={styles.unfocusSpace}>
          <Image source={home} style={{width: 20, height: 20}} />
          <Text style={styles.underText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.unfocusSpace}>
          <Image source={managers} style={{width: 20, height: 20}} />
          <Text style={styles.underText}>Manager</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.unfocusSpace}>
          <Image source={campaign} style={{width: 20, height: 20}} />
          <Text style={styles.underText}>Campaign</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.unfocusSpace}>
          <Image source={calendaricon} style={{width: 20, height: 20}} />
          <Text style={styles.underText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => props.navigateToMyFeed()}
          style={styles.focusSpace}>
          <Image source={myfeed} style={{width: 20, height: 20}} />
          <Text style={styles.focusText}>Myfeed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  underText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Roboto-Light',
  },
  focusText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Roboto-Medium',
  },
  focusSpace: {width: '20%', alignItems: 'center'},
  unfocusSpace: {width: '20%', alignItems: 'center', opacity: 0.5},
});
