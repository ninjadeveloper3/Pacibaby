/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
//This is an example code to understand Slider//

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
  Slider,
  screenWidth,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from "react-native";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import base64 from "react-native-base64";
import { ScrollView } from "react-native-gesture-handler";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

//import all the components we are going to use.

// const url = 'http://ec2-3-17-164-106.us-east-2.compute.amazonaws.com:8000/api/face_align/';
const url = "http://192.168.2.49:8000/api/face_align/";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      outputBulbSize: "",
      outputShieldType: "",
      age: "",
      weight: "",
      distance: 30,
      minDistance: 10,
      maxDistance: 100,
      InferiorValue: 0,
      mouthValue: 0,
      faceValue: 0,
      palateValue: 0,
      otobasianValue: 0,
      isVisible: true,
      value: 0,
    };
  }

  submitAndClear = () => {
    this.setState({
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
    });
  };

  async componentDidMount() {
    try {
      const storedAge = await AsyncStorage.getItem("@myApp:age");
      const storedWeight = await AsyncStorage.getItem("@myApp:weight");

      this.setState({ age: storedAge });
      this.setState({ weight: storedWeight });

      console.log(storedAge);
    } catch (error) {
      console.log(error);
    }
  }

  onButtonPress() {
    Alert.alert("hello");
  }

  getStatus() {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_regular_input: false,
        go_go: base64.encode(this.state.input1), // 10
        ch_ch: base64.encode(this.state.input2), // 30
        zy_zy: base64.encode(this.state.input3), // 40
        obi_n: base64.encode(this.state.input5), // 50
        obi_gn: base64.encode(this.state.input6), // 10
        weight: base64.encode(this.state.age), // 20
        age: base64.encode(this.state.weight), // 10
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(base64.decode(responseJson.data.bulb_size));

        this.setState({
          outputBulbSize: base64.decode(responseJson.data.bulb_size),
          outputShieldType: base64.decode(responseJson.data.shield_type),
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .then(console.log("Success!"));
  }

  render() {
    const left =
      (this.state.value * (Dimensions.get("window").width - 60)) / 100 - 15;
    const Inferior_left =
      (this.state.InferiorValue * (Dimensions.get("window").width - 60)) / 100 -
      15;
    const mouthValue_left =
      (this.state.mouthValue * (Dimensions.get("window").width - 60)) / 100 -
      15;
    const faceValue_left =
      (this.state.faceValue * (Dimensions.get("window").width - 60)) / 100 - 15;
    const palateValue_left =
      (this.state.palateValue * (Dimensions.get("window").width - 60)) / 100 -
      15;
    const otobasianValue_left =
      (this.state.otobasianValue * (Dimensions.get("window").width - 60)) /
        100 -
      15;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
        keyboardShouldPersistTaps={"always"}
      >
        <ScrollView style={styles.container}>
          <View>
            <Text
              style={{
                marginTop: 30,
                color: "black",
                marginLeft: 20,
                fontSize: 24,
                fontWeight: "bold",
                fontFamily: "MyriadPro-Regular",
              }}
            >
              Validation Form
            </Text>

            <View style={styles.options}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ width: "10%" }}>
                  <Image
                    source={require("../../assets/images/21.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <View style={{ width: "80%" }}>
                  <Text style={{ textAlignVertical: "center", fontSize: 18 }}>
                    Interior Facial Width (Go-Go)
                  </Text>
                </View>
                <View style={{ width: "10%" }}>
                  <TouchableOpacity onPress={() => alert("clicl")}>
                    <Image
                      source={require("../../assets/images/info_guide.png")}
                      style={{ width: 25, height: 25 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Slider
                maximumValue={100}
                value={this.state.InferiorValue}
                minimumTrackTintColor="#e9d051"
                maximumTrackTintColor="lightgrey"
                thumbImage={require("../../assets/images/slider_tip.png")}
                // onValueChange={(InferiorValue) =>
                //   this.setState({ InferiorValue })
                // }
                onValueChange={(InferiorValue) => {
                  clearTimeout(this.sliderTimeoutId);
                  this.sliderTimeoutId = setTimeout(() => {
                    this.setState({ InferiorValue });
                  }, 5);
                }}
              />
              <Text
                style={{ width: 50, textAlign: "center", left: Inferior_left }}
              >
                {Math.floor(this.state.InferiorValue)}mm
              </Text>

              <View style={{ margin: 6 }}></View>

              {/* Second Slider */}

              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ width: "10%" }}>
                  <Image
                    source={require("../../assets/images/21.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <View style={{ width: "80%" }}>
                  <Text style={{ textAlignVertical: "center", fontSize: 18 }}>
                    Mouth Width (Ch-Ch)
                  </Text>
                </View>
                <View style={{ width: "10%" }}>
                  <Image
                    source={require("../../assets/images/info_guide.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
              </View>
              <Slider
                maximumValue={100}
                value={this.state.mouthValue}
                minimumTrackTintColor="#e9d051"
                maximumTrackTintColor="lightgrey"
                thumbImage={require("../../assets/images/slider_tip.png")}
                // onValueChange={(mouthValue) => this.setState({ mouthValue })}
                onValueChange={(mouthValue) => {
                  clearTimeout(this.sliderTimeoutId);
                  this.sliderTimeoutId = setTimeout(() => {
                    this.setState({ mouthValue });
                  }, 5);
                }}
              />
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  left: mouthValue_left,
                }}
              >
                {Math.floor(this.state.mouthValue)}mm
              </Text>

              <View style={{ margin: 6 }}></View>

              {/* Third Slider */}

              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ width: "10%" }}>
                  <Image
                    source={require("../../assets/images/21.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <View style={{ width: "80%" }}>
                  <Text style={{ textAlignVertical: "center", fontSize: 18 }}>
                    Face Width (Zy-Zy)
                  </Text>
                </View>
                <View style={{ width: "10%" }}>
                  <Image
                    source={require("../../assets/images/info_guide.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
              </View>
              <Slider
                maximumValue={100}
                value={this.state.faceValue}
                minimumTrackTintColor="#e9d051"
                maximumTrackTintColor="lightgrey"
                thumbImage={require("../../assets/images/slider_tip.png")}
                // onValueChange={(value) => this.setState({ value })}
                onValueChange={(faceValue) => {
                  clearTimeout(this.sliderTimeoutId);
                  this.sliderTimeoutId = setTimeout(() => {
                    this.setState({ faceValue });
                  }, 5);
                }}
              />
              <Text
                style={{ width: 50, textAlign: "center", left: faceValue_left }}
              >
                {Math.floor(this.state.faceValue)}mm
              </Text>

              <View style={{ margin: 6 }}></View>

              {/* Fouth Slider */}

              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ width: "10%" }}>
                  <Image
                    source={require("../../assets/images/21.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <View style={{ width: "80%" }}>
                  <Text style={{ textAlignVertical: "center", fontSize: 18 }}>
                    Palate Width
                  </Text>
                </View>
                <View style={{ width: "10%" }}>
                  <Image
                    source={require("../../assets/images/info_guide.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
              </View>
              <Slider
                maximumValue={100}
                value={this.state.palateValue}
                minimumTrackTintColor="#e9d051"
                maximumTrackTintColor="lightgrey"
                thumbImage={require("../../assets/images/slider_tip.png")}
                // onValueChange={(value) => this.setState({ value })}
                onValueChange={(palateValue) => {
                  clearTimeout(this.sliderTimeoutId);
                  this.sliderTimeoutId = setTimeout(() => {
                    this.setState({ palateValue });
                  }, 5);
                }}
              />
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  left: palateValue_left,
                }}
              >
                {Math.floor(this.state.palateValue)}mm
              </Text>

              <View style={{ margin: 6 }}></View>

              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ width: "10%" }}>
                  <Image
                    source={require("../../assets/images/21.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <View style={{ width: "80%" }}>
                  <Text style={{ textAlignVertical: "center", fontSize: 18 }}>
                    Otobasian Inferius to Nasion (OBI-N)
                  </Text>
                </View>
                <View style={{ width: "10%" }}>
                  <Image
                    source={require("../../assets/images/info_guide.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
              </View>
              <Slider
                maximumValue={100}
                value={this.state.otobasian}
                minimumTrackTintColor="#e9d051"
                maximumTrackTintColor="lightgrey"
                thumbImage={require("../../assets/images/slider_tip.png")}
                // onValueChange={(value) => this.setState({ value })}
                onValueChange={(otobasian) => {
                  clearTimeout(this.sliderTimeoutId);
                  this.sliderTimeoutId = setTimeout(() => {
                    this.setState({ otobasian });
                  }, 5);
                }}
              />
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  left: otobasianValue_left,
                }}
              >
                {Math.floor(this.state.otobasian)}mm
              </Text>

              <View style={styles.textContainer}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>
                    Inferior Facial Width
                    {"\n"}
                    (Go-Go)
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Type Here"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    style={styles.titleText}
                    onChangeText={(input1) => {
                      this.setState({ input1: input1 }),
                        () => console.log(this.state.input1);
                    }}
                    returnKeyType="done"
                    value={this.state.input1}
                  />
                </View>
              </View>

              {/* Old Design */}
              {/* <Divider style={{ height: 1, backgroundColor: "#E0E0E0" }} />

              <View style={styles.textContainer}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>Mouth Width (Ch-Ch)</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Type Here"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    style={styles.titleText}
                    onChangeText={(input2) => {
                      this.setState({ input2: input2 });
                    }}
                    returnKeyType="done"
                    value={this.state.input2}
                  />
                </View>
              </View>

              <Divider style={{ height: 1, backgroundColor: "#E0E0E0" }} />

              <View style={styles.textContainer}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>Face Width (Zy-Zy)</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Type Here"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    style={styles.titleText}
                    onChangeText={(input3) => {
                      this.setState({ input3: input3 });
                    }}
                    returnKeyType="done"
                    value={this.state.input3}
                  />
                </View>
              </View>

              <Divider style={{ height: 1, backgroundColor: "#E0E0E0" }} />

              <View style={styles.textContainer}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>Palate Width</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Type Here"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    style={styles.titleText}
                    onChangeText={(input4) => {
                      this.setState({ input4: input4 });
                    }}
                    returnKeyType="done"
                    value={this.state.input4}
                  />
                </View>
              </View>

              <Divider style={{ height: 1, backgroundColor: "#E0E0E0" }} />

              <View style={styles.textContainer}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>
                    Otobasian Inferius to Nasion (OBI-N)
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Type Here"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    style={styles.titleText}
                    onChangeText={(input5) => {
                      this.setState({ input5: input5 });
                    }}
                    returnKeyType="done"
                    value={this.state.input5}
                  />
                </View>
              </View>

              <Divider style={{ height: 1, backgroundColor: "#FFF" }} />

              <View style={styles.textContainer}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>
                    Otobasian Inferius to Gnathion (OBI-GN)
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Type Here"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    style={styles.titleText}
                    onChangeText={(input6) => {
                      this.setState({ input6: input6 });
                    }}
                    returnKeyType="done"
                    value={this.state.input6}
                  />
                </View>
              </View> */}
              {/* End */}
              {/* debugging purposes only */}
              {/* <Text>{this.state.input1} {this.state.input2} {this.state.input3} {this.state.input4} {this.state.input5} {this.state.input6}</Text>
              <Text>{this.state.age} {this.state.weight}</Text> */}
              <Text>
                {this.state.outputBulbSize} {this.state.outputShieldType}
              </Text>

              <View style={styles.nextButton}>
                <Text
                  onPress={this.getStatus.bind(this)}
                  style={styles.nextButtonText}
                >
                  Submit
                </Text>
              </View>

              {/* <View style={styles.divContainer}>
                <View style={styles.iconContainer}>
                  <View style={{ flex: 1 }}>
                    <Icon
                      style={[{ color: "#000" }]}
                      size={45}
                      name="ios-close-circle"
                      onPress={this.submitAndClear}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Icon
                      title={"clear all"}
                      style={[{ color: "#42B6C7", textAlign: "right" }]}
                      size={45}
                      name="ios-arrow-dropright-circle"
                      // onPress={() => this.props.navigation.navigate('LoadingScreen')}
                      onPress={this.getStatus.bind(this)}
                      //   onPress={}
                    />
                  </View>
                </View>
              </View> */}
            </View>
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.isVisible}
            >
              <View
                style={{
                  flex: 1,
                  position: "relative",
                  backgroundColor: "#42b5c8",
                }}
              >
                {/* <TouchableOpacity
                  onPress={() => alert("test")}
                  style={{ position: "absolute", right: 20, top: 30 }}
                >
                  <Image
                    source={require("../../assets/images/circle_cross.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 30,
                    zIndex: 1,
                  }}
                  onPress={() => this.setState({ isVisible: false })}
                >
                  <Image
                    source={require("../../assets/images/circle_cross.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Image
                    source={require("../../assets/images/baby_guideline1.png")}
                    style={{ width: 300 }}
                    resizeMode={"contain"}
                  />
                </View>
                <View
                  style={{
                    position: "absolute",
                    top: 90,
                    right: 0,
                    left: 0,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      paddingTop: 30,
                      color: "white",
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                  >
                    Inferior face width (Go-Go)
                  </Text>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  divContainer: {
    marginTop: 0,
    height: 100,
    fontSize: 20,
    backgroundColor: "#FFFFFF",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    marginRight: 15,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 16,
    textAlign: "right",
  },
  text: {
    color: "#000",
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  options: {
    marginTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    // height: 100,
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
  textCon: {
    width: 320,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorGrey: {
    color: "#d3d3d3",
  },
  colorYellow: {
    color: "rgb(252, 228, 149)",
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 10,
    height: 60,
    backgroundColor: "#e9d051",
    justifyContent: "center",
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  centeredView: {
    flex: 1,
    // alignItems: "center",
    // flexDirection: "column",
    // justifyContent: "space-around",
    backgroundColor: "#42b5c8",
    justifyContent: "center",
    position: "relative",
  },
  modalView: {
    // alignItems: "flex-end",
    // padding: 24,
    position: "absolute",
    right: 0,
    left: 10,
    top: 0,
    bottom: 0, // flex: 1,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,

    // elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2AC062",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF3974",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: "#00479e",
    textAlign: "center",
  },
});
