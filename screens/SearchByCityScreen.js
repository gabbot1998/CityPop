import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default class SearchByCityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {city: 'london', population: ''};
  }

  render() {
    return(
      <View>

        <TextInput
          style={{height: 50, fontSize: 30,}}
          placeholder="Entera a city name"
          onChangeText={(input) => this.setState({city: input})}
          value={this.state.city}
        />

        <Button
          title="SEARCH BY CITY"
          onPress={() => {
            getCityPopulation(this.state.city)
            .then((responseJson) => {
              this.setState({population: JSON.stringify(responseJson.geonames[0].population)});
              this.props.navigation.navigate('Population', {
                city: this.state.city,
                population: this.state.population,
              });
            });


            }
          }
        />

      </View>
    );
}
}
function getCityPopulation(city) {
  return fetch('http://api.geonames.org/searchJSON?q=' + city +'&maxRows=1&username=weknowit')
    .then((response) => response.json())
    .catch((e) => {
      console.error(e);
    })

}
