import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword}>
      <Text style={[styles.verifyEmail, styles.nextFlexBox]}>Verify Email</Text>
      <View style={styles.forgotPasswordChild} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.nextPosition]} />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </View>
      <Text style={[styles.enterOtp, styles.nextTypo]}>{`Enter OTP `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nextFlexBox: {
    justifyContent: "center",
    textAlign: "center",
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
  verifyEmail: {
    top: 214,
    left: 16,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.mediumslateblue_100,
    width: 328,
    height: 77,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
  },
  forgotPasswordChild: {
    top: 370,
    left: 52,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 0.6,
    width: 256,
    height: 1,
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
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  rectangleParent: {
    top: 416,
    left: 130,
    height: 35,
    width: 100,
    position: "absolute",
  },
  enterOtp: {
    top: 346,
    left: 53,
    color: Color.gray_100,
    textAlign: "left",
    width: 254,
    height: 23,
  },
  forgotPassword: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ForgotPassword;
