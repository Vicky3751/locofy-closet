import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const IntroScreenWomen1 = () => {
  return (
    <View style={styles.introScreenWomen1}>
      <Text style={styles.welcomeToClozycon}> Welcome to ClozyCon!</Text>
      <Text style={[styles.yourVirtualCloset, styles.withClozyconYouClr]}>
        Your Virtual Closet Organizer
      </Text>
      <Text
        style={[styles.withClozyconYou, styles.nextFlexBox]}
      >{`With ClozyCon, you can easily manage your wardrobe and get personalized outfit suggestions based on the clothes you already own. `}</Text>
      <View
        style={[
          styles.introScreenWomen1Child,
          styles.introScreenWomen1ChildLayout,
        ]}
      />
      <Image
        style={[
          styles.smilingWomanStandingInFron,
          styles.introScreenWomen1ChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/13683653-smiling-woman-standing-in-front-of-open-wardrobe-1-adobe-express-1.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.nextLayout]} />
        <Text style={[styles.next, styles.nextLayout]}>Next</Text>
        <Text style={[styles.skip, styles.nextLayout]}>Skip</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  withClozyconYouClr: {
    color: Color.black,
    position: "absolute",
  },
  nextFlexBox: {
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  introScreenWomen1ChildLayout: {
    height: 253,
    width: 288,
    borderRadius: Border.br_5xl,
    left: 34,
    top: 240,
    position: "absolute",
  },
  nextLayout: {
    width: 100,
    top: 0,
    height: 35,
    position: "absolute",
  },
  welcomeToClozycon: {
    top: 48,
    left: 16,
    fontSize: FontSize.size_9xl,
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
  yourVirtualCloset: {
    top: 198,
    left: 47,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  withClozyconYou: {
    top: 513,
    left: 42,
    lineHeight: 20,
    fontFamily: FontFamily.montserratRegular,
    width: 276,
    height: 98,
    color: Color.black,
    position: "absolute",
  },
  introScreenWomen1Child: {
    backgroundColor: "#efeded",
  },
  smilingWomanStandingInFron: {
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.mediumslateblue_100,
    left: 190,
    width: 100,
    top: 0,
  },
  next: {
    color: Color.white,
    left: 190,
    width: 100,
    top: 0,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  skip: {
    left: 0,
    width: 100,
    top: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.mediumslateblue_100,
  },
  rectangleParent: {
    top: 717,
    left: 32,
    width: 290,
    height: 35,
    position: "absolute",
  },
  introScreenWomen1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default IntroScreenWomen1;
