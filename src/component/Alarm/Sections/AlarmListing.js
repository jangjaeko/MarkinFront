import React from 'react';
import {View, Text} from 'react-native';
import AlarmList from './AlarmList';
export default function AlarmListing() {
  return (
    <>
      {AlarmList.reverse().map(item => (
        <View key={item.id}>
          {item.Sort === 0 && (
            <View>
              <Text>000</Text>
            </View>
          )}
          {item.Sort === 1 && (
            <View>
              <Text>111</Text>
            </View>
          )}
          {item.Sort === 2 && (
            <View>
              <Text>2</Text>
            </View>
          )}
          {item.Sort === 3 && (
            <View>
              <Text>3</Text>
            </View>
          )}
          {item.Sort === 4 && (
            <View>
              <Text>4</Text>
            </View>
          )}
        </View>
      ))}
    </>
  );
}
// 역순으로 출력 혹은 아래로 내려가고 위쪽으로 쌓이도록
