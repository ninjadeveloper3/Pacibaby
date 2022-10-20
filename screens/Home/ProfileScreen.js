// import { Form } from 'native-base';
import { Form } from "native-base";
import React, { Component } from "react";
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
  View,
  Picker,
  TouchableOpacity,
  Image,
} from "react-native";
import { Avatar, Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import ToastExample from "./../Components/Toast";
import { Toast, Root, ActionSheet } from "native-base";
import { Entypo } from "@expo/vector-icons";
var BUTTONS = [
  "Caucasian",
  "Black",
  "Hispanic",
  "Indian",
  "Asian",
  "Other",
  "Cancel",
];
var DESTRUCTIVE_INDEX = 6;
var CANCEL_INDEX = 6;
var GENDER_BUTTONS = ["Male", "Female", "Other", "Cancel"];
var DESTRUCTIVE_INDEX_GENDER = 3;
var CANCEL_INDEX_GENDER = 3;

const styles = StyleSheet.create({
  header: {
    // marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    padding: 24,
    flex: 1,
    // justifyContent: "flex-end",
  },
  divContainer: {
    marginTop: 0,
    height: 100,
    fontSize: 20,
    backgroundColor: "#F0F0F0",
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    marginRight: 15,
    marginLeft: 15,
  },
  titleText: {
    fontSize: 17,
    // textAlign: 'right',
    paddingLeft: 8,
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 4,
    fontFamily: "MyriadPro-Regular",
  },
  profileText: {
    marginTop: 15,
    fontSize: 18,
    textAlign: "right",
    fontFamily: "MyriadPro-Regular",
  },
  text: {
    color: "#000",
    fontSize: 17,
    fontFamily: "MyriadPro-Regular",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  options: {
    marginTop: 60,
    height: 100,
    backgroundColor: "#fff",
  },
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  picker: {
    width: 200,
    backgroundColor: "#FFF0E0",
    borderColor: "black",
    borderWidth: 1,
  },
  pickerItem: {
    color: "red",
  },
  onePicker: {
    width: 200,
    height: 44,
    backgroundColor: "#FFF0E0",
    borderColor: "black",
    borderWidth: 1,
  },
  onePickerItem: {
    height: 44,
    color: "red",
  },
  menuItem: {
    flex: 1,
    flexDirection: "row",
    color: "#9400D3",
    backgroundColor: "grey",
    justifyContent: "center",
    paddingRight: 22,
    alignItems: "center",
    // margin: 13,
    height: 58,
    backgroundColor: "transparent",
  },
  menuItemText: {
    flex: 1,
    fontSize: 15,
    // fontWeight: '300',
    margin: 16,
    color: "black",
    paddingLeft: 0,
    marginLeft: 2,
    color: "#c7c7c7",
  },
  menuItemTextAfter: {
    flex: 1,
    fontSize: 15,
    // fontWeight: '300',
    margin: 16,
    color: "black",
    paddingLeft: 0,
    marginLeft: 2,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#fff',
    // borderWidth: 0.5,
    borderColor: "#000",
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
    // margin: 8,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  imageStyleEnd: {
    // padding: 10,
    // margin: 10,
    // height: 25,
    // width: 25,
    fontSize: 26,
    position: "absolute",
    top: 12,
    right: 0,
    bottom: 0,
    resizeMode: "stretch",
    // alignItems: 'flex-end',
  },
  bottomButtons: {
    // backgroundColor: "red",
    width: "50%",
    margin: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#e9d051",
    height: 60,
  },
  BtnText: {
    // padding: 25,
    borderColor: "black",
    // backgroundColor: "red",
    // justifyContent: "center",
    // textAlign: "center",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

const initialState = {
  text: "",
  age: "",
  height: "",
  weight: "",
  ethnicity: "Ethnicity",
  gender: "Gender",
  show_Main_App: false,
  loading: true,
  visible: false,
};

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // async removeItemValue(key) {
  //     try {
  //         return true;
  //     }
  //     catch(exception) {
  //         return false;
  //     }
  // }

  // async reset() {
  //     this.state = initialState;
  //     // AsyncStorage.setItem('first_time', 'true');
  //     // let keys = ['first_time'];
  //     // AsyncStorage.multiRemove(keys);
  //     await AsyncStorage.removeItem("first_time");
  // }

  clearStates = () => {
    this.setState({
      age: "",
      height: "",
      weight: "",
      ethnicity: "Ethnicity",
      gender: "Gender",
      name: "",
      loader: false,
    });
  };

  // submitOnly = () => {
  //   this.setState({
  //     age: '',
  //     height: '',
  //     weight: '',
  //     ethnicity: '',
  //   })
  // }

  async componentDidMount() {
    // this.reset();
    // await AsyncStorage.removeItem("first_time");
    // const value = await AsyncStorage.getItem('first_time');
    // if (value !== null) {
    //     // We have data!!
    //     if (value == false) { // not first time user, show main app
    //         this.setState({show_Main_App: true, loading: false});
    //     }
    // } else {
    //     this.setState({show_Main_App: false, loading: true});
    //     AsyncStorage.setItem('first_time', 'true').then(() => {
    //         alert("firt time true");
    //     })
    // }
  }

  _saveValues = () => {
    let age = this.state.age;
    let height = this.state.height;
    let weight = this.state.weight;
    let ethnicity = this.state.ethnicity;
    let gender = this.state.gender;
    let name = this.state.name;

    if (name == "") {
      Toast.show({
        text: "Please fill name field first!",
        duration: 3000,
      });
      return;
    }
    if (age == "") {
      Toast.show({
        text: "Please fill age field first!",
        duration: 3000,
      });
      return;
    }
    if (age > 50) {
      Toast.show({
        text: "Age must be below 50",
        duration: 3000,
      });
      return;
    }
    if (height == "") {
      Toast.show({
        text: "Please fill height field first!",
        duration: 3000,
      });
      return;
    }
    if (weight == "") {
      Toast.show({
        text: "Please fill weight field first!",
        duration: 3000,
      });
      return;
    }
    if (ethnicity == "Ethnicity") {
      Toast.show({
        text: "Please select ethnicity field first!",
        duration: 3000,
      });
      return;
    }
    if (gender == "Gender") {
      Toast.show({
        text: "Please select gender field first!",
        duration: 3000,
      });
      return;
    }

    // if (age !== '' || weight !== '' || height !== '' || ethnicity !== '' || name !== '') {
    AsyncStorage.setItem("@myApp:age", this.state.age).then((age) => {
      this.setState({ age: age });
    });
    AsyncStorage.setItem("@myApp:height", this.state.height).then((height) => {
      this.setState({ height: height });
    });
    AsyncStorage.setItem("@myApp:weight", this.state.weight).then((weight) => {
      this.setState({ weight: weight });
    });
    AsyncStorage.setItem("@myApp:ethnicity", this.state.ethnicity).then(
      (ethnicity) => {
        this.setState({ ethnicity: ethnicity });
      }
    );
    AsyncStorage.setItem("@myApp:gender", this.state.gender).then(
      (ethnicity) => {
        this.setState({ gender: gender });
      }
    );
    this.props.navigation.navigate("PhotoScreen");
    // }
  };

  capturePhoto() {
    let age = this.state.age;
    let height = this.state.height;
    let weight = this.state.weight;
    let ethnicity = this.state.ethnicity;
    let gender = this.state.gender;
    let name = this.state.name;

    if (name == "") {
      Toast.show({
        text: "Please fill name field first!",
        duration: 3000,
      });
      return;
    }
    if (age == "") {
      Toast.show({
        text: "Please fill age field first!",
        duration: 3000,
      });
      return;
    }
    if (height == "") {
      Toast.show({
        text: "Please fill height field first!",
        duration: 3000,
      });
      return;
    }
    if (weight == "") {
      Toast.show({
        text: "Please fill weight field first!",
        duration: 3000,
      });
      return;
    }
    if (ethnicity == "Ethnicity") {
      Toast.show({
        text: "Please select ethnicity field first!",
        duration: 3000,
      });
      return;
    }
    if (gender == "Gender") {
      Toast.show({
        text: "Please select gender field first!",
        duration: 3000,
      });
      return;
    }
    this.props.navigation.navigate("PhotoScreen");
  }

  onNameChange(value) {
    if (/^[a-zA-Z0-9- ,_]*$/.test(value)) {
      console.log("matched");
      // const firstNameError = validate_wrapper('firstName', value);
      // this.setState({firstName: value, firstNameError: firstNameError})
      this.setState({ name: value });
    } else {
      // this.setState({firstName: value, firstNameError: "special characters not allowed"})
      console.log("un-matched");
      Toast.show({
        text: "Special characters not allowed",
        duration: 3000,
      });
    }
  }

  render() {
    return (
      <Root>
        <View style={{ flex: 1 }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
            keyboardShouldPersistTaps={"always"}
          >
            {/* <ToastExample visible={this.state.visible} /> */}

            <View>
              <Image
                source={require("../../assets/images/profile_bg.png")}
                style={{ width: "100%", height: 200 }}
              ></Image>
              <View
                style={{
                  marginTop: 0,
                  marginBottom: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  <Text>Your Baby's </Text>
                  <Text style={{ fontWeight: "bold" }}>Profile</Text>
                </Text>
              </View>
            </View>

            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            {/* <Loader isLoading={loader} /> */}
            <ScrollView style={styles.inner}>
              <View style={{ flex: 1, paddingBottom: 40 }}>
                <View style={styles.header}>
                  {/* <Avatar
                                        source={require('../../assets/images/baby.png')}
                                        size="xlarge"
                                        rounded
                                        onPress={() => this.capturePhoto()}
                                        activeOpacity={0.7}
                                    /> */}
                  {/* <TextInput
                                        placeholder="Enter Name"
                                        underlineColorAndroid="transparent"
                                        style={styles.profileText}
                                        maxLength={10}
                                        onChangeText={(text) => this.onNameChange(text)}
                                        returnKeyType="done"
                                        value={this.state.name}
                                    /> */}
                </View>

                <View style={styles.sectionStyle}>
                  <Image
                    source={{
                      uri:
                        "https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png",
                    }}
                    style={styles.imageStyle}
                  />
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Name"
                    maxLength={10}
                    onChangeText={(text) => this.onNameChange(text)}
                    returnKeyType="done"
                    value={this.state.name}
                    // underlineColorAndroid="transparent"
                  />
                </View>

                <View style={styles.sectionStyle}>
                  <Image
                    source={{
                      uri:
                        "https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png",
                    }}
                    style={styles.imageStyle}
                  />
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Age (mo)"
                    maxLength={10}
                    onChangeText={(text) => this.onNameChange(text)}
                    returnKeyType="done"
                    value={this.state.name}
                    // underlineColorAndroid="transparent"
                  />
                </View>
                <View style={styles.sectionStyle}>
                  <Image
                    source={{
                      uri:
                        "https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png",
                    }}
                    style={styles.imageStyle}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      ActionSheet.show(
                        {
                          options: GENDER_BUTTONS,
                          cancelButtonIndex: CANCEL_INDEX_GENDER,
                          destructiveButtonIndex: DESTRUCTIVE_INDEX_GENDER,
                          // title: "Testing ActionSheet"
                        },
                        (buttonIndex) => {
                          if (buttonIndex !== 3) {
                            this.setState({
                              gender: GENDER_BUTTONS[buttonIndex],
                            });
                            console.log(
                              "selected value ",
                              BUTTONS[buttonIndex]
                            );
                          }
                        }
                      );
                    }}
                    style={{
                      flex: 1,
                      position: "relative",
                      color: "tramsparent",
                    }}
                  >
                    <View style={styles.menuItem}>
                      <Text
                        style={[
                          this.state.gender == "Gender"
                            ? styles.menuItemText
                            : styles.menuItemTextAfter,
                        ]}
                      >
                        {this.state.gender}
                      </Text>
                    </View>
                    <Entypo
                      name="chevron-down"
                      color="black"
                      style={styles.imageStyleEnd}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.sectionStyle}>
                  <Image
                    source={{
                      uri:
                        "https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png",
                    }}
                    style={styles.imageStyle}
                  />
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Height (in)"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    onChangeText={(height) => {
                      this.setState({ height: height });
                    }}
                    returnKeyType="done"
                    value={this.state.height}
                  />
                </View>
                <View style={styles.sectionStyle}>
                  <Image
                    source={{
                      uri:
                        "https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png",
                    }}
                    style={styles.imageStyle}
                  />
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Weight (lbs)"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    onChangeText={(weight) => {
                      this.setState({ weight: weight });
                    }}
                    returnKeyType="done"
                    value={this.state.weight}
                  />
                </View>

                <View style={styles.sectionStyle}>
                  <Image
                    source={{
                      uri:
                        "https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png",
                    }}
                    style={styles.imageStyle}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      ActionSheet.show(
                        {
                          options: BUTTONS,
                          cancelButtonIndex: CANCEL_INDEX,
                          destructiveButtonIndex: DESTRUCTIVE_INDEX,
                          // title: "Testing ActionSheet"
                        },
                        (buttonIndex) => {
                          if (buttonIndex !== 6) {
                            this.setState({ ethnicity: BUTTONS[buttonIndex] });
                            console.log(
                              "selected value ",
                              BUTTONS[buttonIndex]
                            );
                          }
                        }
                      );
                    }}
                    style={{
                      flex: 1,
                      position: "relative",
                      color: "tramsparent",
                    }}
                  >
                    <View style={styles.menuItem}>
                      <Text
                        style={[
                          this.state.ethnicity == "Ethnicity"
                            ? styles.menuItemText
                            : styles.menuItemTextAfter,
                        ]}
                      >
                        {this.state.ethnicity}
                      </Text>
                    </View>
                    <Entypo
                      name="chevron-down"
                      color="black"
                      style={styles.imageStyleEnd}
                    />
                  </TouchableOpacity>
                </View>

                <View>
                  {/* <View style={styles.textContainer}>
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
                                    </View> */}

                  {/* <Divider style={{height: 1, backgroundColor: '#E0E0E0'}}/> */}

                  {/* <View style={styles.textContainer}> */}
                  {/* <View style={{flex: 1}}>
                                        
                                        </View>
                                        <View style={{flex: 1}}> */}
                  {/* <Button
    color={'#42B6C7'}
    style={{backgroundColor: 'red',padding: 0}}
                onPress={() =>
                ActionSheet.show(
                {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    // title: "Testing ActionSheet"
                },
                buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                }
                )}
                title={'Clear All'}
            >
                
            </Button> */}
                  {/* </View> */}
                  {/* </View> */}

                  {/* <View style={styles.textContainer}> */}
                  {/* <View style={{flex: 1}}>
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
                                        </View> */}

                  {/* <Picker
            style={styles.onePicker} itemStyle={styles.onePickerItem}
            selectedValue={this.state.firstLanguage}
            onValueChange={(itemValue) => this.setState({firstLanguage: itemValue})}
            >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="Haxe" value="haxe" />
            </Picker> */}
                  {/* <View style={{backgroundColor: 'red', width: '100%'}}>

    <Button
    color={'#42B6C7'}
    style={{backgroundColor: 'red'}}
                onPress={() =>
                ActionSheet.show(
                {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    // title: "Testing ActionSheet"
                },
                buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                }
                )}
                title={'Clear All'}
            >
                
            </Button>
            </View> */}

                  {/* </View> */}

                  {/* <Divider style={{ height: 1, backgroundColor: "#E0E0E0" }} /> */}

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: 16,
                    }}
                  >
                    <TouchableOpacity
                      color={"black"}
                      onPress={this.clearStates}
                      style={styles.bottomButtons}
                      type="outline"
                    >
                      <Text style={styles.BtnText}>Clear All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      color={"#42B6C7"}
                      style={[
                        styles.bottomButtons,
                        { backgroundColor: "#e9d051" },
                      ]}
                      onPress={this._saveValues}
                    >
                      <Text style={styles.BtnText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flex: 1 }} />
              </View>
            </ScrollView>
            {/* </TouchableWithoutFeedback> */}
          </KeyboardAvoidingView>
        </View>
      </Root>
    );
  }
}

export default ProfileScreen;
