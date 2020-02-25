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
    let cityPopList = createCitiesList(this.props.route.params)

    return(
      <View>
      <FlatList
          data={cityPopList}
          renderItem={({item}) =>
            <Button
              title={item[0]}
              onPress={() => { this.props.navigation.navigate('Population', {city: item[0], population: item[1],})}}
            >
            </Button>}
        />
      </View>
    );
}
}

function createCitiesList(cities) {
  let list = []

  for(city in cities) {
    list.push([city, cities[city]])
  }

  return list
}
