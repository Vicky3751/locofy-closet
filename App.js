const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen1 from "./screens/SplashScreen1";
import SingleMessage from "./screens/SingleMessage";
import Messages from "./screens/Messages";
import Profile from "./screens/Profile";
import HomeSlider from "./screens/HomeSlider";
import SinglePost from "./screens/SinglePost";
import Profile1 from "./screens/Profile1";
import OnClickAddClosetItem from "./screens/OnClickAddClosetItem";
import ClosetNike from "./screens/ClosetNike";
import ClosetItems from "./screens/ClosetItems";
import Home from "./screens/Home";
import ProfilePersonalization from "./screens/ProfilePersonalization";
import ForgotPassword from "./screens/ForgotPassword";
import Register from "./screens/Register";
import ChangePassword from "./screens/ChangePassword";
import ForgotPassword1 from "./screens/ForgotPassword1";
import Login from "./screens/Login";
import IntroScreenWomen4 from "./screens/IntroScreenWomen4";
import IntroScreenWomen3 from "./screens/IntroScreenWomen3";
import IntroScreenWomen2 from "./screens/IntroScreenWomen2";
import IntroScreenWomen1 from "./screens/IntroScreenWomen1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen1"
              component={SplashScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingleMessage"
              component={SingleMessage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Messages"
              component={Messages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeSlider"
              component={HomeSlider}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SinglePost"
              component={SinglePost}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnClickAddClosetItem"
              component={OnClickAddClosetItem}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClosetNike"
              component={ClosetNike}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClosetItems"
              component={ClosetItems}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePersonalization"
              component={ProfilePersonalization}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword1"
              component={ForgotPassword1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroScreenWomen4"
              component={IntroScreenWomen4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroScreenWomen3"
              component={IntroScreenWomen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroScreenWomen2"
              component={IntroScreenWomen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroScreenWomen1"
              component={IntroScreenWomen1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
