import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'
import globalStyles from "./styles"

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const {email, password} = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage: error.message}))
    }

    render() {
        return (
            // <View style={globalStyles.container}>
                <View style={styles.container}>
                    <Text style={styles.greeting}>{`Hello again.\nWelcome back.`}</Text>

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={styles.inputTitle}>Email Address</Text>
                            <TextInput style={styles.input}
                                       autoCapitalize="none"
                                       onChangeText={email => this.setState({email})}
                                       value={this.state.email}
                            ></TextInput>
                        </View>

                        <View style={{marginTop: 32}}>
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput style={styles.input}
                                       secureTextEntry
                                       autoCapitalize="none"
                                       onChangeText={password => this.setState({password})}
                                       value={this.state.password}
                            ></TextInput>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={{color: "#FFF", fontWeight: "500"}}>Sign in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignSelf: "center", marginTop: 32}}
                                      onPress={() => this.props.navigation.navigate("Register")}>
                        <Text style={{color: "#414959", fontSize: 13}}>
                            New to Pacibaby? <Text style={{fontWeight: "500", color: "#42B6C7"}}>Sign up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#42B6C7",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#42B6C7",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
});