import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

let NUMBER_OFF_CITIES = 3;

export default class SearchByCountryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {country: ''};
  }

  render() {
    return(
      <View>

        <Text style={styles.title}>
          SEARCH BY COUNTRY
        </Text>


        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter a country"
            onChangeText={(input) => this.setState({country: input})}
            value={this.state.city}
          />
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            title="SEARCH BY COUNTRY"
            onPress={() => {
                let cities = getCitiesIn(this.state.country)
                cities.then((cities) => {
                  console.log(cities)
                  this.props.navigation.navigate('Cities', {towns: cities, country: this.state.country});
                });
              }
            }
          >
            <Image
              source={require('./../assets/magnifying-glass.png')}
              style={styles.image}
            />

          </TouchableOpacity>
          </View>

      </View>
    );
}
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 100,
    fontSize: 30,
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
  },
  image: {
    paddingTop: 100,
    width: 50,
    height: 50,
    resizeMode: 'contain'
}
})

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
