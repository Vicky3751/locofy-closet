import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const IntroScreenWomen4 = () => {
  return (
    <View style={styles.introScreenWomen4}>
      <Image
        style={[styles.introScreenWomen4Child, styles.introPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.introScreenWomen4Item, styles.introPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.introScreenWomen4Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={[styles.shareYourStyle, styles.shareYourStyleFlexBox]}>
        Share Your Style with the World
      </Text>
      <Text style={[styles.connectWithOther, styles.clozyconLetsYouClr]}>
        Connect with Other Fashion Enthusiasts
      </Text>
      <Text style={[styles.clozyconLetsYou, styles.prevFlexBox]}>
        ClozyCon lets you share your virtual closet and outfits with others on
        social media. Join the ClozyCon community today and share your style
        with the world.
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.rectangleParent, styles.prevLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.next}>Next</Text>
      </View>
      <Text style={[styles.prev, styles.prevLayout]}>Prev</Text>
      <View style={[styles.groupView, styles.prevLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <Image
        style={[styles.adobeExpress1Icon, styles.rectangleViewPosition]}
        resizeMode="cover"
        source={require("../assets/2751250-adobe-express-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  introPosition: {
    left: 0,
    position: "absolute",
  },
  shareYourStyleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  clozyconLetsYouClr: {
    color: Color.black,
    position: "absolute",
  },
  prevFlexBox: {
    fontSize: FontSize.size_xs,
    left: 42,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  rectangleViewPosition: {
    height: 253,
    width: 288,
    left: 34,
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
    top: 0,
    height: 35,
    width: 100,
    left: 0,
    position: "absolute",
  },
  introScreenWomen4Child: {
    top: 432,
    width: 300,
    height: 300,
  },
  introScreenWomen4Item: {
    top: 53,
    width: 125,
    height: 125,
  },
  introScreenWomen4Inner: {
    top: 162,
    left: 205,
    width: 180,
    height: 180,
    position: "absolute",
  },
  shareYourStyle: {
    top: 48,
    left: 16,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 328,
    height: 77,
    color: Color.mediumslateblue_100,
    position: "absolute",
  },
  connectWithOther: {
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
  clozyconLetsYou: {
    top: 535,
    lineHeight: 20,
    fontFamily: FontFamily.montserratRegular,
    width: 276,
    height: 88,
    color: Color.black,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
  },
  groupChild: {
    backgroundColor: Color.mediumslateblue_100,
  },
  next: {
    color: Color.white,
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
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    left: 222,
  },
  prev: {
    fontSize: FontSize.size_xs,
    left: 42,
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
  groupView: {
    left: 42,
    width: 100,
    top: 717,
  },
  adobeExpress1Icon: {
    overflow: "hidden",
  },
  introScreenWomen4: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IntroScreenWomen4;
