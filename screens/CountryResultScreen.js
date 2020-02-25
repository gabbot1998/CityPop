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
            <Button
              style={styles.button}
              title={item[0]}
              onPress={() => { this.props.navigation.navigate('Population', {city: item[0], population: item[1],})}}
            >
            </Button>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 170,
    fontSize: 40,
    alignItems: 'center',
  },

  button: {
    width: 300,
    height: 55,
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
