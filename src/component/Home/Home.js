import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Home = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        <Text style={{fontFamily: 'NotoSansKR-Medium'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ImagePicker');
        }}>
        <Text>ImagePicker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Main');
        }}>
        <Text>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('YourFeed');
        }}>
        <Text>YourFeed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Ranking')}>
        <Text>Ranking</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('EnterPage')}>
        <Text>EnterPage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Alarm')}>
        <Text>Alarm</Text>
      </TouchableOpacity>
      <Icon name="instagram" size={30} color="#111" />
    </View>
  );
};

export default Home;
