import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default class CityResultScreen extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return(
      <View>
      <Text>
        {this.props.route.params.city}
        {this.props.route.params.population}
      </Text>
      </View>
    );
}
}
