import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator}from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Profile from "../Screens/Profile";
import   Details from "../Screens/Details";
import Home from "../Screens/Home";
import DrawerNavigation from './DrawerNavigation';

function TabNavigation(props) {
  const Tab= createBottomTabNavigator();
  const { navigation } = props;
  return (
    
    <Tab.Navigator >
        
        <Tab.Screen name="Home" component={DrawerNavigation}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="Details" component={Details}/>
      </Tab.Navigator>
 
  );
}

export default TabNavigation;