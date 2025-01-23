import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Activity from './src/screen/Activity';
import Profile from './src/screen/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Status from './src/screen/Status';
import FriendProfile from './src/screen/FriendProfile';
import EditProfile from './src/screen/EditProfile';
import Ionic from 'react-native-vector-icons/Ionicons';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={route => ({
          tabBarHideOnKeyboard: true,
          tabBarshowLabel: false,
          headerShown: false,
          tabBarStyle: {
            tabBarStyle: 70,
          },
          TabBarIcon: ({focused, size, color}) => {
            let iconName; //route는 screenOtion에서 props로 받아오는 것!
            color = 'black';
            if (route.name === 'Home') {
              iconName = focused ? 'home-Sharp' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Bottom" component={BottomTabScreen} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="FriendProfile" component={FriendProfile} />
        <Tab.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
