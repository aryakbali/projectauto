import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator,createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './components/screens/Explore'
import Saved from './components/screens/Saved'
import Inbox from './components/screens/inbox'
import Deals from './components/screens/Deals'
import LoginScreen from './components/screens/LoginScreen'
import Profile from './components/screens/Profile'
const App = createBottomTabNavigator({
  LoginScreen: { screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: 'Login',
}},

  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'MY BOOKINGS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-calendar" color={tintColor} size={24} />
      )
    }
  },
  Deals: {
    screen: Deals,
    navigationOptions: {
      tabBarLabel: 'DEALS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-bonfire" color={tintColor} size={24} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  }

  }, {
    tabBarOptions: {
      activeTintColor: 'grey',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#0B3364',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'white',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })



 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;