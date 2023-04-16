import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomeSlider = () => {
  return (
    <View style={styles.homeSlider}>
      <Image
        style={styles.midasHofstraTidslvUansUnspIcon}
        resizeMode="cover"
        source={require("../assets/midashofstratidslvuansunsplash-5.png")}
      />
      <View style={[styles.homeSliderChild, styles.postItemPosition]} />
      <Text style={styles.posts}>Posts</Text>
      <View style={[styles.post, styles.postLayout]}>
        <View style={styles.postChild} />
        <Image
          style={[styles.postItem, styles.postItemPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.vicky, styles.vickyTypo]}>Vicky</Text>
        <Image
          style={[styles.icons8Topic50, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8topic50.png")}
        />
        <Image
          style={styles.icons8ThreeDots321}
          resizeMode="cover"
          source={require("../assets/icons8threedots32-7.png")}
        />
        <Image
          style={[styles.icons8Bookmark50, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8bookmark50.png")}
        />
        <Image
          style={[
            styles.midasHofstraTidslvUansUnspIcon1,
            styles.postItemPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/midashofstratidslvuansunsplash-1.png")}
        />
        <Text
          style={styles.loremEpsumLorem}
        >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
        <Image
          style={[styles.icons8Heart501, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8heart50-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>102</Text>
        <Text style={[styles.text1, styles.textTypo]}>102</Text>
      </View>
      <View style={[styles.post1, styles.postLayout]}>
        <View style={styles.postChild} />
        <Image
          style={[styles.postItem, styles.postItemPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.vicky, styles.vickyTypo]}>Vicky</Text>
        <Image
          style={[styles.icons8Topic50, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8topic50.png")}
        />
        <Image
          style={styles.icons8ThreeDots321}
          resizeMode="cover"
          source={require("../assets/icons8threedots32-7.png")}
        />
        <Image
          style={[styles.icons8Bookmark50, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8bookmark50.png")}
        />
        <Image
          style={[
            styles.midasHofstraTidslvUansUnspIcon1,
            styles.postItemPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/midashofstratidslvuansunsplash-11.png")}
        />
        <Text
          style={styles.loremEpsumLorem}
        >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
        <Image
          style={[styles.icons8Heart501, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8heart50-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>102</Text>
        <Text style={[styles.text1, styles.textTypo]}>102</Text>
      </View>
      <View style={[styles.post2, styles.postLayout]}>
        <Image
          style={[
            styles.midasHofstraTidslvUansUnspIcon3,
            styles.midasIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/midashofstratidslvuansunsplash-5.png")}
        />
        <Image
          style={[
            styles.midasHofstraTidslvUansUnspIcon4,
            styles.midasIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/midashofstratidslvuansunsplash-5.png")}
        />
        <View style={[styles.post3, styles.postLayout]}>
          <View style={styles.postChild} />
          <Image
            style={[styles.postItem, styles.postItemPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.vicky, styles.vickyTypo]}>Vicky</Text>
          <Image
            style={styles.icons8ThreeDots321}
            resizeMode="cover"
            source={require("../assets/icons8threedots32-7.png")}
          />
          <Image
            style={[styles.icons8Bookmark50, styles.icons8Layout]}
            resizeMode="cover"
            source={require("../assets/icons8bookmark50.png")}
          />
          <Image
            style={[
              styles.midasHofstraTidslvUansUnspIcon1,
              styles.postItemPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/midashofstratidslvuansunsplash-12.png")}
          />
          <Text
            style={styles.loremEpsumLorem}
          >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
          <Text style={[styles.text, styles.textTypo]}>102</Text>
          <Text style={[styles.text1, styles.textTypo]}>102</Text>
        </View>
        <Image
          style={styles.icons8DotsLoading501}
          resizeMode="cover"
          source={require("../assets/icons8dotsloading50-1.png")}
        />
      </View>
      <Image
        style={[styles.icons8DotsLoading503, styles.icons8Position]}
        resizeMode="cover"
        source={require("../assets/icons8dotsloading50-1.png")}
      />
      <Image
        style={[styles.icons8DotsLoading502, styles.icons8Position]}
        resizeMode="cover"
        source={require("../assets/icons8dotsloading50-1.png")}
      />
      <Text style={[styles.stories, styles.vickyTypo]}>Stories</Text>
      <Text style={styles.addToStory}>+ Add to Story</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postItemPosition: {
    left: 0,
    position: "absolute",
  },
  postLayout: {
    height: 484,
    position: "absolute",
  },
  vickyTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  icons8Layout: {
    height: 24,
    width: 24,
    top: 460,
    position: "absolute",
  },
  textTypo: {
    width: 25,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansRegular,
    height: 24,
    top: 460,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  midasIconPosition: {
    marginTop: -157,
    height: 350,
    width: 300,
    top: "50%",
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  icons8Position: {
    left: 160,
    height: 50,
    width: 50,
    position: "absolute",
  },
  midasHofstraTidslvUansUnspIcon: {
    marginTop: 473,
    right: 60,
    height: 350,
    width: 300,
    top: "50%",
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  homeSliderChild: {
    backgroundColor: Color.gainsboro_100,
    width: 390,
    height: 30,
    top: 0,
  },
  posts: {
    top: 70,
    left: 23,
    fontSize: FontSize.size_5xl,
    color: Color.mediumslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  postChild: {
    top: -12,
    left: -17,
    width: 361,
    height: 517,
    display: "none",
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  postItem: {
    width: 32,
    height: 32,
    top: 0,
  },
  vicky: {
    top: 5,
    left: 33,
    fontSize: FontSize.size_base,
  },
  icons8Topic50: {
    left: 91,
  },
  icons8ThreeDots321: {
    top: 7,
    left: 286,
    width: 18,
    height: 18,
    position: "absolute",
  },
  icons8Bookmark50: {
    left: 265,
  },
  midasHofstraTidslvUansUnspIcon1: {
    top: 78,
    width: 327,
    height: 364,
    borderRadius: Border.br_5xl,
  },
  loremEpsumLorem: {
    top: 42,
    left: 14,
    fontSize: FontSize.size_3xs,
    width: 319,
    height: 40,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  icons8Heart501: {
    left: 16,
  },
  text: {
    left: 40,
  },
  text1: {
    left: 115,
  },
  post: {
    top: 1263,
    width: 333,
    height: 484,
    left: 31,
  },
  post1: {
    top: 689,
    width: 333,
    height: 484,
    left: 31,
  },
  midasHofstraTidslvUansUnspIcon3: {
    right: 4,
  },
  midasHofstraTidslvUansUnspIcon4: {
    right: 338,
  },
  post3: {
    left: 309,
    width: 333,
    height: 484,
    top: 0,
  },
  icons8DotsLoading501: {
    top: 399,
    left: 438,
    height: 50,
    width: 50,
    position: "absolute",
  },
  post2: {
    marginTop: -760,
    right: -278,
    width: 916,
    height: 484,
    top: "50%",
  },
  icons8DotsLoading503: {
    top: 1662,
  },
  icons8DotsLoading502: {
    top: 1088,
  },
  stories: {
    top: 40,
    left: 22,
    fontSize: FontSize.size_sm,
  },
  addToStory: {
    top: 45,
    left: 260,
    fontSize: FontSize.size_xs,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  homeSlider: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1750,
    overflow: "hidden",
    borderRadius: Border.br_5xl,
  },
});

export default HomeSlider;
