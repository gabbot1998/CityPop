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
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 100,
    fontSize: 40,
    alignItems: 'center',
  },

  button: {
    width: 300,
    height: 60,
    padding: 10,
  },

  container: {
    alignItems: 'center',
  }
});
