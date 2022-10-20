import React, {Component} from "react";
import {
    AsyncStorage,
    Button,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Avatar, Divider} from "react-native-elements";

const initialState = {
    text: '',
    age: '',
    height: '',
    weight: '',
    ethnicity: '',
    show_Main_App: false,
    loading: true,
};

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    clearStates = () => {
        this.setState({
            age: '',
            height: '',
            weight: '',
            ethnicity: '',
        })
    }

    async componentDidMount() {
        // this.reset();
        // await AsyncStorage.removeItem("first_time");

        const value = await AsyncStorage.getItem('first_time');
        if (value !== null) {
            // We have data!!
            if (value == false) { // not first time user, show main app
                this.setState({show_Main_App: true, loading: false});
            }
        } else {
            this.setState({show_Main_App: false, loading: true});
            AsyncStorage.setItem('first_time', 'true').then(() => {
                alert("firt time true");
            })
        }
    }

    _saveValues = () => {
        let age = this.state.age;
        let height = this.state.height;
        let weight = this.state.weight;
        let ethnicity = this.state.ethnicity;

        if (age !== '' || weight !== '' || height !== '' || ethnicity !== '') {
            AsyncStorage.setItem("@myApp:age", this.state.age).then(
                age => {
                    this.setState({age: age});
                }
            );
            AsyncStorage.setItem("@myApp:height", this.state.height).then(
                height => {
                    this.setState({height: height});
                }
            );
            AsyncStorage.setItem("@myApp:weight", this.state.weight).then(
                weight => {
                    this.setState({weight: weight});
                }
            );
            AsyncStorage.setItem("@myApp:ethnicity", this.state.ethnicity).then(
                ethnicity => {
                    this.setState({ethnicity: ethnicity});
                }
            );
        }
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{flex: 1}}
            >
                <SafeAreaView style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <View style={styles.header}>
                                <Avatar
                                    source={require('../../assets/images/baby.png')}
                                    size="xlarge"
                                    rounded
                                    onPress={() => this.props.navigation.navigate('PhotoScreen')}
                                    activeOpacity={0.7}
                                />
                                <TextInput
                                    placeholder="Enter Name"
                                    underlineColorAndroid="transparent"
                                    style={styles.profileText}
                                    onChangeText={text => this.setState({text})}
                                    returnKeyType="done"
                                    value={this.state.text}
                                />
                            </View>

                            <View>
                                <View style={styles.textContainer}>
                                    <View style={{flex: 1}}>
                                        <Text style={styles.text}>Age (mo)</Text>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <TextInput
                                            placeholder="Type Here"
                                            keyboardType="numeric"
                                            underlineColorAndroid="transparent"
                                            style={styles.titleText}
                                            onChangeText={age => {
                                                this.setState({age: age});
                                            }}
                                            returnKeyType="done"
                                            value={this.state.age}
                                        />
                                    </View>
                                </View>

                                <Divider style={{height: 1, backgroundColor: '#E0E0E0'}}/>

                                <View style={styles.textContainer}>
                                    <View style={{flex: 1}}>
                                        <Text style={styles.text}>Height (in)</Text>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <TextInput
                                            placeholder="Type Here"
                                            keyboardType="numeric"
                                            underlineColorAndroid="transparent"
                                            style={styles.titleText}
                                            onChangeText={height => {
                                                this.setState({height: height});
                                            }}
                                            returnKeyType="done"
                                            value={this.state.height}
                                        />
                                    </View>
                                </View>

                                <Divider style={{height: 1, backgroundColor: '#E0E0E0'}}/>

                                <View style={styles.textContainer}>
                                    <View style={{flex: 1}}>
                                        <Text style={styles.text}>Weight (lbs)</Text>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <TextInput
                                            placeholder="Type Here"
                                            keyboardType="numeric"
                                            underlineColorAndroid="transparent"
                                            style={styles.titleText}
                                            onChangeText={weight => {
                                                this.setState({weight: weight});
                                            }}
                                            returnKeyType="done"
                                            value={this.state.weight}
                                        />
                                    </View>
                                </View>

                                <Divider style={{height: 1, backgroundColor: '#E0E0E0'}}/>

                                <View style={styles.textContainer}>
                                    <View style={{flex: 1}}>
                                        <Text style={styles.text}>Ethnicity</Text>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <TextInput
                                            placeholder="Type Here"
                                            underlineColorAndroid="transparent"
                                            style={styles.titleText}
                                            onChangeText={ethnicity => {
                                                this.setState({ethnicity: ethnicity});
                                            }}
                                            returnKeyType="done"
                                            value={this.state.ethnicity}
                                        />
                                    </View>
                                </View>

                                <Divider style={{height: 1, backgroundColor: '#E0E0E0'}}/>

                                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
                                    <Button
                                        title={'Clear All'}
                                        color={'#42B6C7'}
                                        size={45}
                                        onPress={this.clearStates}
                                    />
                                    <Button
                                        title={'Save'}
                                        color={'#42B6C7'}
                                        size={45}
                                        onPress={this._saveValues}
                                    />
                                </View>
                            </View>
                            <View style={{flex: 1}}/>
                        </View>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
    input: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 5,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 27,
    },

    header: {
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    divContainer: {
        marginTop: 350,
        height: 100,
        fontSize: 20,
        backgroundColor: '#F0F0F0',

        padding: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 15,
        marginLeft: 15,
    },
    titleText: {
        fontSize: 17,
        textAlign: 'right',
        //fontFamily: 'MyriadPro-Regular',
    },
    profileText: {
        marginTop: 15,
        fontSize: 18,
        textAlign: 'right',
        //fontFamily: 'MyriadPro-Regular',
    },
    text: {
        color: '#000',
        fontSize: 17,
        //fontFamily: 'MyriadPro-Regular',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    options: {
        marginTop: 400,
        height: 100,
        backgroundColor: '#fff',
    },
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
});

export default Welcome;