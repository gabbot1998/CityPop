import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import TopText from '../components/TopText';

export default function HomeScreen({navigation}) {

  return(
    <View>
      <Text style={styles.title}>
        CityPop
      </Text>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search by city')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>SEARCH BY CITY</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          title="SEARCH BY COUNTRY"
          onPress={() => navigation.navigate('Search by country')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>SEARCH BY COUNTRY</Text>
          </View>

        </TouchableOpacity>
      </View>
    </View>
  );
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
