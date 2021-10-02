import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FaceBookScreen from './screens/fb';
import InstagramScreen from './screens/in';

export default function App() {
  
  return (
   <AppContainer/>
  );
  }

  const TabNavigator = createBottomTabNavigator({
    FaceBookScreen: {screen: FaceBookScreen},
    InstagramScreen: {screen: InstagramScreen},
  })
  const AppContainer =  createAppContainer(TabNavigator);
  