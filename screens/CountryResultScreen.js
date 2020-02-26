import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default class CityResultScreen extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    let cityPopList = createCitiesList(this.props.route.params.towns)

    return(
      <View style={styles.container}>

      <Text style={styles.title}>
        {this.props.route.params.country}
      </Text>
      <FlatList
          data={cityPopList}
          renderItem={({item}) =>
            <View>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Population', {city: item[0], population: item[1],})}} >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{item[0]}</Text>
                </View>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 100,
    fontSize: 40,
  },

  button: {
    marginBottom: 10,
    marginTop: 10,
    width: 260,
    height: 40,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
  },

  container: {
    alignItems: 'center',
  }
});

function createCitiesList(cities) {
  let list = []

  for(city in cities) {
    list.push([city, cities[city]])
  }

  return list
}
