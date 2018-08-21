import React from "react";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import Home from "./Home";
import Features from "./pages/Features";
import Blogs from "./pages/Blogs";
import Videos from "./pages/Videos";
import Legal from "./Legal/Legal";
import { RootDrawer } from "./RootDrawer";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const SpecialFeatures = StackNavigator(
  {
    Home: {
      screen: RootDrawer,
      navigationOptions: () => ({
        header: null
      })
    },
    SpecialScreen: {
      screen: Blogs
    },
    SpecialLanding: {
      screen: Blogs,
      navigationOptions: ({ navigation }) => ({
        header: null,
        title:
          navigation.state.params.name === "supreme-leader"
            ? "رهبری"
            : navigation.state.params.name === "ht"
              ? "قاچاق انسان"
              : navigation.state.params.name === "prison"
                ? "زندان"
                : navigation.state.params.name === "women-2"
                  ? "زنان تاثیر گذار ایرانی"
                  : navigation.state.params.name === "minority"
                    ? "اقلیت‌های مذهبی"
                    : navigation.state.params.name === "freedom"
                      ? "آزادی بیان"
                      : navigation.state.params.name === "corruption"
                        ? "فساد"
                        : navigation.state.params.name === "military-in-sport"
                          ? "نظامیان در ورزش"
                          : navigation.state.params.name === "plasco"
                            ? "آتش‌سوزی ساختمان پلاسکو"
                            : null,
        headerLeft: () => {
          return (
            <Entypo
              name="back"
              size={30}
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 20 }}
            />
          );
        }
      })
    }
  },
  { initialRouteName: "Home" }
);

export default TabNavigator(
  {
    خانه: { screen: Home },
    بلاگ: { screen: Blogs },
    گزارش: { screen: Features },
    ویدیو: { screen: Videos },
    حقوقی: { screen: Legal },
    بیشتر: { screen: SpecialFeatures }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "خانه") {
          iconName = "home";
        } else if (routeName === "بلاگ") {
          iconName = "map";
        } else if (routeName === "گزارش") {
          iconName = "newspaper-o";
        } else if (routeName === "ویدیو") {
          iconName = "video-camera";
        } else if (routeName === "حقوقی") {
          iconName = "legal";
        } else if (routeName === "بیشتر") {
          iconName = "align-justify";
        }

        return iconName === "legal" ||
          "map" ||
          "newspaper-o" ||
          "align-justify" ? (
          <FontAwesome name={iconName} size={25} color={tintColor} />
        ) : (
          <Entypo name={iconName} size={25} color={tintColor} />
        );
      }
    }),
    tabBarComponent: TabBarBottom,

    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#76a56f",
      inactiveTintColor: "black"
    },
    animationEnabled: false,
    swipeEnabled: true
  }
);
