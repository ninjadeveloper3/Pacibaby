/* eslint-disable react/jsx-filename-extension */

/* eslint-disable react/prop-types */
/* eslint-disable no-lone-blocks */
/* eslint-disable block-spacing */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Root } from "native-base";

// Profile Tab
import ProfileScreen from "./screens/Home/ProfileScreen";
import TermsAndConditionsScreen from "./screens/Home/TermsAndConditions";
import VerificationScreen from "./screens/Home/Verification";
import TestPageScreen from "./screens/Home/TestPage";

// More Tab
import OutputScreen from "./screens/More/OutputScreen";
import AboutScreen from "./screens/More/AboutScreen";
import ResultsLinks from "./screens/More/ResultsLinks";
import BrandsLinks from "./screens/More/BrandsLinks";

// Camera Tab
import PhotoScreen from "./screens/Photo/PhotoScreen";
import EditImageScreen from "./screens/Photo/EditImageScreen";
import LoadingScreen from "./screens/Photo/LoadingScreen";

// Validation Form Tab
import ValidationScreen from "./screens/Validation/ValidationScreen";

// Auth Screen
import LoginScreen from "./screens/Auth/LoginScreen";
import AuthLoadingScreen from "./screens/Auth/LoadingScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import IntroScreen from "./screens/Home/IntroScreen";
import welcome from "./screens/Home/welcome";

// Firebase
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAOEUaceAcuwDTLY5w7zyQO-4HvTodtWTE",
  authDomain: "Pacibabyapp.firebaseapp.com",
  databaseURL: "https://Pacibabyapp.firebaseio.com",
  projectId: "Pacibabyapp",
  storageBucket: "Pacibabyapp.appspot.com",
  messagingSenderId: "368474796044",
  appId: "1:368474796044:web:1c37644230d620a6a53e29",
  measurementId: "G-3ENQQYX8RF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const ProfileStackNavigator = new createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Pacibaby",
      headerTitleStyle: {
        fontFamily: "MyriadPro-Light",
        marginTop: 10,
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: "#42B6C7",
      },
      headerTintColor: "white",
      gesturesEnabled: false,
      // headerShown: false,
    }),
  },
  // TermsAndConditions: {
  //     screen: TermsAndConditionsScreen,
  //     navigationOptions: {
  //         headerShown: false,
  //     },
  // },
  // Verification: {
  //     screen: VerificationScreen,
  //     navigationOptions: {
  //         headerShown: false,
  //     },
  // },
  TestPage: {
    screen: TestPageScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Pacibaby",
      headerTitleStyle: {
        fontFamily: "MyriadPro-Light",
        marginTop: 10,
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: "#42B6C7",
      },
      headerTintColor: "white",
      gesturesEnabled: false,
    }),
  },

  Register: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Pacibaby",
      headerTitleStyle: {
        fontFamily: "MyriadPro-Light",
        marginTop: 10,
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: "#42B6C7",
      },
      headerTintColor: "white",
      gesturesEnabled: false,
    }),
  },
});

const MoreStackNavigator = new createStackNavigator({
  OutputScreen: {
    screen: OutputScreen,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      title: "Pacibaby",
      headerTitleStyle: {
        marginTop: 10,
        fontFamily: "MyriadPro-Light",
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: "#42B6C7",
      },
      headerTintColor: "white",
      headerRight: () => (
        <Icon
          name="ios-information-circle-outline"
          type="font-awesome"
          color="#fff"
          style={{ marginRight: 20 }}
          size={28}
          onPress={() => navigation.navigate("AboutScreen")}
        />
      ),
    }),
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      title: "Pacibaby",
      headerTitleStyle: {
        marginTop: 10,
        fontFamily: "MyriadPro-Light",
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: "#42B6C7",
      },
      headerTintColor: "white",
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => {
            navigation.goBack(null);
          }}
        />
      ),
    }),
  },
  BrandsLinks: {
    screen: BrandsLinks,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      title: "Pacibaby",
      headerTitleStyle: {
        fontFamily: "MyriadPro-Light",
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: "#42B6C7",
      },
      headerTintColor: "white",
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => {
            navigation.goBack(null);
          }}
        />
      ),
    }),
  },
  ResultsLinks: {
    // 11
    screen: ResultsLinks,
    navigationOptions: {
      headerShown: false,
      gesturesEnabled: false,
    },
  },
});

