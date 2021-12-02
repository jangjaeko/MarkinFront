import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
export default function FSlider() {
  const [multiSliderValue, setMultiSliderValue] = useState([1, 6]);

  const multiSliderValuesChange = values => setMultiSliderValue(values);

  return (
    <View style={{marginLeft: '10%', width: '90%', marginTop: 130}}>
      <MultiSlider
        isMarkersSeparated={true}
        markerStyle={styles.markst}
        selectedStyle={{
          backgroundColor: '#7553FF',
        }}
        trackStyle={{
          backgroundColor: '#F1F1F1',
          height: 15,
          borderRadius: 10,
        }}
        touchDimensions={{
          height: 40,
          width: 40,
          borderRadius: 20,
          slipDisplacement: 40,
        }}
        values={[multiSliderValue[0], multiSliderValue[1]]}
        sliderLength={300}
        onValuesChange={multiSliderValuesChange}
        step={1}
        min={1}
        max={6}
        shoSteps={true}
        allowOverlap={true}
        showStepLabels={true}
        snapped={true}
      />
      <View style={{width: 300, flexDirection: 'row'}}>
        <Text>1K</Text>
        <Text style={{marginLeft: '12%'}}>5K</Text>
        <Text style={{marginLeft: '13%'}}>10K</Text>
        <Text style={{marginLeft: '12%'}}>30K</Text>
        <Text style={{marginLeft: '11%'}}>50K</Text>
        <Text style={{marginLeft: '8%'}}>100K+</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  markst: {
    height: 30,
    width: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    marginTop: 10,
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
});
