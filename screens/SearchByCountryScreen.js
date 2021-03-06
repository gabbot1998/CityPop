import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, ActivityIndicator} from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Modal, { ModalContent } from 'react-native-modals';

let NUMBER_OFF_CITIES = 3;

export default class SearchByCountryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {country: '', loading: <View style={{height: 36}}/>, modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  parseCities(cities) {
    let temp = {}

    for(let city in cities.geonames){
      temp[cities.geonames[city].name] = cities.geonames[city].population
    }

    return temp;

  }

  getCitiesIn(country) {
    return fetch('http://api.geonames.org/searchJSON?name=' + country +'&maxRows=1&username=weknowit')
      .then((response) => response.json())
      .then((re) => this.getCitiesFromCountryCode(JSON.stringify(re.geonames[0].countryCode)))
      .then((re) => this.parseCities(re))
  }

  getCitiesFromCountryCode(countryCode) {
    return fetch('http://api.geonames.org/searchJSON?country=' + countryCode + '&featureClass=P&maxRows=' + NUMBER_OFF_CITIES + '&orderby=population&username=weknowit')
    .then((response) => response.json())
  }

  handleSearch(){ if (this.state.country === ''){
    } else {
        this.setState({loading: <ActivityIndicator size = "large" />})
        this.getCitiesIn(this.state.country)
        .catch((e) => this.setModalVisible(!this.state.modalVisible))
        .then((cities) => {
          this.props.navigation.navigate('Cities', {towns: cities, country: this.state.country});
          this.setState({loading: <View style={{height: 36}}/>})
        });
      }

    }

  render() {
    return(
      <View>


        <Modal visible={this.state.modalVisible}>
          <ModalContent style={styles.container}>
            <Text style={styles.modalText}>no such country</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {this.setState({modalVisible: false})}}
            >
              <Text style={styles.modalButtonText}>Ok</Text>
            </TouchableOpacity>
          </ModalContent>
        </Modal>

        <Text style={styles.title}>
          SEARCH BY COUNTRY
        </Text>

        {this.state.loading}

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            returnKeyType="search"
            placeholder="Enter a country"
            onChangeText={(input) => this.setState({country: input})}
            onSubmitEditing={() => {this.handleSearch()} }
            value={this.state.country}
          />
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            title="SEARCH BY COUNTRY"
            onPress={() => {this.handleSearch()} }
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
  },
  modalButton: {
    width: 100,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    justifyContent: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    color: "white"

  },
  modalText: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 20,
  }
})
