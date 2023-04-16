import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <Text style={[styles.login1, styles.nextFlexBox]}>Login</Text>
      <View style={[styles.loginChild, styles.loginLayout]} />
      <View style={[styles.loginItem, styles.loginLayout]} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.nextPosition]} />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </View>
      <Text style={[styles.dontHaveAnContainer, styles.nextTypo]}>
        <Text style={styles.dontHaveAnContainer1}>
          <Text style={styles.dontHaveAn}>{`Don’t have an account ? `}</Text>
          <Text style={styles.register}>Register</Text>
        </Text>
      </Text>
      <Text style={[styles.forgotPassword, styles.nextTypo]}>
        Forgot Password ?
      </Text>
      <Text
        style={[styles.enterEmail, styles.enterTypo]}
      >{`Enter Email `}</Text>
      <Text
        style={[styles.enterPassword, styles.enterTypo]}
      >{`Enter Password `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nextFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  loginLayout: {
    height: 1,
    width: 256,
    borderTopWidth: 0.6,
    borderColor: "#000",
    borderStyle: "solid",
    left: 52,
    position: "absolute",
  },
  nextPosition: {
    left: 0,
    top: 0,
    height: 35,
    width: 100,
  },
  nextTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  enterTypo: {
    height: 23,
    width: 254,
    textAlign: "left",
    color: Color.gray_100,
    left: 53,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  login1: {
    top: 205,
    left: 16,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 328,
    height: 77,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: Color.mediumslateblue_100,
    position: "absolute",
  },
  loginChild: {
    top: 340,
  },
  loginItem: {
    top: 410,
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.mediumslateblue_100,
    position: "absolute",
    top: 0,
  },
  next: {
    color: Color.white,
    left: 0,
    top: 0,
    height: 35,
    width: 100,
    justifyContent: "center",
    textAlign: "center",
  },
  rectangleParent: {
    top: 507,
    left: 130,
    height: 35,
    width: 100,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.black,
  },
  register: {
    color: Color.mediumslateblue_100,
  },
  dontHaveAnContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  dontHaveAnContainer: {
    top: 577,
    left: 47,
    width: 266,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  forgotPassword: {
    top: 426,
    left: 66,
    textDecoration: "underline",
    textAlign: "right",
    width: 241,
    color: Color.black,
  },
  enterEmail: {
    top: 316,
  },
  enterPassword: {
    top: 387,
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
