import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class Login extends Component{
    render(){
return(
    <View 
    style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Text>This is Login screen</Text>
    </View>
);
    }
}