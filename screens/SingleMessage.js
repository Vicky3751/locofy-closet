import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SingleMessage = () => {
  return (
    <View style={styles.singleMessage}>
      <View style={[styles.singleMessageChild, styles.rectangleViewPosition]} />
      <Image
        style={[styles.chevronLeft1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/chevronleft-1.png")}
      />
      <Text style={styles.back}>Back</Text>
      <Image
        style={[styles.singleMessageItem, styles.singleLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.singleMessageInner, styles.singleLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={styles.vicky}>Vicky</Text>
      <Image
        style={styles.icons8ThreeDots327}
        resizeMode="cover"
        source={require("../assets/icons8threedots32-7.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.singleMessageChild1, styles.cameraIconPosition]} />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.cameraIcon, styles.cameraIconPosition]}
        resizeMode="cover"
        source={require("../assets/camera.png")}
      />
      <Image
        style={[styles.emojiSmileIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/emojismile.png")}
      />
      <View style={styles.singleMessageChild2} />
      <Image
        style={styles.midasHofstraTidslvUansUnspIcon}
        resizeMode="cover"
        source={require("../assets/midashofstratidslvuansunsplash-2.png")}
      />
      <View style={[styles.singleMessageChild3, styles.singleChildLayout1]} />
      <View style={[styles.singleMessageChild4, styles.singleChildLayout1]} />
      <View style={[styles.singleMessageChild5, styles.singleChildLayout1]} />
      <View style={[styles.singleMessageChild6, styles.singleChildLayout1]} />
      <View style={[styles.singleMessageChild7, styles.singleChildLayout1]} />
      <View style={[styles.singleMessageChild8, styles.singleChildLayout1]} />
      <View style={[styles.singleMessageChild9, styles.singleChildLayout]} />
      <View style={[styles.singleMessageChild10, styles.singleChildLayout]} />
      <View style={[styles.singleMessageChild11, styles.singleChildLayout]} />
      <View style={[styles.singleMessageChild12, styles.singleChildLayout]} />
      <View style={[styles.singleMessageChild13, styles.singleChildLayout]} />
      <View style={[styles.singleMessageChild14, styles.singleChildLayout]} />
      <View style={[styles.singleMessageChild15, styles.singleChildLayout]} />
      <Text
        style={[styles.loremEpsumLorem, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem1, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem2, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem3, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem4, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem5, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem6, styles.loremTypo1]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem7, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem8, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem9, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem10, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem11, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem12, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem13, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text style={[styles.minsAgo, styles.minsTypo1]}>2 mins ago</Text>
      <Text style={[styles.minsAgo1, styles.minsTypo1]}>2 mins ago</Text>
      <Text style={[styles.minsAgo2, styles.minsTypo1]}>2 mins ago</Text>
      <Text style={[styles.minsAgo3, styles.minsTypo1]}>2 mins ago</Text>
      <Text style={[styles.minsAgo4, styles.minsTypo1]}>2 mins ago</Text>
      <Text style={[styles.minsAgo5, styles.minsTypo1]}>2 mins ago</Text>
      <Text style={[styles.minsAgo6, styles.minsTypo1]}>2 mins ago</Text>
      <Text style={[styles.minsAgo7, styles.minsTypo]}>2 mins ago</Text>
      <Text style={[styles.minsAgo8, styles.minsTypo]}>2 mins ago</Text>
      <Text style={[styles.minsAgo9, styles.minsTypo]}>2 mins ago</Text>
      <Text style={[styles.minsAgo10, styles.minsTypo]}>2 mins ago</Text>
      <Text style={[styles.minsAgo11, styles.minsTypo]}>2 mins ago</Text>
      <Text style={[styles.minsAgo12, styles.minsTypo]}>2 mins ago</Text>
      <Text style={[styles.minsAgo13, styles.minsTypo]}>2 mins ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  singleLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  cameraIconPosition: {
    top: 1703,
    position: "absolute",
  },
  singleChildLayout1: {
    height: 74,
    width: 178,
    backgroundColor: Color.mediumslateblue_100,
    left: 189,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  singleChildLayout: {
    backgroundColor: Color.lavender,
    left: 9,
    height: 74,
    width: 178,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  loremTypo1: {
    height: 43,
    width: 159,
    color: Color.white,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    left: 197,
    textAlign: "left",
    position: "absolute",
  },
  loremTypo: {
    left: 17,
    height: 43,
    width: 159,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  minsTypo1: {
    color: Color.gray_200,
    fontFamily: FontFamily.notoSansRegular,
    left: 202,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  minsTypo: {
    color: Color.gray_300,
    left: 22,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  singleMessageChild: {
    top: 0,
    backgroundColor: Color.silver_100,
    height: 30,
  },
  chevronLeft1Icon: {
    left: 19,
    top: 67,
    width: 24,
  },
  back: {
    left: 45,
    fontSize: FontSize.size_lg,
    color: Color.mediumslateblue_100,
    width: 77,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    top: 67,
    position: "absolute",
  },
  singleMessageItem: {
    top: 1815,
    left: 47,
  },
  singleMessageInner: {
    top: 108,
    left: 30,
  },
  vicky: {
    top: 113,
    left: 68,
    fontSize: FontSize.size_base,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  icons8ThreeDots327: {
    top: 115,
    left: 316,
    width: 18,
    height: 18,
    position: "absolute",
  },
  rectangleView: {
    top: 1687,
    shadowColor: "rgba(0, 0, 0, 0.31)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 81,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
  },
  singleMessageChild1: {
    left: 53,
    backgroundColor: "#e4e4e4",
    width: 223,
    borderRadius: Border.br_xs,
    height: 30,
  },
  vectorIcon: {
    height: "1.35%",
    width: "6.04%",
    top: "97.49%",
    right: "6.27%",
    bottom: "1.17%",
    left: "87.69%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cameraIcon: {
    width: 26,
    height: 28,
    left: 19,
    overflow: "hidden",
  },
  emojiSmileIcon: {
    top: 1707,
    left: 284,
  },
  singleMessageChild2: {
    top: 327,
    height: 205,
    width: 178,
    backgroundColor: Color.mediumslateblue_100,
    left: 189,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  midasHofstraTidslvUansUnspIcon: {
    top: 334,
    borderRadius: Border.br_7xs,
    width: 165,
    height: 129,
    left: 197,
    position: "absolute",
  },
  singleMessageChild3: {
    top: 648,
  },
  singleMessageChild4: {
    top: 838,
  },
  singleMessageChild5: {
    top: 1028,
  },
  singleMessageChild6: {
    top: 1218,
  },
  singleMessageChild7: {
    top: 1408,
  },
  singleMessageChild8: {
    top: 1598,
  },
  singleMessageChild9: {
    top: 556,
  },
  singleMessageChild10: {
    top: 226,
  },
  singleMessageChild11: {
    top: 746,
  },
  singleMessageChild12: {
    top: 936,
  },
  singleMessageChild13: {
    top: 1126,
  },
  singleMessageChild14: {
    top: 1316,
  },
  singleMessageChild15: {
    top: 1506,
  },
  loremEpsumLorem: {
    top: 465,
  },
  loremEpsumLorem1: {
    top: 655,
  },
  loremEpsumLorem2: {
    top: 845,
  },
  loremEpsumLorem3: {
    top: 1035,
  },
  loremEpsumLorem4: {
    top: 1225,
  },
  loremEpsumLorem5: {
    top: 1415,
  },
  loremEpsumLorem6: {
    top: 1605,
  },
  loremEpsumLorem7: {
    top: 563,
  },
  loremEpsumLorem8: {
    top: 233,
  },
  loremEpsumLorem9: {
    top: 753,
  },
  loremEpsumLorem10: {
    top: 943,
  },
  loremEpsumLorem11: {
    top: 1133,
  },
  loremEpsumLorem12: {
    top: 1323,
  },
  loremEpsumLorem13: {
    top: 1513,
  },
  minsAgo: {
    top: 514,
  },
  minsAgo1: {
    top: 704,
  },
  minsAgo2: {
    top: 894,
  },
  minsAgo3: {
    top: 1084,
  },
  minsAgo4: {
    top: 1274,
  },
  minsAgo5: {
    top: 1464,
  },
  minsAgo6: {
    top: 1654,
  },
  minsAgo7: {
    top: 612,
  },
  minsAgo8: {
    top: 282,
  },
  minsAgo9: {
    top: 802,
  },
  minsAgo10: {
    top: 992,
  },
  minsAgo11: {
    top: 1182,
  },
  minsAgo12: {
    top: 1372,
  },
  minsAgo13: {
    top: 1562,
  },
  singleMessage: {
    borderRadius: Border.br_5xl,
    flex: 1,
    width: "100%",
    height: 1750,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default SingleMessage;
