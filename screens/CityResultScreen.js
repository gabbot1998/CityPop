import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default class CityResultScreen extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    let pop = this.props.route.params.population
    return(
      <View>
        <Text style={styles.title}>
          {this.props.route.params.city}
        </Text>
        <View style={styles.container}>
          <Text style={styles.population}>
          Population
          </Text>

          <Text style={styles.number}>
            {pop}
          </Text>
        </View>

      </View>
    );
}
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 200,
    fontSize: 30,
  },
  population: {
    fontSize: 16,
    paddingBottom: 20,
    textAlign: 'center',
  },
  number: {
    textAlign: 'center',
    paddingBottom: 100,
    fontSize: 40,
  },
  container: {
    alignItems: 'center',
  },

})
