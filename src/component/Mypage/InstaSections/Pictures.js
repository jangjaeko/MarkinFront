import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import issue1 from '../../../images/issue1.png';
import Time from '../../../images/Time.png';
import filterimage from '../../../icons/filter.png';
import FilterModal from '../InstaModal/FilterModal';

export default function Pictures() {
  const [isModal, setisModal] = useState(false);
  const [Sort, setSort] = useState(1);
  const [SortText, setSortText] = useState('최신순');
  return (
    <>
      <TouchableOpacity
        style={styles.currentView}
        onPress={() => setisModal(true)}>
        <Image
          source={filterimage}
          style={{width: 10, height: 10, marginTop: 6, marginRight: 5}}
        />
        <Text style={{fontFamily: 'NotoSansKR-Regular'}}>{SortText}</Text>
      </TouchableOpacity>

      <FilterModal
        isModal={isModal}
        setisModal={setisModal}
        Sort={Sort}
        setSort={setSort}
        setSortText={setSortText}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: '100%'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'yellow',
                aspectRatio: 1,
                borderWidth: 1,
                borderColor: '#EBEBEC',
              }}>
              <Image source={issue1} style={{width: '100%', height: '100%'}} />
              {/* <View style={{zIndex: 10, position: 'absolute'}}>
            <Image source={Time} style={{width: 50, height: 50}} />
          </View> */}
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#EBEBEC',
                aspectRatio: 1,
                //가로 세로 비율
              }}></View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'green',
                borderWidth: 1,
                borderColor: '#EBEBEC',
                aspectRatio: 1,
              }}></View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'yellow',
                aspectRatio: 1,
                borderWidth: 1,
                borderColor: '#EBEBEC',
              }}></View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#EBEBEC',
              }}></View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'green',
                borderWidth: 1,
                borderColor: '#EBEBEC',
              }}></View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'yellow',
                aspectRatio: 1,
                borderWidth: 1,
                borderColor: '#EBEBEC',
              }}></View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#EBEBEC',
                aspectRatio: 1,
              }}></View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'green',
                borderWidth: 1,
                borderColor: '#EBEBEC',
                aspectRatio: 1,
              }}></View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'yellow',
                aspectRatio: 1,
                borderWidth: 1,
                borderColor: '#EBEBEC',
                aspectRatio: 1,
              }}></View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#EBEBEC',
                aspectRatio: 1,
              }}></View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'green',
                borderWidth: 1,
                borderColor: '#EBEBEC',
                aspectRatio: 1,
              }}></View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  currentView: {
    flexDirection: 'row',
    marginLeft: '80%',
    marginTop: 10,
    marginBottom: 10,
  },
});
