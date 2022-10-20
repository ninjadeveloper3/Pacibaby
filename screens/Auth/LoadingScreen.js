import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import * as firebase from 'firebase'
import globalStyles from "./styles"

export default class LoadingScreen extends React.Component {
    // componentDidMount() {
    //     firebase.auth().onAuthStateChanged(user => {
    //         this.props.navigation.navigate(user ? "App" : "Auth");
    //     })
    // }

    componentDidMount() {
        // firebase.auth().onAuthStateChanged(User => {
        //     this.props.navigation.navigate(User ? "App" : "Auth");
        // })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={globalStyles.subsubTitle}>Loading...</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})