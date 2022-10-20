/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */

import React, { Component } from 'react';
import {
  View, Text, AsyncStorage, Alert,
} from 'react-native';
import base64 from 'react-native-base64';


class TestPage extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      height: '',
      weight: '',
      ethnicity: '',
    };
  }

  async componentDidMount() {
    try {
      const storedAge = await AsyncStorage.getItem('@myApp:age');
      const storedHeight = await AsyncStorage.getItem('@myApp:height');
      const storedWeight = await AsyncStorage.getItem('@myApp:weight');
      const storedEthnicity = await AsyncStorage.getItem('@myApp:ethnicity');

      this.setState({ age: storedAge });
      this.setState({ height: storedHeight });
      this.setState({ weight: storedWeight });
      this.setState({ ethnicity: storedEthnicity });

      console.log(storedAge);
    } catch (error) {
      Alert.alert('Error', 'There was an error.');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.age}</Text>
        <Text style={styles.title}>{this.state.height}</Text>
        <Text style={styles.title}>{this.state.weight}</Text>
        <Text style={styles.title}>{this.state.ethnicity}</Text>
        <Text style={styles.title}>{base64.encode(this.state.age)}</Text>
        {/* Decoding values <Text style={styles.title}>{base64.decode('MTA=')}</Text> */}
      </View>
    );
  }
}

const styles = {

  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
};

export default TestPage;
