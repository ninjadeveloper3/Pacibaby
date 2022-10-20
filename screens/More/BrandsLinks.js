/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  titleText: {
    marginTop: 15,
    fontSize: 24,
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  divContainer: {
    marginTop: 0,
    height: 80,
    fontSize: 20,
    backgroundColor: '#F0F0F0',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'MyriadPro-Regular',
  },
});

const list = [
  {
    title: 'Dr. Browns',
    link: 'https://www.buybuybaby.com/store/s/dr-browns-Pacibabyrs/_6-m-12-m/c19mX2Jpbk1pbmltdW1fQWdlX1RveXM6IjZtIC0gMTJtIg==?ta=typeahead&amp%3Bflyout=true&view=GRID',
  },
  {
    title: 'MAM',
    link: 'https://www.mambaby.com/shop/ca_en/Pacibabyrs/0-6-months.html',
  },
  {
    title: 'Nuby',
    link: 'https://www.nuby.com/usa/en/Pacibabyrs',
  },
  {
    title: 'NUK',
    link: 'https://www.buybuybaby.com/store/s/nuk-Pacibabyr?ta=typeahead&amp;flyout=true',
  },
  {
    title: 'Phillips Avent',
    link: 'https://www.buybuybaby.com/store/s/philips-avent-Pacibabyr?ta=typeahead&amp;flyout=true',
  },
  {
    title: 'Smilo',
    link: 'https://www.smilobaby.com/products/soothing',
  },
  {
    title: 'Tomy Boon',
    link: 'https://us.tomy.com/search/all/ages/6-9-months-223?search_api_views_fulltext=Pacibabyrs',
  },
  {
    title: 'Tommee Tippee',
    link: 'https://www.buybuybaby.com/store/s/tommee-tippee-Pacibabyr?ta=typeahead&amp;flyout=true',
  },
];

class BrandsLinks extends Component {
  render() {
    return (

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.divContainer}>
            <Text style={{ marginTop: 30, color: 'black', marginLeft: 20, fontSize: 24, fontWeight: 'bold', fontFamily: 'MyriadPro-Regular' }}>
              Pacibabyr Brands
            </Text>
          </View>
          <View style={styles.divContainer}>
            {
              list.map((item, i) => (
                <ListItem
                  Component={TouchableScale}
                  friction={90}
                  tension={100} // here TouchableScale
                  activeScale={0.95}
                  chevron
                  key={i}
                  title={item.title}
                  onPress={() => this.props.navigation.navigate('ResultsLinks', { link: item.link })}
                  bottomDivider
                />
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default BrandsLinks;
