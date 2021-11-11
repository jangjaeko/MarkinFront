import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';

export default function CategoryModal() {
  return (
    <Modal style={{justifyContent: 'flex-end', margin: 0}} isVisible={false}>
      <View
        style={{
          height: 300,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text>asda</Text>
      </View>
    </Modal>
  );
}
