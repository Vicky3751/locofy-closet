import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ClosetNike = () => {
  return (
    <View style={styles.closetNike}>
      <View style={[styles.closetNikeChild, styles.closetChildLayout1]} />
      <View style={[styles.closetNikeItem, styles.closetChildLayout1]} />
      <View style={[styles.closetNikeInner, styles.closetChildLayout1]} />
      <View style={[styles.rectangleView, styles.closetChildLayout1]} />
      <View style={[styles.closetNikeChild1, styles.closetChildLayout1]} />
      <View style={[styles.closetNikeChild2, styles.closetChildLayout1]} />
      <View style={[styles.closetNikeChild3, styles.closetChildLayout1]} />
      <View style={[styles.closetNikeChild4, styles.closetChildLayout1]} />
      <View style={[styles.closetNikeChild5, styles.closetChildLayout]} />
      <View style={[styles.closetNikeChild6, styles.closetChildLayout]} />
      <View style={[styles.closetNikeChild7, styles.closetChildLayout]} />
      <View style={[styles.closetNikeChild8, styles.closetChildLayout]} />
      <View style={[styles.closetNikeChild9, styles.closetChildLayout1]} />
      <View style={[styles.closetNikeChild10, styles.closetChildLayout1]} />
      <Text style={[styles.nikeTShirt, styles.nikeTypo]}>
        Nike T shirt BLue color
      </Text>
      <Text style={[styles.brandNike, styles.nikeTypo]}>Brand: Nike</Text>
      <Text style={[styles.categoryTops, styles.nikeTypo]}>Category: Tops</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.addPhoto}>+ Add Photo</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.addPhoto}>Post</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={styles.addPhoto}>Delete</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closetChildLayout1: {
    height: 100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  closetChildLayout: {
    left: 239,
    height: 100,
    width: 100,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  nikeTypo: {
    height: 26,
    width: 153,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_3xs,
    left: 165,
    position: "absolute",
  },
  rectangleLayout: {
    height: 35,
    top: 238,
    width: 100,
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
  closetNikeChild: {
    backgroundColor: Color.gainsboro_100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: 19,
    top: 307,
  },
  closetNikeItem: {
    top: 417,
    backgroundColor: Color.gainsboro_100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: 19,
  },
  closetNikeInner: {
    top: 527,
    backgroundColor: Color.gainsboro_100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: 19,
  },
  rectangleView: {
    top: 637,
    backgroundColor: Color.gainsboro_100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: 19,
  },
  closetNikeChild1: {
    left: 129,
    backgroundColor: Color.gainsboro_100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
    top: 307,
  },
  closetNikeChild2: {
    left: 129,
    top: 417,
    backgroundColor: Color.gainsboro_100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  closetNikeChild3: {
    left: 129,
    top: 527,
    backgroundColor: Color.gainsboro_100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  closetNikeChild4: {
    left: 129,
    top: 637,
    backgroundColor: Color.gainsboro_100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  closetNikeChild5: {
    top: 307,
  },
  closetNikeChild6: {
    top: 417,
  },
  closetNikeChild7: {
    top: 527,
  },
  closetNikeChild8: {
    top: 637,
  },
  closetNikeChild9: {
    top: 123,
    left: 33,
    backgroundColor: Color.mediumslateblue_300,
    transform: [
      {
        rotate: "-10deg",
      },
    ],
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  closetNikeChild10: {
    top: 114,
    left: 41,
    backgroundColor: Color.gainsboro_100,
    width: 100,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  nikeTShirt: {
    top: 111,
  },
  brandNike: {
    top: 147,
  },
  categoryTops: {
    top: 181,
  },
  groupChild: {
    backgroundColor: Color.mediumslateblue_100,
  },
  addPhoto: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.white,
    textAlign: "center",
    justifyContent: "center",
    left: 0,
    top: 0,
    height: 35,
    alignItems: "center",
    display: "flex",
    width: 100,
    position: "absolute",
  },
  rectangleParent: {
    left: 129,
  },
  rectangleGroup: {
    left: 237,
  },
  groupInner: {
    backgroundColor: Color.crimson,
  },
  rectangleContainer: {
    left: 21,
  },
  closetNike: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ClosetNike;
