import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SplashScreen1 = () => {
  return (
    <View style={styles.splashScreen1}>
      <Image
        style={styles.splashScreen1Child}
        resizeMode="cover"
        source={require("../assets/group-17.png")}
      />
      <Text style={styles.elevateYourStyle}>
        Elevate Your Style and Share Your Closet
      </Text>
      <Image
        style={styles.logoAdobeExpress1Icon}
        resizeMode="cover"
        source={require("../assets/logo-adobe-express-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen1Child: {
    top: 0,
    left: 0,
    width: 361,
    position: "absolute",
    height: 800,
  },
  elevateYourStyle: {
    top: 442,
    left: 33,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    color: Color.black,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 295,
    height: 32,
    position: "absolute",
  },
  logoAdobeExpress1Icon: {
    top: 180,
    left: 2,
    width: 360,
    height: 360,
    position: "absolute",
    overflow: "hidden",
  },
  splashScreen1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default SplashScreen1;
