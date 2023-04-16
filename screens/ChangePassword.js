import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ChangePassword = () => {
  return (
    <View style={styles.changePassword}>
      <Text style={styles.changePassword1}>Change Password</Text>
      <View style={styles.changePasswordChild} />
      <View style={[styles.changePasswordItem, styles.changeLayout]} />
      <View style={[styles.changePasswordInner, styles.changeLayout]} />
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.next}>Next</Text>
      </View>
      <Text style={[styles.enterOtp, styles.enterTypo]}>{`Enter OTP `}</Text>
      <Text
        style={[styles.enterNewPassword, styles.enterTypo]}
      >{`Enter New Password `}</Text>
      <Text
        style={[styles.confirmPassword, styles.enterTypo]}
      >{`Confirm Password `}</Text>
      <Image
        style={styles.reshotIconCheckSkua2pmxwe1}
        resizeMode="cover"
        source={require("../assets/reshoticoncheckskua2pmxwe-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  changeLayout: {
    width: 256,
    height: 1,
    borderTopWidth: 0.6,
    borderColor: "#000",
    borderStyle: "solid",
    left: 52,
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
  changePassword1: {
    top: 205,
    left: 16,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.mediumslateblue_100,
    width: 328,
    height: 77,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  changePasswordChild: {
    top: 339,
    width: 219,
    height: 1,
    borderTopWidth: 0.6,
    borderColor: "#000",
    borderStyle: "solid",
    left: 52,
    position: "absolute",
  },
  changePasswordItem: {
    top: 410,
  },
  changePasswordInner: {
    top: 480,
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.mediumslateblue_100,
    left: 0,
    top: 0,
    height: 35,
    width: 100,
    position: "absolute",
  },
  next: {
    color: Color.white,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
    height: 35,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 537,
    left: 130,
    height: 35,
    width: 100,
    position: "absolute",
  },
  enterOtp: {
    top: 316,
  },
  enterNewPassword: {
    top: 387,
  },
  confirmPassword: {
    top: 457,
  },
  reshotIconCheckSkua2pmxwe1: {
    top: 324,
    left: 289,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  changePassword: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ChangePassword;
