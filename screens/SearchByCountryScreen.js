import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default class SearchByCountryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {country: 'United Kingdom'};
  }

  render() {
    return(
      <View>

        <TextInput
          style={{height: 50, fontSize: 30,}}
          placeholder="Entera a country name"
          onChangeText={(input) => this.setState({country: input})}
          value={this.state.city}
        />

        <Button
          title="SEARCH BY COUNTRY"
          onPress={() =>
            getCityPopulation(this.state.city)
          }
        />

      </View>
    );
}
}
function getCityPopulation(city) {
  return fetch('http://api.geonames.org/searchJSON?q=' + city +'&maxRows=1&username=weknowit')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.geonames[0].population);
    })
    .catch((e) => {
      console.error(e);
    })
}
