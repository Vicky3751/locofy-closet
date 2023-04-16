import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const IntroScreenWomen2 = () => {
  return (
    <View style={styles.introScreenWomen2}>
      <Text style={[styles.organizeYourWardrobe, styles.yourFlexBox]}>
        Organize Your Wardrobe with Ease
      </Text>
      <Text style={[styles.categorizeYourClothes, styles.simplyTakePhotosClr]}>
        Categorize Your Clothes with Confidence
      </Text>
      <Text style={[styles.simplyTakePhotos, styles.prevFlexBox]}>
        {" "}
        Simply take photos of each item and upload them to the app. Say goodbye
        to cluttered closets and hello to a more organized wardrobe.
      </Text>
      <View
        style={[
          styles.introScreenWomen2Child,
          styles.introScreenWomen2ChildLayout,
        ]}
      />
      <Text style={[styles.prev, styles.prevLayout]}>Prev</Text>
      <View style={[styles.rectangleParent, styles.prevLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.next}>Next</Text>
      </View>
      <View style={[styles.introScreenWomen2Inner, styles.prevLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <Image
        style={[
          styles.z2211w009n001184zp2184AIcon,
          styles.introScreenWomen2ChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/129z-2211w009n001184zp2184-adobe-express-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  yourFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  simplyTakePhotosClr: {
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
  introScreenWomen2ChildLayout: {
    height: 253,
    borderRadius: Border.br_5xl,
    top: 262,
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
  organizeYourWardrobe: {
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
  categorizeYourClothes: {
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
  simplyTakePhotos: {
    top: 535,
    left: 42,
    lineHeight: 20,
    fontFamily: FontFamily.montserratRegular,
    width: 276,
    height: 92,
    color: Color.black,
    position: "absolute",
  },
  introScreenWomen2Child: {
    left: 34,
    width: 288,
    backgroundColor: Color.white,
  },
  prev: {
    left: 36,
    height: 35,
    width: 100,
    top: 717,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.mediumslateblue_100,
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
    height: 35,
    width: 100,
    top: 717,
  },
  groupItem: {
    borderStyle: "solid",
    borderColor: "#7a63f9",
    borderWidth: 1,
  },
  introScreenWomen2Inner: {
    left: 36,
    height: 35,
    width: 100,
    top: 717,
  },
  z2211w009n001184zp2184AIcon: {
    left: 10,
    width: 334,
    overflow: "hidden",
  },
  introScreenWomen2: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IntroScreenWomen2;
