import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import {NavigationContainer} from "@react-navigation/native";
import Login from './Login';
import SignUp from './Signup';
import Dash from './Dash'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Dash" component={Dash} />
    </Stack.Navigator>
  );
}


function App(props) {
return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer> 
      );
}

export default App;