const PhotoStackNavigator = new createStackNavigator({
  PhotoScreen: {
    screen: PhotoScreen,
  },
  EditImageScreen: {
    screen: EditImageScreen,
  },
  LoadingScreen: {
    screen: LoadingScreen,
  },
});

const ValidationStackNavigator = new createStackNavigator({
  ValidationScreen: {
    screen: ValidationScreen,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      title: "Pacibaby",
      headerTitleStyle: {
        fontFamily: "MyriadPro-Light",
        marginTop: 10,
        fontSize: 30,
        gesturesEnabled: false,
      },
      headerStyle: {
        backgroundColor: "#42B6C7",
      },
      headerTintColor: "white",
    }),
  },
});

// const AuthenticationSwitchNavigator = new createSwitchNavigator(
//     {
//         Loading: LoadingScreen,
//         App: AppStack,
//         Auth: AuthStack
//     },
//     {
//         initialRouteName: "Loading"
//     }
// );

// Bottom Tab Nav
const TabNavigator = createMaterialBottomTabNavigator(
  {
    ProfileScreen: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={30} name="ios-contact" />
          </View>
        ),
        // headerShown: false,
        cardStack: {
          gesturesEnabled: false,
        },
      },
    },
    // PhotoScreen: {
    //     screen: PhotoStackNavigator,
    //     navigationOptions: {
    //         gesturesEnabled: false,
    //         tabBarVisible: false,
    //         tabBarLabel: 'Camera',
    //         tabBarIcon: ({tintColor}) => (
    //             <View>
    //                 <Icon style={[{color: tintColor}]} size={30} name="ios-camera"/>
    //             </View>

    //         ),
    //         activeColor: '#42B6C7',
    //         inactiveColor: '#696969',
    //         barStyle: {backgroundColor: '#f0edf6'},
    //     },
    // },
    ValidationScreen: {
      screen: ValidationStackNavigator,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarLabel: "Form",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={30}
              name="ios-clipboard"
            />
          </View>
        ),
        activeColor: "#42B6C7",
        inactiveColor: "#696969",
        barStyle: { backgroundColor: "#f0edf6" },
      },
    },
    OutputScreen: {
      screen: MoreStackNavigator,
      navigationOptions: {
        tabBarLabel: "Pacibabyrs",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={30} name="ios-body" />
          </View>
        ),
        activeColor: "#42B6C7",
        inactiveColor: "#696969",
        barStyle: { backgroundColor: "#f0edf6" },
      },
    },
  },
  {
    initialRouteName: "ProfileScreen",
    activeColor: "#42B6C7",
    inactiveColor: "#696969",
    barStyle: { backgroundColor: "#f0edf6" },
  }
);

// const Auth = createAppContainer(
//     createSwitchNavigator(
//         {
//             Loading: LoadingScreen,
//             App: AppStack,
//             Auth: AuthStack
//         },
//         {
//             initialRouteName: "Loading"
//         }
//     )
// );

const IntroStackNavigator = new createStackNavigator({
  IntroScreen: {
    screen: IntroScreen,
    navigationOptions: {
      headerShown: false,
      gesturesEnabled: false,
    },
  },
  TermsAndConditions: {
    screen: TermsAndConditionsScreen,
    navigationOptions: {
      headerShown: false,
      gesturesEnabled: false,
    },
  },
  // Welcome: {
  //     screen: welcome,
  // },
  Verification: {
    screen: VerificationScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Pacibaby",
      headerTitleStyle: {
        fontFamily: "MyriadPro-Light",
        marginTop: 10,
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: "#42B6C7",
      },
      headerTintColor: "white",
      gesturesEnabled: false,
    }),
  },
  PhotoScreen: {
    screen: PhotoStackNavigator,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      gesturesEnabled: false,
    }),
  },
  NestedTabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      gesturesEnabled: false,
    }),
  },
});

const InitialNavigator = createAppContainer(IntroStackNavigator);
// const TabNavigator = createAppContainer(TabNavigator);

const AppContainer = createAppContainer(InitialNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { loading: true };
    console.log("testing");
  }

  async componentDidMount() {
    await Font.loadAsync({
      "MinionPro-BoldDisp": require("./assets/fonts/MinionPro-BoldDisp.ttf"),
      "MyriadPro-Light": require("./assets/fonts/MyriadPro-Light.ttf"),
      "MyriadPro-Regular": require("./assets/fonts/MyriadPro-Regular.ttf"),
      "SpaceMono-Regular": require("./assets/fonts/SpaceMono-Regular.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    // eslint-disable-next-line react/no-unused-state
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return <AppContainer />;
  }
}
