import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './navigation/StackNavigator'

export default class App extends Component{
    render(){
return(
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
);
    }
}