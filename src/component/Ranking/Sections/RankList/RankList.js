import React, {useState, useLayoutEffect} from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import filter from '../../../../icons/filter.png';
import CategoryModal from './modals/CatFolModal/CategoryModal';
import FollowerModal from './modals/FolNumModal/FollwerModal';
import RList from './RList';
import RTiltle from './RTiltle';
import Icons from '../../../Icons/Icons';
import Search from './Search/Search';
import SearchResult from './Search/SearchResult';
export default function RankList() {
  const [myWidth, setmyWidth] = useState(null);
  const [CatModalVis, setCatModalVis] = useState(false);
  const [FNumModalVis, setFNumModalVis] = useState(false);
  const [showCorF, setshowCorF] = useState(false);
  const [Sort, setSort] = useState(1);
  const [isSearch, setisSearch] = useState('');
  const handleSearch = event => {
    setisSearch(event);
  };
  const handleCatModlaVisable = () => {
    setshowCorF(false);
    setCatModalVis(!CatModalVis);
  };
  const handleFolwModalVisable = () => {
    setshowCorF(true);
    setCatModalVis(!CatModalVis);
  };
  const handleFNumModalVisable = () => {
    setFNumModalVis(!FNumModalVis);
  };
  const handleCorF = () => {
    setshowCorF(!showCorF);
  };

  useLayoutEffect(() => {
    alert('ww');
  }, []);

  return (
    <View>
      <Search
        isSearch={isSearch}
        setisSearch={setisSearch}
        handleSearch={handleSearch}
      />
      {/* {isSearch !== '' ? (
        <View showsVerticalScrollIndicator={false}>
          <SearchResult isSearch={isSearch} />
        </View>
      ) : ( */}
      <View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity
            style={styles.greyBtn}
            onPress={handleCatModlaVisable}>
            <Text style={styles.greyBtnText}>카테고리</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.greyBtn2}
            onPress={handleFolwModalVisable}>
            <Text style={styles.greyBtnText}>팔로워수</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', marginLeft: 150}}
            onPress={handleFNumModalVisable}>
            <View style={{opacity: 0.5, flexDirection: 'row'}}>
              <Image
                source={filter}
                style={{width: 12, height: 12, marginTop: 5}}
              />
              <Text style={styles.followerSoon}>팔로워순</Text>
            </View>
          </TouchableOpacity>
        </View>
        <CategoryModal
          CatModalVis={CatModalVis}
          handleCatModlaVisable={handleCatModlaVisable}
          showCorF={showCorF}
          handleCorF={handleCorF}
          setCatModalVis={setCatModalVis}
        />
        <FollowerModal
          handleFNumModalVisable={handleFNumModalVisable}
          setFNumModalVis={setFNumModalVis}
          FNumModalVis={FNumModalVis}
          Sort={Sort}
          setSort={setSort}
        />
        {/* 순위 타이틀 */}
        <RTiltle />
        {/* 순위 리스트 */}
        <ScrollView
          style={{marginTop: 20}}
          showsVerticalScrollIndicator={false}>
          <RList isSearch={isSearch} />
        </ScrollView>
      </View>
      {/* )} */}
    </View>
  );
}
const styles = StyleSheet.create({
  TitleText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  outView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    height: 70,
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
    justifyContent: 'center',
    marginBottom: 3,
  },
  greyBtn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EBEBEC',
    width: 60,
    height: 35,
    marginTop: -10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    opacity: 0.5,
  },
  greyBtn2: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EBEBEC',
    width: 60,
    height: 35,
    marginTop: -10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    opacity: 0.5,
  },
  greyBtnText: {
    fontSize: 12,
    fontFamily: 'NotoSansKR-Regular',
    textAlign: 'center',
  },
  followerSoon: {
    fontSize: 12,
    marginLeft: 0,
    fontFamily: 'NotoSansKR-Regular',
  },
});
