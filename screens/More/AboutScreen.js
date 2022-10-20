/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
  },
});

class AboutScreen extends Component {
  static navigationOptions = {
    title: 'Terms and Conditions',
    headerStyle: {
      backgroundColor: '#42B6C7',
    },
    headerTintColor: 'white',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}> This application uses a patented algorithm designed to provide the perfect size Pacibabyr for your little one!</Text>
      </View>
    );
  }
}

export default AboutScreen;
