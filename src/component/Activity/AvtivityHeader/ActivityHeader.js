import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from '../../Icons/Icons';

export default function ActivityHeader(props) {
  const handlefocusHome = () => {
    props.setStateChange(1);
  };
  const handlefocusALL = () => {
    props.setStateChange(2);
  };
  //   const handlefocusRanking = () => {
  //     props.setstateChange(3);
  //   };
  return (
    <View style={{width: '100%'}}>
      <View style={{paddingTop: 10, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.navigateToSearch()}
          style={{flex: 1}}>
          <Icons.Feather
            name="search"
            size={20}
            color="#111"
            style={{left: 30, top: 0}}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={styles.Logo}>MARKIN</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => props.navigateToAlarm()}
            style={{paddingLeft: 50}}>
            <Icons.Feather name="bell" size={20} color="#111" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigateToMessage()}
            style={{marginLeft: 15}}>
            <Icons.Ionicons
              name="md-paper-plane-outline"
              size={20}
              color="#111"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', width: '100%', paddingTop: 10}}>
        <TouchableOpacity onPress={handlefocusHome}>
          {props.stateChange === 1 ? (
            <View style={styles.focusView}>
              <Text style={styles.focusText}>홈</Text>
            </View>
          ) : (
            <View style={{height: 50, justifyContent: 'center', width: 190}}>
              <Text style={styles.greyText}>홈</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handlefocusALL}>
          {props.stateChange === 2 ? (
            <View style={styles.focusView}>
              <Text style={styles.focusText}>전체활동</Text>
            </View>
          ) : (
            <View style={{height: 50, justifyContent: 'center', width: 190}}>
              <Text style={styles.greyText}>전체활동</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    textAlign: 'center',
    top: 0,
    transform: [{translateX: 0}, {translateY: 0}],
  },
  greyText: {
    opacity: 0.5,
    textAlign: 'center',
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 16,
  },
  focusView: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  focusText: {
    textAlign: 'center',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
  },
});
