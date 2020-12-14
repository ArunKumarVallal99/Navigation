import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator}from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "../Screens/Profile";
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import TabNavigation from "./TabNavigation";
import DrawerNavigation from './DrawerNavigation';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab= createBottomTabNavigator();
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={TabNavigation}
        />
         {/* <Stack.Screen
          name="Draw"
          component={DrawerNavigation}
        />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;