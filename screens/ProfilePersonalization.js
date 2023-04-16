import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfilePersonalization = () => {
  return (
    <View style={styles.profilePersonalization}>
      <Image
        style={styles.profilePersonalizationChild}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={styles.profilePersonalizationItem}
        resizeMode="cover"
        source={require("../assets/ellipse-26.png")}
      />
      <Image
        style={styles.pen1Icon}
        resizeMode="cover"
        source={require("../assets/pen-1.png")}
      />
      <View
        style={[styles.profilePersonalizationInner, styles.profileChildLayout]}
      />
      <View style={[styles.lineView, styles.profileChildLayout]} />
      <View
        style={[styles.profilePersonalizationChild1, styles.profileChildLayout]}
      />
      <View
        style={[styles.profilePersonalizationChild2, styles.profileChildLayout]}
      />
      <View
        style={[styles.profilePersonalizationChild3, styles.profileChildLayout]}
      />
      <View
        style={[styles.profilePersonalizationChild4, styles.profileChildLayout]}
      />
      <View
        style={[styles.profilePersonalizationChild5, styles.profileChildLayout]}
      />
      <View
        style={[styles.profilePersonalizationChild6, styles.profileChildLayout]}
      />
      <View
        style={[styles.profilePersonalizationChild7, styles.profileChildLayout]}
      />
      <View
        style={[styles.profilePersonalizationChild8, styles.profileChildLayout]}
      />
      <Text style={[styles.selectGender, styles.optionalTypo]}>
        Select Gender
      </Text>
      <Text style={[styles.dob, styles.optionalTypo]}>DOB</Text>
      <Text style={[styles.username, styles.optionalTypo]}>username</Text>
      <Text style={[styles.fullName, styles.optionalTypo]}>Full Name</Text>
      <Text style={[styles.phoneNo, styles.optionalTypo]}>Phone No</Text>
      <Text style={[styles.instagramOptional, styles.optionalTypo]}>
        Instagram (optional)
      </Text>
      <Text style={[styles.facebookOptional, styles.optionalTypo]}>
        Facebook (optional)
      </Text>
      <Text style={[styles.height, styles.optionalTypo]}>Height</Text>
      <Text style={[styles.weight, styles.optionalTypo]}>Weight</Text>
      <Text style={[styles.clothingSizePreference, styles.optionalTypo]}>
        Clothing Size preference
      </Text>
      <Image
        style={[styles.chevronDown1Icon, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevrondown-1.png")}
      />
      <Image
        style={[styles.chevronDown2Icon, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevrondown-1.png")}
      />
      <Image
        style={[styles.chevronDown3Icon, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevrondown-1.png")}
      />
      <Image
        style={[styles.chevronDown4Icon, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevrondown-1.png")}
      />
      <Text style={[styles.measurements, styles.measurementsTypo]}>
        Measurements
      </Text>
      <Text style={[styles.socialMediaLinks, styles.measurementsTypo]}>
        Social Media Links
      </Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </View>
      <Text style={[styles.cancel, styles.cancelPosition]}>Cancel</Text>
      <View style={styles.cancelPosition}>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <Image
        style={[styles.chevronDown2Icon1, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevrondown-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileChildLayout: {
    height: 1,
    width: 256,
    borderTopWidth: 0.6,
    borderColor: "#000",
    borderStyle: "solid",
    left: 52,
    position: "absolute",
  },
  optionalTypo: {
    height: 23,
    width: 254,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 53,
    position: "absolute",
  },
  chevronIconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  measurementsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.mediumslateblue_100,
    fontSize: FontSize.size_xs,
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
  saveTypo: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  cancelPosition: {
    left: 40,
    height: 35,
    top: 1085,
    width: 100,
    position: "absolute",
  },
  profilePersonalizationChild: {
    top: 91,
    left: 130,
    height: 100,
    width: 100,
    position: "absolute",
  },
  profilePersonalizationItem: {
    top: 164,
    left: 202,
    width: 25,
    height: 25,
    position: "absolute",
  },
  pen1Icon: {
    top: 171,
    left: 209,
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  profilePersonalizationInner: {
    top: 401,
  },
  lineView: {
    top: 461,
  },
  profilePersonalizationChild1: {
    top: 341,
  },
  profilePersonalizationChild2: {
    top: 281,
  },
  profilePersonalizationChild3: {
    top: 529,
  },
  profilePersonalizationChild4: {
    top: 909,
  },
  profilePersonalizationChild5: {
    top: 969,
  },
  profilePersonalizationChild6: {
    top: 659,
  },
  profilePersonalizationChild7: {
    top: 719,
  },
  profilePersonalizationChild8: {
    top: 779,
  },
  selectGender: {
    top: 377,
  },
  dob: {
    top: 437,
  },
  username: {
    top: 317,
  },
  fullName: {
    top: 257,
  },
  phoneNo: {
    top: 505,
  },
  instagramOptional: {
    top: 885,
  },
  facebookOptional: {
    top: 945,
  },
  height: {
    top: 635,
  },
  weight: {
    top: 695,
  },
  clothingSizePreference: {
    top: 755,
  },
  chevronDown1Icon: {
    top: 384,
    left: 280,
    height: 16,
    width: 16,
  },
  chevronDown2Icon: {
    top: 643,
    left: 280,
    height: 16,
    width: 16,
  },
  chevronDown3Icon: {
    top: 702,
    left: 280,
    height: 16,
    width: 16,
  },
  chevronDown4Icon: {
    top: 762,
    left: 280,
    height: 16,
    width: 16,
  },
  measurements: {
    top: 586,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 52,
  },
  socialMediaLinks: {
    top: 843,
    left: 53,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  groupChild: {
    backgroundColor: Color.mediumslateblue_100,
  },
  save: {
    color: Color.white,
    left: 0,
    top: 0,
    justifyContent: "center",
    height: 35,
    width: 100,
    position: "absolute",
  },
  rectangleParent: {
    left: 220,
    height: 35,
    top: 1085,
    width: 100,
    position: "absolute",
  },
  cancel: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.mediumslateblue_100,
    left: 40,
  },
  groupItem: {
    borderColor: "#7a63f9",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
  },
  chevronDown2Icon1: {
    top: 405,
    left: 172,
  },
  profilePersonalization: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1183,
    overflow: "hidden",
  },
});

export default ProfilePersonalization;
