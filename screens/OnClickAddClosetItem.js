import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const OnClickAddClosetItem = () => {
  return (
    <View style={styles.onclickAddClosetItem}>
      <View
        style={[styles.onclickAddClosetItemChild, styles.onclickItemLayout1]}
      />
      <View
        style={[styles.onclickAddClosetItemItem, styles.onclickItemLayout1]}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.cancel, styles.textTypo]}>Cancel</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.cancel, styles.textTypo]}>Save</Text>
      </View>
      <View
        style={[styles.onclickAddClosetItemInner, styles.onclickItemLayout]}
      />
      <View style={[styles.lineView, styles.onclickItemLayout]} />
      <View
        style={[styles.onclickAddClosetItemChild1, styles.onclickItemLayout]}
      />
      <View
        style={[styles.onclickAddClosetItemChild2, styles.onclickItemLayout]}
      />
      <View
        style={[styles.onclickAddClosetItemChild3, styles.onclickItemLayout]}
      />
      <Text style={[styles.category, styles.nameTypo]}>Category</Text>
      <Text style={[styles.brand, styles.nameTypo]}>Brand</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.color, styles.nameTypo]}>Color</Text>
      <Text style={[styles.size, styles.nameTypo]}>Size</Text>
      <Image
        style={styles.textPosition}
        resizeMode="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>10</Text>
      <Text style={styles.addToCloset}>Add to Closet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  onclickItemLayout1: {
    height: 200,
    width: 200,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  rectangleLayout: {
    height: 35,
    width: 128,
    top: 722,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 35,
    width: 128,
    position: "absolute",
  },
  textTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  onclickItemLayout: {
    height: 1,
    width: 256,
    borderTopWidth: 0.6,
    borderColor: "#000",
    borderStyle: "solid",
    left: 52,
    position: "absolute",
  },
  nameTypo: {
    height: 23,
    width: 254,
    color: Color.gray_100,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 53,
    position: "absolute",
  },
  textPosition: {
    height: 50,
    width: 50,
    left: 247,
    top: 324,
    position: "absolute",
  },
  onclickAddClosetItemChild: {
    top: 168,
    backgroundColor: Color.mediumslateblue_300,
    transform: [
      {
        rotate: "-10deg",
      },
    ],
    left: 53,
    width: 200,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  onclickAddClosetItemItem: {
    top: 149,
    left: 72,
    backgroundColor: Color.gainsboro_100,
    width: 200,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.crimson,
  },
  cancel: {
    color: Color.white,
    left: 0,
    top: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    height: 35,
    width: 128,
    position: "absolute",
  },
  rectangleParent: {
    left: 46,
  },
  groupItem: {
    backgroundColor: Color.mediumslateblue_100,
  },
  rectangleGroup: {
    left: 186,
  },
  onclickAddClosetItemInner: {
    top: 446,
  },
  lineView: {
    top: 506,
  },
  onclickAddClosetItemChild1: {
    top: 566,
  },
  onclickAddClosetItemChild2: {
    top: 626,
  },
  onclickAddClosetItemChild3: {
    top: 686,
  },
  category: {
    top: 422,
  },
  brand: {
    top: 482,
  },
  name: {
    top: 542,
  },
  color: {
    top: 602,
  },
  size: {
    top: 662,
  },
  text: {
    color: Color.mediumslateblue_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  addToCloset: {
    top: 31,
    left: 16,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  onclickAddClosetItem: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default OnClickAddClosetItem;
