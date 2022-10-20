/* eslint-disable linebreak-style */
import { Platform, StyleSheet } from "react-native";

export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = "#fff";
export const NOT_EMPTY_CELL_BG_COLOR = "#42B6C7";
export const ACTIVE_CELL_BG_COLOR = "#42B6C7";

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 15,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({ web: { lineHeight: 65 } }),
    fontSize: 30,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,
    color: "#fff",
    // backgroundColor: '#42B6C7',
    backgroundColor: "#fff",

    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    paddingTop: 15,
    color: "#000",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: 10,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: "auto",
    marginRight: "auto",
  },
  subTitle: {
    fontFamily: "MyriadPro-Light",
    fontSize: 17.5,
    paddingTop: 30,
    color: "#000",
    textAlign: "center",
  },
  subsubTitle: {
    fontFamily: "MyriadPro-Light",
    fontSize: 18,
    paddingTop: 15,
    color: "#000",
    textAlign: "center",
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

  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#42B6C7",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginTop: 15,
    // marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    fontFamily: "MyriadPro-Light",
    // color: "#7482c1",
    fontSize: 15,
    // textTransform: "uppercase"
  },
  input: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
    borderBottomColor: "#42B6C7",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#42B6C7",
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

export default styles;
