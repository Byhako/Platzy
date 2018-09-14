import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'

import Home from './src/screems/Home'
import Login from './src/screems/Login'
import About from './src/screems/About'
import Profile from './src/screems/Profile'

const AppNavigator = createStackNavigator({
  Home: Home,
  Login: Login,
  About: About,
  Profile: Profile,
})

export default AppNavigator
