import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default class SearchByCityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {city: '', population: ''};
  }

  render() {
    return(
      <View>

        <Text style={styles.title}>
        SEARCH BY CITY
        </Text>


        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Entera a city"
            onChangeText={(input) => this.setState({city: input})}
            value={this.state.city}
          />
        </View>


        <View style={styles.container}>
          <TouchableOpacity
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

function getCityPopulation(city) {
  return fetch('http://api.geonames.org/searchJSON?name=' + city +'&featureClass=P&maxRows=1&username=weknowit')
    .then((response) => response.json())
    .catch((e) => {
      console.error(e);
    })

}
