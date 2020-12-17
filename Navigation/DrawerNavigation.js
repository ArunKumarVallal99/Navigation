import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator}from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Profile from "../Screens/Profile";
import   Details from "../Screens/Details";
import Home from "../Screens/Home";

function DrawerNavigation(props) {
  const Drawer=createDrawerNavigator();
  const { navigation } = props;
  return (
  <Drawer.Navigator >
     <Drawer.Screen name="Home" component={Home} /> 
     <Drawer.Screen name="Details" component={Details} />
    <Drawer.Screen name="Profile" component={Profile}/> 
  </Drawer.Navigator>
  );
}

export default DrawerNavigation;