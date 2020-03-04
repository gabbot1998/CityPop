import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default class SearchByCityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {city: '', population: '', loading: <View style={{height: 36}}/>, modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleSearch() { if (this.state.city === ''){
      } else {
        this.setState({loading: <ActivityIndicator size = "large" />})
        this.getCityPopulation(this.state.city)
        .then((re) => {
          this.setState({population: JSON.stringify(re.geonames[0].population)});
          this.props.navigation.navigate('Population', {
            city: this.state.city,
            population: this.state.population,
          });
          this.setState({loading: <View style={{height: 36}}/>})
        })
        .catch((e) => this.setModalVisible(!this.state.modalVisible))
      }
    }

    getCityPopulation(city) {
      return fetch('http://api.geonames.org/searchJSON?name=' + city +'&featureClass=P&maxRows=1&username=weknowit')
        .then((response) => response.json())
        .catch((e) => {
          console.error(e);
        })

    }

  render() {
    return(
      <View>

        <Text style={styles.title}>
        SEARCH BY CITY
        </Text>

        {this.state.loading}

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Entera a city"
            returnKeyType="search"
            onSubmitEditing={() => {this.handleSearch()}}
            onChangeText={(input) => this.setState({city: input})}
            value={this.state.city}
          />
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {this.handleSearch()}}
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
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 100,
    fontSize: 35,
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
