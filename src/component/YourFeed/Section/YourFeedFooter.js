import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import calendaricon from '../../../icons/calendaricon.png';
import campaign from '../../../icons/campaign.png';
import home from '../../../icons/home.png';
import managers from '../../../icons/managers.png';
import myfeed from '../../../icons/myfeed.png';

export default function YourFeedFooter(props) {
  return (
    <View style={{height: 80}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.navigateToMain()}
          style={{width: '20%'}}>
          <View style={{alignItems: 'center'}}>
            <Image source={home} style={{width: 20, height: 20}} />
            <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{width: '20%', alignItems: 'center', opacity: 0.5}}>
          <Image source={managers} style={{width: 20, height: 20}} />
          <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
            Manager
          </Text>
        </View>
        <View style={{width: '20%', alignItems: 'center', opacity: 0.5}}>
          <Image source={campaign} style={{width: 20, height: 20}} />
          <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
            Campaign
          </Text>
        </View>
        <View style={{width: '20%', alignItems: 'center', opacity: 0.5}}>
          <Image source={calendaricon} style={{width: 20, height: 20}} />
          <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
            Calendar
          </Text>
        </View>
        <View style={{alignItems: 'center', width: '20%', opacity: 0.5}}>
          <Image source={myfeed} style={{width: 20, height: 20}} />
          <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
            Myfeed
          </Text>
        </View>
      </View>
    </View>
  );
}
