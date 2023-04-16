import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const SinglePost = () => {
  return (
    <View style={styles.singlePost}>
      <View style={[styles.singlePostChild, styles.postPosition]} />
      <View style={[styles.post, styles.postLayout]}>
        <Image
          style={[
            styles.midasHofstraTidslvUansUnspIcon,
            styles.midasIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/midashofstratidslvuansunsplash-5.png")}
        />
        <Image
          style={[
            styles.midasHofstraTidslvUansUnspIcon1,
            styles.midasIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/midashofstratidslvuansunsplash-5.png")}
        />
        <View style={[styles.post1, styles.postLayout]}>
          <View style={styles.postChild} />
          <Image
            style={[styles.postItem, styles.postChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.vicky}>Vicky</Text>
          <Image
            style={[styles.icons8Topic50, styles.icons8Layout1]}
            resizeMode="cover"
            source={require("../assets/icons8topic50.png")}
          />
          <Image
            style={styles.icons8ThreeDots321}
            resizeMode="cover"
            source={require("../assets/icons8threedots32-7.png")}
          />
          <Image
            style={[styles.icons8ThreeDots322, styles.icons8Layout]}
            resizeMode="cover"
            source={require("../assets/icons8threedots32-2.png")}
          />
          <Image
            style={[styles.icons8ThreeDots324, styles.icons8Layout]}
            resizeMode="cover"
            source={require("../assets/icons8threedots32-2.png")}
          />
          <Image
            style={[styles.icons8ThreeDots326, styles.icons8Layout]}
            resizeMode="cover"
            source={require("../assets/icons8threedots32-2.png")}
          />
          <Image
            style={[styles.icons8ThreeDots323, styles.icons8Layout]}
            resizeMode="cover"
            source={require("../assets/icons8threedots32-2.png")}
          />
          <Image
            style={[styles.icons8ThreeDots325, styles.icons8Layout]}
            resizeMode="cover"
            source={require("../assets/icons8threedots32-2.png")}
          />
          <Image
            style={[styles.icons8Bookmark50, styles.icons8Layout1]}
            resizeMode="cover"
            source={require("../assets/icons8bookmark50.png")}
          />
          <Image
            style={styles.midasHofstraTidslvUansUnspIcon2}
            resizeMode="cover"
            source={require("../assets/midashofstratidslvuansunsplash-13.png")}
          />
          <Text
            style={styles.loremEpsumLorem}
          >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
          <Image
            style={[styles.icons8Heart501, styles.icons8Layout1]}
            resizeMode="cover"
            source={require("../assets/icons8heart50-1.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>102</Text>
          <Text style={[styles.text1, styles.textTypo]}>102</Text>
        </View>
      </View>
      <Image
        style={styles.chevronLeft1Icon}
        resizeMode="cover"
        source={require("../assets/chevronleft-1.png")}
      />
      <Text style={styles.back}>Back</Text>
      <Image
        style={[styles.heartFill1Icon, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/heartfill-2.png")}
      />
      <Image
        style={[styles.chatFill1Icon, styles.fill1IconPosition]}
        resizeMode="cover"
        source={require("../assets/chatfill-1.png")}
      />
      <Image
        style={[styles.bookmarkFill1Icon, styles.fill1IconPosition]}
        resizeMode="cover"
        source={require("../assets/bookmarkfill-1.png")}
      />
      <View style={[styles.singlePostItem, styles.singleChildLayout2]} />
      <View style={[styles.singlePostItem, styles.singleChildLayout2]} />
      <View style={[styles.rectangleView, styles.singleChildLayout2]} />
      <View style={[styles.singlePostChild1, styles.singleChildLayout2]} />
      <View style={[styles.singlePostChild2, styles.singleChildLayout2]} />
      <View style={[styles.singlePostChild2, styles.singleChildLayout2]} />
      <View style={[styles.singlePostChild4, styles.singleChildLayout2]} />
      <View style={[styles.singlePostChild5, styles.singleChildLayout2]} />
      <View style={[styles.singlePostChild6, styles.singleChildLayout1]} />
      <View style={[styles.singlePostChild6, styles.singleChildLayout1]} />
      <View style={[styles.singlePostChild8, styles.singleChildLayout1]} />
      <View style={[styles.singlePostChild9, styles.singleChildLayout1]} />
      <Image
        style={[styles.ellipseIcon, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singlePostChild10, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singlePostChild11, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singlePostChild12, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singlePostChild13, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singlePostChild14, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singlePostChild15, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singlePostChild16, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singlePostChild17, styles.iconChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singlePostChild18, styles.singleChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.singlePostChild19, styles.singleChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.singlePostChild20, styles.singleChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.singlePostChild21, styles.singleChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.vicky1, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky2, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky3, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky4, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky5, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky6, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky7, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.john, styles.johnTypo]}>John</Text>
      <Text style={[styles.john, styles.johnTypo]}>John</Text>
      <Text style={[styles.john2, styles.johnTypo]}>John</Text>
      <Text style={[styles.john3, styles.johnTypo]}>John</Text>
      <Text style={[styles.john4, styles.johnTypo]}>John</Text>
      <Text style={[styles.john4, styles.johnTypo]}>John</Text>
      <Text style={[styles.john6, styles.johnTypo]}>John</Text>
      <Text style={[styles.john7, styles.johnTypo]}>John</Text>
      <Text
        style={[styles.loremEpsumLorem1, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem1, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem3, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem4, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem5, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem5, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem7, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem8, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem9, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem9, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem11, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem12, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem13, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem13, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem15, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem16, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem17, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem17, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem19, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem20, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text style={[styles.reply, styles.replyTypo]}>Reply</Text>
      <Text style={[styles.reply1, styles.replyTypo]}>Reply</Text>
      <Text style={[styles.reply2, styles.replyTypo]}>Reply</Text>
      <Text style={[styles.reply3, styles.replyTypo]}>Reply</Text>
      <Text style={[styles.reply4, styles.replyTypo]}>Reply</Text>
      <Text style={[styles.reply5, styles.replyTypo]}>Reply</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  postLayout: {
    height: 871,
    position: "absolute",
  },
  midasIconLayout: {
    height: 350,
    width: 300,
    marginTop: -350.5,
    top: "50%",
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  postChildLayout: {
    height: 32,
    width: 32,
  },
  icons8Layout1: {
    height: 24,
    width: 24,
  },
  icons8Layout: {
    height: 12,
    width: 12,
    left: 255,
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
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iconChildPosition: {
    left: 47,
    position: "absolute",
  },
  fill1IconPosition: {
    top: 575,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  singleChildLayout2: {
    height: 164,
    borderWidth: 1,
    borderColor: "#7a63f9",
    borderStyle: "solid",
    left: 31,
    width: 327,
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  singleChildLayout1: {
    height: 77,
    borderWidth: 1,
    borderColor: "#7a63f9",
    borderStyle: "solid",
    left: 31,
    width: 327,
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  singleChildLayout: {
    height: 28,
    width: 28,
    left: 80,
    position: "absolute",
  },
  vickyTypo: {
    fontSize: FontSize.size_sm,
    left: 80,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  johnTypo: {
    width: 42,
    left: 113,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  loremTypo1: {
    height: 29,
    width: 257,
    left: 80,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  loremTypo: {
    width: 224,
    height: 29,
    left: 113,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  replyTypo: {
    left: 99,
    color: Color.mediumslateblue_100,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  singlePostChild: {
    backgroundColor: Color.gainsboro_100,
    width: 390,
    height: 30,
  },
  midasHofstraTidslvUansUnspIcon: {
    right: 4,
  },
  midasHofstraTidslvUansUnspIcon1: {
    right: 338,
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  vicky: {
    top: 5,
    left: 33,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  icons8Topic50: {
    left: 91,
    top: 460,
    width: 24,
    position: "absolute",
  },
  icons8ThreeDots321: {
    top: 7,
    left: 286,
    width: 18,
    height: 18,
    position: "absolute",
  },
  icons8ThreeDots322: {
    top: 519,
  },
  icons8ThreeDots324: {
    top: 689,
  },
  icons8ThreeDots326: {
    top: 859,
  },
  icons8ThreeDots323: {
    top: 599,
  },
  icons8ThreeDots325: {
    top: 769,
  },
  icons8Bookmark50: {
    left: 265,
    top: 460,
    width: 24,
    position: "absolute",
  },
  midasHofstraTidslvUansUnspIcon2: {
    top: 78,
    height: 364,
    width: 327,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  loremEpsumLorem: {
    top: 42,
    left: 14,
    width: 319,
    height: 40,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  icons8Heart501: {
    left: 16,
    top: 460,
    width: 24,
    position: "absolute",
  },
  text: {
    left: 40,
  },
  text1: {
    left: 115,
  },
  post1: {
    left: 309,
    width: 333,
    height: 871,
    top: 0,
  },
  post: {
    marginTop: -760,
    right: -278,
    width: 916,
    top: "50%",
    height: 871,
  },
  chevronLeft1Icon: {
    left: 19,
    top: 67,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  back: {
    left: 45,
    fontSize: FontSize.size_lg,
    width: 77,
    height: 22,
    color: Color.mediumslateblue_100,
    top: 67,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  heartFill1Icon: {
    top: 576,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  chatFill1Icon: {
    left: 122,
  },
  bookmarkFill1Icon: {
    left: 296,
  },
  singlePostItem: {
    top: 616,
  },
  rectangleView: {
    top: 1041,
  },
  singlePostChild1: {
    top: 1466,
  },
  singlePostChild2: {
    top: 786,
  },
  singlePostChild4: {
    top: 1211,
  },
  singlePostChild5: {
    top: 1636,
  },
  singlePostChild6: {
    top: 956,
  },
  singlePostChild8: {
    top: 1381,
  },
  singlePostChild9: {
    top: 1806,
  },
  ellipseIcon: {
    top: 625,
    height: 32,
    width: 32,
  },
  singlePostChild10: {
    top: 1050,
    height: 32,
    width: 32,
  },
  singlePostChild11: {
    top: 1475,
    height: 32,
    width: 32,
  },
  singlePostChild12: {
    top: 795,
    height: 32,
    width: 32,
  },
  singlePostChild13: {
    top: 1220,
    height: 32,
    width: 32,
  },
  singlePostChild14: {
    top: 1645,
    height: 32,
    width: 32,
  },
  singlePostChild15: {
    top: 965,
    height: 32,
    width: 32,
  },
  singlePostChild16: {
    top: 1390,
    height: 32,
    width: 32,
  },
  singlePostChild17: {
    top: 1815,
    height: 32,
    width: 32,
  },
  singlePostChild18: {
    top: 705,
  },
  singlePostChild19: {
    top: 875,
  },
  singlePostChild20: {
    top: 1300,
  },
  singlePostChild21: {
    top: 1725,
  },
  vicky1: {
    top: 630,
  },
  vicky2: {
    top: 1055,
  },
  vicky3: {
    top: 1480,
  },
  vicky4: {
    top: 800,
  },
  vicky5: {
    top: 970,
  },
  vicky6: {
    top: 1395,
  },
  vicky7: {
    top: 1820,
  },
  john: {
    top: 710,
  },
  john2: {
    top: 1135,
  },
  john3: {
    top: 1560,
  },
  john4: {
    top: 880,
  },
  john6: {
    top: 1305,
  },
  john7: {
    top: 1730,
  },
  loremEpsumLorem1: {
    top: 651,
  },
  loremEpsumLorem3: {
    top: 1076,
  },
  loremEpsumLorem4: {
    top: 1501,
  },
  loremEpsumLorem5: {
    top: 821,
  },
  loremEpsumLorem7: {
    top: 1246,
  },
  loremEpsumLorem8: {
    top: 1671,
  },
  loremEpsumLorem9: {
    top: 991,
  },
  loremEpsumLorem11: {
    top: 1416,
  },
  loremEpsumLorem12: {
    top: 1841,
  },
  loremEpsumLorem13: {
    top: 731,
  },
  loremEpsumLorem15: {
    top: 1156,
  },
  loremEpsumLorem16: {
    top: 1581,
  },
  loremEpsumLorem17: {
    top: 901,
  },
  loremEpsumLorem19: {
    top: 1326,
  },
  loremEpsumLorem20: {
    top: 1751,
  },
  reply: {
    top: 683,
  },
  reply1: {
    top: 1108,
  },
  reply2: {
    top: 1533,
  },
  reply3: {
    top: 853,
  },
  reply4: {
    top: 1278,
  },
  reply5: {
    top: 1703,
  },
  singlePost: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1750,
    overflow: "hidden",
    borderRadius: Border.br_5xl,
  },
});

export default SinglePost;
