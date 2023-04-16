import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <Text style={styles.clozycon}>ClozyCon</Text>
      <Image
        style={[styles.globeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/globe.png")}
      />
      <Image
        style={[styles.gear2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/gear-2.png")}
      />
      <Image
        style={[styles.sendIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/send.png")}
      />
      <Image
        style={[styles.personIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/person.png")}
      />
      <Image
        style={[styles.bell1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/bell-1.png")}
      />
      <Image
        style={[styles.calendarEvent1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/calendarevent-1.png")}
      />
      <Image
        style={styles.basket1Icon}
        resizeMode="cover"
        source={require("../assets/basket-1.png")}
      />
      <Text style={[styles.closetItems, styles.closetTypo1]}>Closet Items</Text>
      <Text style={[styles.closetOutfits, styles.closetTypo1]}>
        Closet Outfits
      </Text>
      <Text style={[styles.closetSaved, styles.closetTypo1]}>Closet Saved</Text>
      <View style={[styles.homeItem, styles.homeLayout]} />
      <View style={[styles.homeInner, styles.homeLayout]} />
      <View style={[styles.rectangleView, styles.homeChild1ShadowBox]} />
      <View style={[styles.homeChild1, styles.homeChild1Layout]} />
      <View style={[styles.homeChild2, styles.homeChildLayout1]} />
      <View style={[styles.homeChild3, styles.homeChildLayout1]} />
      <View style={[styles.homeChild4, styles.homeChildLayout]} />
      <View style={[styles.homeChild5, styles.homeChildLayout]} />
      <Text style={[styles.viewAll, styles.viewTypo]}>View All</Text>
      <Text style={[styles.viewAll1, styles.viewTypo]}>View All</Text>
      <Text style={styles.keepYourWardrobe}>
        Keep your wardrobe organized and up-to-date by adding this item to your
        closet.
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.addToCloset}>+ Add to Closet</Text>
      </View>
      <Text style={[styles.closetItems1, styles.closetTypo]}>Closet Items</Text>
      <Text style={[styles.closetOutfits1, styles.closetTypo]}>
        Closet Outfits
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 20,
    width: 20,
    top: 763,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 29,
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  closetTypo1: {
    color: Color.black,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  homeLayout: {
    height: 100,
    width: 100,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_7xs,
    left: 19,
    position: "absolute",
  },
  homeChild1ShadowBox: {
    height: 55,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.mediumslateblue_200,
    top: 628,
    borderRadius: Border.br_7xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    position: "absolute",
  },
  homeChild1Layout: {
    width: 145,
    left: 190,
  },
  homeChildLayout1: {
    left: 125,
    height: 100,
    width: 100,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  homeChildLayout: {
    left: 231,
    height: 100,
    width: 100,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  viewTypo: {
    textDecoration: "underline",
    fontSize: FontSize.size_3xs,
    left: 292,
    color: Color.black,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  closetTypo: {
    height: 56,
    fontSize: FontSize.size_sm,
    top: 627,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  homeChild: {
    top: 750,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 3,
    elevation: 3,
    width: 360,
    height: 50,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  clozycon: {
    top: 24,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    color: Color.mediumslateblue_100,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  globeIcon: {
    left: 241,
  },
  gear2Icon: {
    left: 33,
  },
  sendIcon: {
    left: 318,
  },
  personIcon: {
    left: 311,
  },
  bell1Icon: {
    left: 273,
  },
  calendarEvent1Icon: {
    left: 103,
  },
  basket1Icon: {
    top: 761,
    left: 168,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  closetItems: {
    top: 196,
  },
  closetOutfits: {
    top: 386,
  },
  closetSaved: {
    top: 586,
  },
  homeItem: {
    top: 238,
  },
  homeInner: {
    top: 428,
  },
  rectangleView: {
    width: 152,
    left: 19,
  },
  homeChild1: {
    height: 55,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.mediumslateblue_200,
    top: 628,
    borderRadius: Border.br_7xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    position: "absolute",
  },
  homeChild2: {
    top: 238,
  },
  homeChild3: {
    top: 428,
  },
  homeChild4: {
    top: 238,
  },
  homeChild5: {
    top: 428,
  },
  viewAll: {
    top: 202,
  },
  viewAll1: {
    top: 392,
  },
  keepYourWardrobe: {
    top: 112,
    fontFamily: FontFamily.montserratRegular,
    width: 195,
    height: 57,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xs,
    color: Color.black,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.mediumslateblue_100,
    top: 0,
    height: 35,
    width: 128,
    left: 0,
    position: "absolute",
  },
  addToCloset: {
    color: Color.white,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
    height: 35,
    width: 128,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 119,
    left: 215,
    height: 35,
    width: 128,
    position: "absolute",
  },
  closetItems1: {
    width: 152,
    left: 19,
  },
  closetOutfits1: {
    width: 145,
    left: 190,
  },
  home: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Home;
