import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 2, rows = 3;

export default class PacibabyrCards extends Component {
  // Component prop types
  static propTypes = {
    // Movie object with title, genre, and poster
    Pacibabyr: PropTypes.object.isRequired,
    // Called when user taps on a poster
    onOpen: PropTypes.func.isRequired,
  }
  render() {
    const { Pacibabyr, Pacibabyr: { name, company, imageURI }, onOpen } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(Pacibabyr)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageURI }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>{name}</Text>
        <Text style={styles.genre} numberOfLines={1}>{company}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject
  },
  title: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center'

  },
  genre: {
    color: '#000',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
    marginTop: 3,
  },
});