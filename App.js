import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import HomeScreen from './screens/HomeScreen';
import SearchByCityScreen from './screens/SearchByCityScreen.js';
import SearchByCountryScreen from './screens/SearchByCountryScreen.js';
import CityResultScreen from './screens/CityResultScreen.js';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />

          <Stack.Screen
            name="Search by city"
            component={SearchByCityScreen}
          />

          <Stack.Screen
            name="Search by country"
            component={SearchByCountryScreen}
          />

          <Stack.Screen
            name="Population"
            component={CityResultScreen}
          />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
  }
});
