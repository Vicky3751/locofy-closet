import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const IntroScreenWomen3 = () => {
  return (
    <View style={styles.introScreenWomen3}>
      <Text style={[styles.planYourOutfits, styles.planYourOutfitsFlexBox]}>
        Plan Your Outfits in Seconds
      </Text>
      <Text style={[styles.getPersonalizedOutfit, styles.theAppSuggestsClr]}>
        Get Personalized Outfit Suggestions
      </Text>
      <Text style={[styles.theAppSuggests, styles.prevFlexBox]}>
        The app suggests outfit combinations based on the weather forecast, your
        schedule. Say goodbye to wardrobe indecision and hello to stylish,
        effortless outfits.
      </Text>
      <View
        style={[
          styles.introScreenWomen3Child,
          styles.introScreenWomen3ChildLayout,
        ]}
      />
      <View style={[styles.rectangleParent, styles.prevLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.next}>Next</Text>
      </View>
      <Text style={[styles.prev, styles.prevLayout]}>Prev</Text>
      <View style={[styles.introScreenWomen3Inner, styles.prevLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <Image
        style={[
          styles.fittingRoom03AdobeExpressIcon,
          styles.introScreenWomen3ChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/21852216-fitting-room-03-adobe-express-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  planYourOutfitsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  theAppSuggestsClr: {
    color: Color.black,
    position: "absolute",
  },
  prevFlexBox: {
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  introScreenWomen3ChildLayout: {
    width: 288,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  prevLayout: {
    height: 35,
    width: 100,
    top: 717,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 35,
    width: 100,
    position: "absolute",
  },
  planYourOutfits: {
    top: 48,
    left: 16,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 328,
    height: 77,
    color: Color.mediumslateblue_100,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  getPersonalizedOutfit: {
    top: 198,
    left: 47,
    fontSize: FontSize.size_lg,
    width: 266,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  theAppSuggests: {
    top: 535,
    left: 42,
    lineHeight: 20,
    fontFamily: FontFamily.montserratRegular,
    width: 276,
    height: 88,
    color: Color.black,
    position: "absolute",
  },
  introScreenWomen3Child: {
    top: 262,
    height: 253,
    left: 34,
    backgroundColor: Color.white,
  },
  groupChild: {
    backgroundColor: Color.mediumslateblue_100,
  },
  next: {
    color: Color.white,
    left: 0,
    top: 0,
    height: 35,
    width: 100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    left: 222,
  },
  prev: {
    left: 34,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.mediumslateblue_100,
  },
  groupItem: {
    borderStyle: "solid",
    borderColor: "#7a63f9",
    borderWidth: 1,
  },
  introScreenWomen3Inner: {
    left: 34,
  },
  fittingRoom03AdobeExpressIcon: {
    top: 215,
    left: 21,
    height: 326,
    overflow: "hidden",
  },
  introScreenWomen3: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IntroScreenWomen3;
