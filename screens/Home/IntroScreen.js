/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  AsyncStorage,
  Dimensions,
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Verification from "./Verification";
import Loader from "./../Components/Spinner";
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
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
    textAlign: "right",
    //fontFamily: 'MyriadPro-Regular',
  },
  profileText: {
    marginTop: 15,
    fontSize: 18,
    textAlign: "right",
    //fontFamily: 'MyriadPro-Regular',
  },
  text: {
    color: "#000",
    fontSize: 17,
    //fontFamily: 'MyriadPro-Regular',
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
    width: "100%",
    height: "100%",
    flex: 1,
    // resizeMode: "contain",
  },
  buttonCircle: {
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    key: "k1",
    image: require("../../assets/images/05.png"),
    titleStyle: styles.title,
    imageStyle: styles.image,
    backgroundColor: "#42B6C7",
  },
  {
    key: "k2",
    image: require("../../assets/images/06.png"),
    titleStyle: styles.title,
    imageStyle: styles.image,
    backgroundColor: "#42B6C7",
  },
  {
    key: "k3",
    image: require("../../assets/images/07.png"),
    titleStyle: styles.title,
    imageStyle: styles.image,
    backgroundColor: "#42B6C7",
  },
  {
    key: "k4",
    image: require("../../assets/images/08.png"),
    titleStyle: styles.title,
    imageStyle: styles.image,
    backgroundColor: "#42B6C7",
  },
  {
    key: "k5",
    image: require("../../assets/images/09.png"),
    titleStyle: styles.title,
    imageStyle: styles.image,
    backgroundColor: "#42B6C7",
  },
];

const initialState = {
  text: "",
  age: "",
  height: "",
  weight: "",
  ethnicity: "",
  show_Main_App: false,
  loading: true,
  loader: false,
};

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    // AsyncStorage.setItem('first_time', 'true');
  }

  async reset() {
    // this.state = initialState;
    await AsyncStorage.removeItem("first_time");
  }

  async componentDidMount() {
    // this.reset();
    // const value = await AsyncStorage.getItem('first_time');
    // if (value !== null) {
    //     // We have data!!
    //     this.props.navigation.navigate('ProfileScreen');
    // } else {
    //     // this.setState({show_Main_App: false, loading: true});
    //     AsyncStorage.setItem('first_time', 'true').then(() => {
    //         // alert("firt time true");
    //     })
    // }
  }

  async checkFirstTime() {
    let context = this;
    try {
      let value = await AsyncStorage.getItem("first_time");
      if (value != null) {
        // do something
        this.props.navigation.navigate("ProfileScreen");
      } else {
        // do something else
        this.props.navigation.navigate("Verification");
      }
      // this.setState({loader: true})
    } catch (error) {
      // Error retrieving data
    }
  }

  _onDone = () => {
    // this.reset()
    this.checkFirstTime();
  };

  _onSkip = () => {
    this.checkFirstTime();
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Button
          title={"Next"}
          style={{ backgroundColor: "red" }}
          color={"black"}
          size={45}
          onPress={this._saveValues}
        />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Button
          title={"Done"}
          style={{ backgroundColor: "red" }}
          color={"black"}
          size={45}
          onPress={this._saveValues}
        />
      </View>
    );
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <ImageBackground
          source={item.image}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Loader isLoading={this.state.loader} /> */}
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
          bottomButton={true}
          renderNextButton={this._renderNextButton}
          renderDoneButton={this._renderDoneButton}
          // buttonStyle={{ color: "black" }}
          // buttonTextStyle={{ color: "black" }}
        ></AppIntroSlider>
      </View>
    );
  }
}

export default ProfileScreen;
