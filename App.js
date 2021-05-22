import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/page/Home';
import Login from './src/page/Login';
import Register from './src/page/Register';
import MainMenu from './src/page/MainMenu';
import AddReport from './src/page/AddReport';
import HistoryReport from './src/page/HistoryReport';
import Map from './src/page/Map';

const Stack = createStackNavigator();

class App extends Component {
  
  render() {
    return (
      <Provider store = {store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Home}/>
            <Stack.Screen name = "Login" component = {Login}/>
            <Stack.Screen name = "Register" component = {Register}/>
            <Stack.Screen name = "MainMenu" component = {MainMenu}/>
            <Stack.Screen name = "AddReport" component = {AddReport}/>
            <Stack.Screen name = "HistoryReport" component = {HistoryReport}/>
            <Stack.Screen name = "Map" component = {Map}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }

}

export default App