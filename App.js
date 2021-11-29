import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/component/Home/Home';
import Login from './src/component/Login/Login';
import ImagePickerex from './src/component/ImagePicker/ImagePickerex';
import Main from './src/component/MainPage/Main';
import YourFeed from './src/component/YourPage/YourFeed';
import Ranking from './src/component/Ranking/Ranking';
import EnterPage from './src/component/SignIn/Enter/EnterPage';
import Search from './src/component/Search/Search';
import Alarm from './src/component/Alarm/Alarm';
import Message from './src/component/Message/Message';
import Feed from './src/component/MainPage/Feed/Feed';
import MyPage from './src/component/Mypage/MyPage';
import ChooseWay from './src/component/SignIn/ChooseWay/ChooseWay';
import Terms from './src/component/SignIn/Terms/Terms';
import PhonNum from './src/component/SignIn/PhonNum/PhonNum';
import Name from './src/component/SignIn/Name/Name';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ImagePicker"
          component={ImagePickerex}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="YourFeed"
          component={YourFeed}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ranking"
          component={Ranking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterPage"
          component={EnterPage}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Alarm"
          component={Alarm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChooseWay"
          component={ChooseWay}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhonNum"
          component={PhonNum}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
