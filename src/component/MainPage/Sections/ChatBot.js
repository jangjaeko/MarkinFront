import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import chatBotIcon from '../../../icons/chatbot.png';
export default function ChatBot() {
  return (
    <View style={styles.outView}>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 18}}>
        <Text style={{color: '#FD780F', fontSize: 20, fontWeight: 'bold'}}>
          챗봇
        </Text>
        <Text style={{fontSize: 20}}>에게 </Text>
      </View>
      <View style={{marginLeft: 20, marginTop: 5}}>
        <Text style={{fontSize: 20}}>계정 관리 알람 받으세요 :)</Text>
      </View>
      <Image
        source={chatBotIcon}
        style={{
          width: 40,
          height: 40,
          position: 'absolute',
          right: 20,
          top: 24,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    width: '90%',
    height: 100,
    marginLeft: '5%',
    borderRadius: 10,
    borderColor: '#111111',
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
  },
});
