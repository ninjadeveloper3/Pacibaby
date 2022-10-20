/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';


const styles = StyleSheet.create({
  navBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#42B6C7',
    marginTop: 20,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#42B6C7',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#42B6C7',
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    backgroundColor: '#42B6C7',
  },
  MainContainer: {
    backgroundColor: '#42B6C7',
    flex: 1,
  },
  TextStyle: {
    fontSize: 20,
    fontFamily: 'MyriadPro-Regular',
    color: '#fff',
  },
  icon: {
    textAlign: 'left',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop: 10,
  },
});

export default class ResultsLinks extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'MinionPro-BoldDisp': require('../../assets/fonts/MinionPro-BoldDisp.ttf'),
      'MyriadPro-Light': require('../../assets/fonts/MyriadPro-Light.ttf'),
      'MyriadPro-Regular': require('../../assets/fonts/MyriadPro-Regular.ttf'),
      'SpaceMono-Regular': require('../../assets/fonts/SpaceMono-Regular.ttf'),
    });
    // eslint-disable-next-line react/no-unused-state
    this.setState({ loading: false });
  }

  render() {
    return (

      <View style={styles.MainContainer}>
        <View style={styles.navBar}>
          <View style={styles.leftContainer}>
            <Text style={[styles.text, { textAlign: 'left' }]}>
              <MaterialIcons name="chevron-left" size={42} color="white" style={styles.icon} onPress={() => this.props.navigation.navigate('LaundryScreen')} />
            </Text>
          </View>
          <Text style={styles.TextStyle}>
            {this.props.navigation.getParam('name', 'Pacibaby')}
          </Text>
          <View style={styles.rightContainer}>
            <View style={styles.rightIcon} />
          </View>
        </View>
        <WebView
          source={{ uri: this.props.navigation.getParam('link', 'https://www.google.com') }}
        />
      </View>
    );
  }
}
