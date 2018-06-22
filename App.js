import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { check, BMI } from './com/IBM';

var user = {
  name: 'Bùi Minh Đức',
  age: 24,
  W: 80,
  H: 1.62,
}


export default class App extends Component{
  render() {
    return (
      <View>
        <Text>
          {user.name}
        </Text>
        <Text>
          {user.age}
        </Text>
        <Text>
          {check(user.age)}
        </Text>
        <Text>
        {BMI(user.W, user.H)}
        </Text>

      </View>
    );
  }
}

