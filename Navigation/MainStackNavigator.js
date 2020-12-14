import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator}from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Details from '../Screens/Details';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab= createBottomTabNavigator();
function MainStackNavigator() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{ title: 'Home Screen' }}
    //     />
    //     <Stack.Screen
    //       name="Details"
    //       component={Details}
    //       options={{ title: 'Detail Screen' }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  //   <NavigationContainer>
  //   <Drawer.Navigator initialRouteName="Home">
  //     <Drawer.Screen name="Home" component={Home} />
  //     <Drawer.Screen name="Details"component={Details}/>
  //   </Drawer.Navigator>
  // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Details" component={Details}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;