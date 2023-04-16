import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.profileChild, styles.childPosition]} />
      <Text style={[styles.notifications, styles.notificationsTypo]}>
        Notifications
      </Text>
      <Text style={[styles.notifications1, styles.notificationsTypo]}>
        Notifications
      </Text>
      <View style={[styles.profileItem, styles.profileChildLayout1]} />
      <Image
        style={[styles.profileInner, styles.profileChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Text style={[styles.vicky, styles.vickyTypo2]}>Vicky</Text>
      <Text
        style={[styles.loremEpsumLorem, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <View style={[styles.rectangleView, styles.profileChildLayout1]} />
      <View style={[styles.profileChild1, styles.profileChildLayout1]} />
      <View style={[styles.profileChild2, styles.profileChildLayout1]} />
      <View style={[styles.profileChild3, styles.profileChildLayout1]} />
      <View style={[styles.profileChild4, styles.profileChildLayout1]} />
      <Image
        style={[styles.ellipseIcon, styles.profileChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild5, styles.profileChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild6, styles.profileChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild7, styles.profileChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild8, styles.profileChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild9, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild10, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild11, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild12, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild13, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild14, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild15, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild16, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild17, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild18, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild19, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild20, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild21, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild22, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild23, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Text style={[styles.vicky1, styles.vickyTypo2]}>Vicky</Text>
      <Text style={[styles.vicky2, styles.vickyTypo2]}>Vicky</Text>
      <Text style={[styles.vicky3, styles.vickyTypo2]}>Vicky</Text>
      <Text style={[styles.vicky4, styles.vickyTypo2]}>Vicky</Text>
      <Text style={[styles.vicky5, styles.vickyTypo2]}>Vicky</Text>
      <Text style={[styles.vicky6, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky7, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky8, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky9, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky10, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky11, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky12, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky13, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky14, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky15, styles.vickyTypo1]}>Vicky</Text>
      <Text style={[styles.vicky16, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky17, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky18, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky19, styles.vickyTypo]}>Vicky</Text>
      <Text style={[styles.vicky20, styles.vickyTypo]}>Vicky</Text>
      <Text
        style={[styles.loremEpsumLorem1, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem2, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem3, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem4, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text
        style={[styles.loremEpsumLorem5, styles.loremTypo]}
      >{`Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum `}</Text>
      <Text style={[styles.likedYourPic, styles.likedTypo]}>
        Liked Your pic
      </Text>
      <Text style={[styles.likedYourPic1, styles.likedTypo]}>
        Liked Your pic
      </Text>
      <Text style={[styles.likedYourPic2, styles.likedTypo]}>
        Liked Your pic
      </Text>
      <Text style={[styles.likedYourPic3, styles.likedTypo]}>
        Liked Your pic
      </Text>
      <Text style={[styles.likedYourPic4, styles.likedTypo]}>
        Liked Your pic
      </Text>
      <Text style={[styles.commentedOnYour, styles.likedTypo]}>
        Commented on your post
      </Text>
      <Text style={[styles.commentedOnYour1, styles.likedTypo]}>
        Commented on your post
      </Text>
      <Text style={[styles.commentedOnYour2, styles.likedTypo]}>
        Commented on your post
      </Text>
      <Text style={[styles.commentedOnYour3, styles.likedTypo]}>
        Commented on your post
      </Text>
      <Text style={[styles.commentedOnYour4, styles.likedTypo]}>
        Commented on your post
      </Text>
      <Text style={[styles.startedFollowingYou, styles.startedTypo]}>
        Started Following you
      </Text>
      <Text style={[styles.startedFollowingYou1, styles.startedTypo]}>
        Started Following you
      </Text>
      <Text style={[styles.startedFollowingYou2, styles.startedTypo]}>
        Started Following you
      </Text>
      <Text style={[styles.startedFollowingYou3, styles.startedTypo]}>
        Started Following you
      </Text>
      <Text style={[styles.startedFollowingYou4, styles.startedTypo]}>
        Started Following you
      </Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
      </View>
      <View style={[styles.button1, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.follow1, styles.followTypo]}>Follow</Text>
      </View>
      <View style={[styles.button2, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.follow1, styles.followTypo]}>Follow</Text>
      </View>
      <View style={[styles.button3, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.follow1, styles.followTypo]}>Follow</Text>
      </View>
      <View style={[styles.button4, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.follow1, styles.followTypo]}>Follow</Text>
      </View>
      <Image
        style={[styles.heartFill2Icon, styles.heartIconLayout]}
        resizeMode="cover"
        source={require("../assets/heartfill-2.png")}
      />
      <Image
        style={[styles.heartFill3Icon, styles.heartIconLayout]}
        resizeMode="cover"
        source={require("../assets/heartfill-2.png")}
      />
      <Image
        style={[styles.heartFill4Icon, styles.heartIconLayout]}
        resizeMode="cover"
        source={require("../assets/heartfill-2.png")}
      />
      <Image
        style={[styles.heartFill5Icon, styles.heartIconLayout]}
        resizeMode="cover"
        source={require("../assets/heartfill-2.png")}
      />
      <Image
        style={[styles.heartFill6Icon, styles.heartIconLayout]}
        resizeMode="cover"
        source={require("../assets/heartfill-2.png")}
      />
      <Image
        style={[styles.chatFill2Icon, styles.chatIconLayout]}
        resizeMode="cover"
        source={require("../assets/chatfill-2.png")}
      />
      <Image
        style={[styles.chatFill3Icon, styles.chatIconLayout]}
        resizeMode="cover"
        source={require("../assets/chatfill-2.png")}
      />
      <Image
        style={[styles.chatFill4Icon, styles.chatIconLayout]}
        resizeMode="cover"
        source={require("../assets/chatfill-2.png")}
      />
      <Image
        style={[styles.chatFill5Icon, styles.chatIconLayout]}
        resizeMode="cover"
        source={require("../assets/chatfill-2.png")}
      />
      <Image
        style={[styles.chatFill6Icon, styles.chatIconLayout]}
        resizeMode="cover"
        source={require("../assets/chatfill-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
  },
  notificationsTypo: {
    textAlign: "left",
    color: Color.mediumslateblue_100,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    left: 23,
    position: "absolute",
  },
  profileChildLayout1: {
    height: 77,
    width: 327,
    borderWidth: 1,
    borderColor: "#7a63f9",
    borderStyle: "solid",
    left: 31,
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  profileChildLayout: {
    height: 32,
    width: 32,
    left: 47,
    position: "absolute",
  },
  vickyTypo2: {
    fontSize: FontSize.size_sm,
    left: 85,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  loremTypo: {
    height: 29,
    width: 257,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    left: 85,
    textAlign: "left",
    position: "absolute",
  },
  profileChildPosition: {
    left: 39,
    height: 32,
    width: 32,
    position: "absolute",
  },
  vickyTypo1: {
    left: 86,
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  vickyTypo: {
    width: 39,
    left: 86,
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  likedTypo: {
    width: 170,
    left: 86,
    height: 29,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  startedTypo: {
    width: 196,
    left: 86,
    height: 29,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  buttonLayout: {
    height: 21,
    width: 68,
    position: "absolute",
  },
  followTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    height: 21,
    width: 68,
    left: 0,
    top: 0,
    position: "absolute",
  },
  heartIconLayout: {
    height: 24,
    width: 24,
    left: 284,
    position: "absolute",
    overflow: "hidden",
  },
  chatIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "77.95%",
    right: "15.9%",
    width: "6.15%",
    height: "1.37%",
    position: "absolute",
    overflow: "hidden",
  },
  profileChild: {
    backgroundColor: Color.silver_100,
    width: 390,
    height: 30,
    position: "absolute",
    top: 0,
  },
  notifications: {
    top: 70,
  },
  notifications1: {
    top: 700,
  },
  profileItem: {
    top: 143,
  },
  profileInner: {
    top: 166,
  },
  vicky: {
    top: 157,
    color: Color.black,
  },
  loremEpsumLorem: {
    top: 178,
  },
  rectangleView: {
    top: 226,
  },
  profileChild1: {
    top: 310,
  },
  profileChild2: {
    top: 394,
  },
  profileChild3: {
    top: 478,
  },
  profileChild4: {
    top: 562,
  },
  ellipseIcon: {
    top: 249,
  },
  profileChild5: {
    top: 333,
  },
  profileChild6: {
    top: 417,
  },
  profileChild7: {
    top: 501,
  },
  profileChild8: {
    top: 585,
  },
  profileChild9: {
    top: 775,
  },
  profileChild10: {
    top: 975,
  },
  profileChild11: {
    top: 1175,
  },
  profileChild12: {
    top: 1375,
  },
  profileChild13: {
    top: 1575,
  },
  profileChild14: {
    top: 905,
  },
  profileChild15: {
    top: 1105,
  },
  profileChild16: {
    top: 1305,
  },
  profileChild17: {
    top: 1505,
  },
  profileChild18: {
    top: 1705,
  },
  profileChild19: {
    top: 835,
  },
  profileChild20: {
    top: 1035,
  },
  profileChild21: {
    top: 1235,
  },
  profileChild22: {
    top: 1435,
  },
  profileChild23: {
    top: 1635,
  },
  vicky1: {
    top: 240,
    color: Color.black,
  },
  vicky2: {
    top: 324,
    color: Color.black,
  },
  vicky3: {
    top: 408,
    color: Color.black,
  },
  vicky4: {
    top: 492,
    color: Color.black,
  },
  vicky5: {
    top: 576,
    color: Color.black,
  },
  vicky6: {
    top: 770,
  },
  vicky7: {
    top: 970,
  },
  vicky8: {
    top: 1170,
  },
  vicky9: {
    top: 1370,
  },
  vicky10: {
    top: 1570,
  },
  vicky11: {
    top: 900,
  },
  vicky12: {
    top: 1100,
  },
  vicky13: {
    top: 1300,
  },
  vicky14: {
    top: 1500,
  },
  vicky15: {
    top: 1700,
  },
  vicky16: {
    top: 832,
  },
  vicky17: {
    top: 1032,
  },
  vicky18: {
    top: 1232,
  },
  vicky19: {
    top: 1432,
  },
  vicky20: {
    top: 1632,
  },
  loremEpsumLorem1: {
    top: 261,
  },
  loremEpsumLorem2: {
    top: 345,
  },
  loremEpsumLorem3: {
    top: 429,
  },
  loremEpsumLorem4: {
    top: 513,
  },
  loremEpsumLorem5: {
    top: 597,
  },
  likedYourPic: {
    top: 791,
  },
  likedYourPic1: {
    top: 991,
  },
  likedYourPic2: {
    top: 1191,
  },
  likedYourPic3: {
    top: 1391,
  },
  likedYourPic4: {
    top: 1591,
  },
  commentedOnYour: {
    top: 921,
  },
  commentedOnYour1: {
    top: 1121,
  },
  commentedOnYour2: {
    top: 1321,
  },
  commentedOnYour3: {
    top: 1521,
  },
  commentedOnYour4: {
    top: 1721,
  },
  startedFollowingYou: {
    top: 856,
  },
  startedFollowingYou1: {
    top: 1056,
  },
  startedFollowingYou2: {
    top: 1256,
  },
  startedFollowingYou3: {
    top: 1456,
  },
  startedFollowingYou4: {
    top: 1656,
  },
  buttonChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.mediumslateblue_100,
    left: 0,
    top: 0,
  },
  follow: {
    color: Color.black,
  },
  button: {
    top: 846,
    left: 262,
    width: 68,
  },
  follow1: {
    color: Color.white,
  },
  button1: {
    top: 1046,
    left: 262,
    width: 68,
  },
  button2: {
    top: 1246,
    left: 262,
    width: 68,
  },
  button3: {
    top: 1446,
    left: 262,
    width: 68,
  },
  button4: {
    top: 1646,
    left: 262,
    width: 68,
  },
  heartFill2Icon: {
    top: 779,
  },
  heartFill3Icon: {
    top: 979,
  },
  heartFill4Icon: {
    top: 1179,
  },
  heartFill5Icon: {
    top: 1379,
  },
  heartFill6Icon: {
    top: 1579,
  },
  chatFill2Icon: {
    top: "51.83%",
    bottom: "46.8%",
  },
  chatFill3Icon: {
    top: "63.26%",
    bottom: "35.37%",
  },
  chatFill4Icon: {
    top: "74.69%",
    bottom: "23.94%",
  },
  chatFill5Icon: {
    top: "86.11%",
    bottom: "12.51%",
  },
  chatFill6Icon: {
    top: "97.54%",
    bottom: "1.09%",
  },
  profile: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1750,
    overflow: "hidden",
    borderRadius: Border.br_5xl,
  },
});

export default Profile;
