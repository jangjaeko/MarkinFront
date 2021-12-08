import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Cards from './Sections/Cards';
import SearchSetting from './Sections/SearchSetting';
import searchSet from '../../../images/searchSet.png';
import filterImage from '../../../icons/filter.png';
import SearchFilterModal from './Modals/SearchFilterModal';
export default function ActivityAll() {
  const [SortText, setSortText] = useState('최신순');
  const [SearchModalVis, setSearchModalVis] = useState(false);
  return (
    <View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.searchView}
          onPress={() => setSearchModalVis(!SearchModalVis)}>
          <Image source={searchSet} style={styles.searchImg} />
          <Text style={styles.searchText}>검색설정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterview}>
          <Image
            source={filterImage}
            style={{width: 10, height: 10, marginTop: 6, marginRight: 5}}
          />
          <Text style={{fontFamily: 'NotoSansKR-Regular'}}>{SortText}</Text>
        </TouchableOpacity>
        <SearchFilterModal
          SearchModalVis={SearchModalVis}
          setSearchModalVis={setSearchModalVis}
        />
      </View>
      <ScrollView>
        <View style={{marginBottom: '60%'}}>
          <Cards />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    borderRadius: 6,
    width: 80,
    height: 30,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  searchImg: {
    width: 15,
    height: 15,
    marginTop: 6,
    transform: [{rotate: '270deg'}],
    marginLeft: 3,
  },
  searchText: {
    color: '#424242',
    fontFamily: 'NotoSansKR-Regular',
    marginLeft: 3,
    marginTop: 3,
  },
  filterview: {
    flexDirection: 'row',
    position: 'absolute',
    right: '5%',
    top: 5,
  },
});
