// Concept: https://dribbble.com/shots/5476562-Forgot-Password-Verification/attachments

import {
  Alert,
  AsyncStorage,
  Animated,
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import * as firebase from "firebase";
import Loader from "./../Components/Spinner";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from "./styles";
import { Input } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { CheckBox } from "react-native-elements"; // 0.16.0

const { Value, Text: AnimatedText } = Animated;
var loader = false;

const CELL_COUNT = 4;
const source = {
  uri:
    "https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png",
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const Verification = ({ navigation }) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [email, setEmail] = React.useState("");
  const [loader, setLoader] = useState(false);
  //   const [imgChecked, SetCheckBox] = useState("");
  const [checked, setChecked] = useState(false);

  // password is 0000
  const verifyAndNavigate = () => {
    if (value === "0000") {
      setLoader(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, "this.state.password")
        .then((userCredentials) => {
          navigation.navigate("TermsAndConditions");
          AsyncStorage.setItem("first_time", "true");
          setLoader(false);
          return userCredentials.user.updateProfile({
            displayName: email,
          });
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
          return;
        });
    } else {
      Alert.alert("Error", "Check code and try again.");
    }
  };

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{
        flex: 1,
      }}
      keyboardShouldPersistTaps={"always"}
    >
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Loader isLoading={loader} />
        <View style={{ padding: 16 }}>
          {/* <Text style={styles.title}>Verification</Text> */}
          <Image
            style={[
              styles.icon,
              { width: 350 / 2.4, height: 400 / 2.4, margin: 16 },
            ]}
            source={require("../../assets/images/verification_banner.png")}
          />
          <Text style={styles.subTitle}>
            {/* Pacibaby is only accessible under trial program currently.
            {"\n"} */}
            Please provide your
            <Text
              style={{
                fontFamily: "MyriadPro-Regular",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {" "}
              Email Address{" "}
            </Text>
            to gain access.
          </Text>
          <View style={styles.form}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={[{ width: 25, height: 25 }]}
                source={require("../../assets/images/email_prefix.png")}
              />
              <Text style={styles.inputTitle}>Email Address:</Text>
            </View>
            <Input
              style={styles.input}
              placeholder={"Pacibaby@toothprint.com"}
              ref={ref}
              {...props}
              value={email}
              onChangeText={setEmail}
            ></Input>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                checkedIcon={
                  <Image
                    style={{ width: 18, height: 18 }}
                    source={require("../../assets/images/checked.png")}
                  />
                }
                uncheckedIcon={
                  <Image
                    style={{ width: 18, height: 18 }}
                    source={require("../../assets/images/unchecked.png")}
                  />
                }
                checked={checked}
                //   title="I agree to the "
                title={
                  <Text
                    style={[styles.subTitle, { paddingTop: 4, paddingLeft: 2 }]}
                  >
                    {/* Pacibaby is only accessible under trial program currently.
              {"\n"} */}
                    I agree to the
                  </Text>
                }
                containerStyle={{
                  marginLeft: 0,
                  marginTop: 16,
                  padding: 0,
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
                onPress={() => setChecked(!checked)}
              />
              <TouchableOpacity
                style={{ marginTop: 16, paddingTop: 5, marginLeft: -8 }}
              >
                <Text
                  style={{
                    fontFamily: "MyriadPro-Regular",
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "blue",
                    textDecorationLine: "underline",
                  }}
                >
                  {" "}
                  Terms & Privacy Policy.{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            renderCell={renderCell}
          /> */}
          <View style={styles.nextButton}>
            <Text onPress={verifyAndNavigate} style={styles.nextButtonText}>
              Verify
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  );
};

export default Verification;
