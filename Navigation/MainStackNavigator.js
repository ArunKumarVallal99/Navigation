import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator}from '@react-navigation/drawer'

import Home from '../Screens/Home';
import Details from '../Screens/Details';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
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
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Details"component={Details}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

export default MainStackNavigator;