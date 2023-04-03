import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './Screens/Home';
import Boarding from './Screens/Boarding';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Forgot from './Screens/Forgot';
import SignIn from './Screens/SignIn';
import SetPass from './Screens/SetPass'
import Homeee from './Screens/Homeee';
import Catagory from './Screens/Catagory';
import Discover from './Screens/Discover';
import Search from './Screens/Search';
import Challenge from './Screens/Challenge';
import Profile from './Screens/Profile';
import Profile1 from './Screens/Profile1';
import Message from './Screens/Message';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        header: ()=> null
    }}
      initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="SetPass" component={SetPass}/>
        <Stack.Screen name="Homeee" component={Homeee}/>
        <Stack.Screen name="Catagory" component={Catagory}/>
        <Stack.Screen name="Discover" component={Discover}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Challenge" component={Challenge}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Profile1" component={Profile1}/>
        <Stack.Screen name="Message" component={Message}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
