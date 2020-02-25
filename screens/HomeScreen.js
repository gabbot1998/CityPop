import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import TopText from '../components/TopText';

export default function HomeScreen({navigation}) {

  return(
    <View >

      <Text style={styles.cityPop}>
      CityPop
      </Text>

      <Button
        title="SEARCH BY CITY"
        style={styles.button}
        onPress={() => navigation.navigate('Search by city')}
      />

      <Button
        title="SEARCH BY COUNTRY"
        style={styles.button}
        onPress={() => navigation.navigate('Search by country')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  cityPop: {
    textAlign: 'center',
    paddingBottom: 100,
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 300,
    padding: 5,
  },
});
