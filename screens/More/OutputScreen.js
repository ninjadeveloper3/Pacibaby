import React from 'react';
import {AsyncStorage, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Pacibabyrs} from '../../assets/data/data';
import PacibabyrCards from '../src/PacibabyrCards';
import Popup from '../src/Popup';

const styles = StyleSheet.create({
    titleText: {
        marginTop: 15,
        fontSize: 24,
    },
    divContainer: {
        marginTop: 0,
        height: 80,
        fontSize: 20,
        backgroundColor: '#F0F0F0',
    },
    header: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
    },
    buttonContainer: {
        backgroundColor: '#42B6C7',
        borderRadius: 10,
        width: 350,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'MyriadPro-Regular',
    },
    scrollContent: {
        flexDirection: 'row',   // arrange posters in rows
        flexWrap: 'wrap',       // allow multiple rows
    },
});

export default class OutputScreen extends React.Component {
    state = {
        popupIsOpen: false,
        bulb: 2,
        shield: 'Regular',
        filteredData: Pacibabyrs.filter(Pacibabyr => (Pacibabyr.bulbSize === 2 && Pacibabyr.shieldType === 'Regular'))
    }

    componentDidMount() {
        let a;
        AsyncStorage.getItem('@myApp:api_returned_bulb_size')
            .then(value => {
                console.log("update now + " + value)
                this.setState({bulb: value});
                const newB = Pacibabyrs.filter(Pacibabyr => (Pacibabyr.bulbSize == value && Pacibabyr.shieldType === 'Regular'));
                this.setState({filteredData: newB});
                console.log("filtered data -->",newB);
            })
            .done();
        AsyncStorage.getItem('@myApp:api_returned_shield_type')
            .then(value => {
        //         console.log("updated now + " + value)
        //         const newB = Pacibabyrs.filter(Pacibabyr => (Pacibabyr.bulbSize === 1 && Pacibabyr.shieldType === 'Regular'));
        //         this.setState({shield: value});
        //         this.setState({filteredData: newB});
            })
            .done();
    }

    openPopup = (Pacibabyr) => {
        this.setState({
            popupIsOpen: true,
            Pacibabyr,
        });
    }

    closePopup = () => {
        this.setState({
            popupIsOpen: false,
        });
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView>
                    <View style={styles.divContainer}>
                        <Text style={{
                            marginTop: 30,
                            color: 'black',
                            marginLeft: 20,
                            fontSize: 24,
                            fontWeight: 'bold',
                            fontFamily: 'MyriadPro-Regular'
                        }}>
                            Recommended Pacibabyrs
                        </Text>
                    </View>
                    <View>

                        <View style={styles.container}>
                            <ScrollView
                                contentContainerStyle={styles.scrollContent}
                                // Hide all scroll indicators
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                            >
                                {/* {this.state.filteredData.map((Pacibabyr, index) => (
                                {Pacibabyrs.filter((Pacibabyr) => (Pacibabyr.bulbSize === this.props.navigation.getParam('api_returned_bulb_size') && Pacibabyr.shieldType === this.props.navigation.getParam('api_returned_shield_type'))) */}

                                {this.state.filteredData.map((Pacibabyr, index) => (
                                    <PacibabyrCards
                                        Pacibabyr={Pacibabyr}
                                        onOpen={this.openPopup}
                                        key={index}
                                    />))}
                            </ScrollView>
                        </View>

                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('BrandsLinks');
                            }}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>More Name Brands!</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Popup
                    Pacibabyr={this.state.Pacibabyr}
                    isOpen={this.state.popupIsOpen}
                    onOpen={this.openPopup}
                    onClose={this.closePopup}
                />
            </View>
        );
    }
}