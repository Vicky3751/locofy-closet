import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Register = () => {
  return (
    <View style={styles.register}>
      <Text style={styles.register1}>Register</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.nextPosition]} />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </View>
      <Image
        style={styles.registerChild}
        resizeMode="cover"
        source={require("../assets/line-4.png")}
      />
      <View style={[styles.registerItem, styles.registerLayout]} />
      <View style={[styles.registerInner, styles.registerLayout]} />
      <View style={[styles.lineView, styles.registerLayout]} />
      <Text
        style={[styles.enterUsername, styles.enterTypo]}
      >{`Enter username `}</Text>
      <Text style={[styles.vinayakaOB, styles.enterPosition]}>
        Vinayaka O B
      </Text>
      <Text style={[styles.enterEmail, styles.enterPosition]}>Enter Email</Text>
      <Text style={[styles.enterPassword, styles.enterPosition]}>
        Enter Password
      </Text>
      <Image
        style={styles.reshotIconCheckSkua2pmxwe2}
        resizeMode="cover"
        source={require("../assets/reshoticoncheckskua2pmxwe-2.png")}
      />
      <Text style={[styles.text, styles.enterPosition]}>@</Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.nextTypo]}>
        <Text style={styles.alreadyHaveAnContainer1}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already have an account ? `}</Text>
          <Text style={styles.logIn}>Log In</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nextPosition: {
    left: 0,
    top: 0,
    height: 35,
    width: 100,
  },
  nextTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  registerLayout: {
    width: 256,
    borderTopWidth: 0.6,
    borderColor: "#000",
    borderStyle: "solid",
    left: 52,
    height: 1,
    position: "absolute",
  },
  enterTypo: {
    height: 23,
    width: 254,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontSize: FontSize.size_xs,
  },
  enterPosition: {
    left: 53,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  register1: {
    top: 205,
    left: 16,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 328,
    height: 77,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.mediumslateblue_100,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.mediumslateblue_100,
    position: "absolute",
  },
  next: {
    color: Color.white,
    left: 0,
    top: 0,
    height: 35,
    width: 100,
    justifyContent: "center",
  },
  rectangleParent: {
    top: 597,
    left: 130,
    height: 35,
    width: 100,
    position: "absolute",
  },
  registerChild: {
    top: 338,
    left: 77,
    width: 200,
    height: 1,
    position: "absolute",
  },
  registerItem: {
    top: 400,
  },
  registerInner: {
    top: 460,
  },
  lineView: {
    top: 520,
  },
  enterUsername: {
    top: 316,
    left: 86,
    color: Color.gray_100,
    width: 254,
    textAlign: "left",
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  vinayakaOB: {
    top: 377,
    color: Color.black,
    height: 23,
    width: 254,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontSize: FontSize.size_xs,
  },
  enterEmail: {
    top: 437,
    height: 23,
    width: 254,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontSize: FontSize.size_xs,
    color: Color.gray_100,
  },
  enterPassword: {
    top: 497,
    height: 23,
    width: 254,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontSize: FontSize.size_xs,
    color: Color.gray_100,
  },
  reshotIconCheckSkua2pmxwe2: {
    top: 324,
    left: 289,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 319,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.notoSansMedium,
    width: 16,
    height: 20,
    color: Color.black,
    justifyContent: "center",
    textAlign: "center",
    left: 53,
  },
  alreadyHaveAn: {
    color: Color.black,
  },
  logIn: {
    color: Color.mediumslateblue_100,
  },
  alreadyHaveAnContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  alreadyHaveAnContainer: {
    top: 655,
    left: 44,
    width: 266,
  },
  register: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;
