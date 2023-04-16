import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ClosetItems = () => {
  return (
    <View style={styles.closetItems}>
      <View style={styles.closetItemsChild} />
      <Image
        style={[styles.search1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/search-1.png")}
      />
      <Text style={styles.searchForClosets}>Search for closets...</Text>
      <View style={[styles.closetItemsItem, styles.closetLayout]} />
      <View style={[styles.closetItemsInner, styles.closetLayout]} />
      <View style={[styles.rectangleView, styles.closetLayout]} />
      <View style={[styles.closetItemsChild1, styles.closetChildLayout3]} />
      <View style={[styles.closetItemsChild2, styles.closetChildLayout3]} />
      <View style={[styles.closetItemsChild3, styles.closetChildLayout3]} />
      <View style={[styles.closetItemsChild4, styles.closetChildLayout2]} />
      <View style={[styles.closetItemsChild5, styles.closetChildLayout1]} />
      <View style={[styles.closetItemsChild6, styles.closetChildLayout]} />
      <View style={[styles.closetItemsChild7, styles.closetChildLayout2]} />
      <View style={[styles.closetItemsChild8, styles.closetChildLayout1]} />
      <View style={[styles.closetItemsChild9, styles.closetChildLayout]} />
      <Image
        style={[styles.plus1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/plus-1.png")}
      />
      <Text style={[styles.tops, styles.topsTypo]}>Tops</Text>
      <Text style={[styles.bottoms, styles.topsTypo]}>Bottoms</Text>
      <Text style={[styles.accessories, styles.footwearTypo]}>Accessories</Text>
      <Text style={[styles.addItem, styles.addItemTypo]}>Add Item</Text>
      <Text style={[styles.footwear, styles.footwearTypo]}>Footwear</Text>
      <Text style={[styles.workwear, styles.addItemTypo]}>Workwear</Text>
      <Text style={styles.closetItems1}>Closet Items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  closetLayout: {
    transform: [
      {
        rotate: "-10deg",
      },
    ],
    height: 100,
    width: 100,
    backgroundColor: Color.mediumslateblue_300,
    borderRadius: Border.br_7xs,
    left: 42,
    position: "absolute",
  },
  closetChildLayout3: {
    left: 202,
    transform: [
      {
        rotate: "-10deg",
      },
    ],
    height: 100,
    width: 100,
    backgroundColor: Color.mediumslateblue_300,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  closetChildLayout2: {
    top: 205,
    height: 100,
    width: 100,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gainsboro_100,
    position: "absolute",
  },
  closetChildLayout1: {
    top: 385,
    height: 100,
    width: 100,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gainsboro_100,
    position: "absolute",
  },
  closetChildLayout: {
    top: 565,
    height: 100,
    width: 100,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gainsboro_100,
    position: "absolute",
  },
  topsTypo: {
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.black,
    width: 100,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  footwearTypo: {
    top: 502,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    width: 100,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  addItemTypo: {
    top: 682,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    width: 100,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  closetItemsChild: {
    top: 87,
    left: 16,
    borderRadius: Border.br_xs,
    width: 328,
    height: 30,
    backgroundColor: Color.gainsboro_100,
    position: "absolute",
  },
  search1Icon: {
    top: 94,
    left: 31,
    width: 16,
    height: 16,
  },
  searchForClosets: {
    top: 96,
    left: 56,
    fontFamily: FontFamily.montserratRegular,
    color: Color.gray_300,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  closetItemsItem: {
    top: 215,
  },
  closetItemsInner: {
    top: 395,
  },
  rectangleView: {
    top: 575,
  },
  closetItemsChild1: {
    top: 215,
  },
  closetItemsChild2: {
    top: 395,
  },
  closetItemsChild3: {
    top: 575,
  },
  closetItemsChild4: {
    left: 50,
  },
  closetItemsChild5: {
    left: 50,
  },
  closetItemsChild6: {
    left: 50,
  },
  closetItemsChild7: {
    left: 210,
  },
  closetItemsChild8: {
    left: 210,
  },
  closetItemsChild9: {
    left: 210,
  },
  plus1Icon: {
    top: 590,
    left: 235,
    width: 50,
    height: 50,
  },
  tops: {
    top: 318,
    left: 50,
  },
  bottoms: {
    top: 322,
    left: 210,
  },
  accessories: {
    left: 210,
  },
  addItem: {
    left: 210,
  },
  footwear: {
    left: 50,
  },
  workwear: {
    left: 50,
  },
  closetItems1: {
    top: 31,
    left: 18,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  closetItems: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ClosetItems;
