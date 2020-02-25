import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

let NUMBER_OFF_CITIES = 3;

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
          placeholder="Enter a country name"
          onChangeText={(input) => this.setState({country: input})}
          value={this.state.city}
        />

        <Button
          title="SEARCH BY COUNTRY"
          onPress={() => {
              let cities = getCitiesIn(this.state.country)
              cities.then((cities) => {
                console.log(cities)
                this.props.navigation.navigate('Cities', cities);
              });
            }
          }
        />

      </View>
    );
}
}

function parseCities(cities) {
  let temp = {}

  for(let city in cities.geonames){
    temp[cities.geonames[city].name] = cities.geonames[city].population
  }

  return temp;

}

function getCitiesIn(country) {
  return fetch('http://api.geonames.org/searchJSON?name=' + country +'&maxRows=1&username=weknowit')
    .then((response) => response.json())
    .then((re) => getCitiesFromCountryCode(JSON.stringify(re.geonames[0].countryCode)))
    .then((re) => parseCities(re))
    .catch((e) => console.error(e))
}

function getCitiesFromCountryCode(countryCode) {
  return fetch('http://api.geonames.org/searchJSON?country=' + countryCode + '&featureClass=P&maxRows=' + NUMBER_OFF_CITIES + '&orderby=population&username=weknowit')
  .then((response) => response.json())
  .catch((e) => console.error(e))
}
