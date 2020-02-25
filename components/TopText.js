import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class TopText extends Component {
  render() {
    return (
      <TopText>
        <Text style={{fontSize: 20}}>{this.props.children}</Text>
      </TopText>
    );
  }
}

const styles = StyleSheet.create({
  topText: {
    textAlign: 'center',
    fontSize: 40,
  },
});
