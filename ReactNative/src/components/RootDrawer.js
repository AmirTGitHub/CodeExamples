import { DrawerNavigator } from "react-navigation";
import React from "react";
import Features from "./pages/Features";
import Blogs from "./pages/Blogs";

import { Icon } from "react-native-elements";
import { View, StyleSheet, Image } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/IranWire_Black.png")} />
    </View>
  );
};

const SpecialScreen = ({ navigation }) => (
  <View>
    <View style={styles.menu}>
      <Icon
        name="menu"
        type="Entypo"
        size={26}
        onPress={() => navigation.navigate("DrawerToggle")}
      />
    </View>
    <Blogs />
  </View>
);

const GalleryScreen = ({ navigation }) => (
  <View>
    <View style={styles.menu}>
      <Icon
        name="menu"
        type="Entypo"
        size={26}
        onPress={() => navigation.navigate("DrawerToggle")}
      />
    </View>
    <Features />
  </View>
);
const BlogsScreen = ({ navigation }) => (
  <View>
    <View style={styles.menu}>
      <Icon
        name="menu"
        type="Entypo"
        size={26}
        onPress={() => navigation.navigate("DrawerToggle")}
      />
    </View>
    <Blogs />
  </View>
);
const GoodNewsScreen = ({ navigation }) => (
  <View>
    <View style={styles.menu}>
      <Icon
        name="menu"
        type="Entypo"
        size={26}
        onPress={() => navigation.navigate("DrawerToggle")}
      />
    </View>
    <Features />
  </View>
);
const PracticalScreen = ({ navigation }) => (
  <View>
    <View style={styles.menu}>
      <Icon
        name="menu"
        type="Entypo"
        size={26}
        onPress={() => navigation.navigate("DrawerToggle")}
      />
    </View>
    <Blogs />
  </View>
);
const CartoonScreen = ({ navigation }) => (
  <View>
    <View style={styles.menu}>
      <Icon
        name="menu"
        type="Entypo"
        size={26}
        onPress={() => navigation.navigate("DrawerToggle")}
      />
    </View>
    <Features />
  </View>
);
const DrawerNavigatorConfig = {
  drawerBackgroundColor: "#eee",
  contentOptions: {
    activeTintColor: "#76a56f",
    inactiveTintColor: "black",
    itemsContainerStyle: { marginTop: 100 },
    drawerLabel: "test"
  }
};

export const RootDrawer = DrawerNavigator(
  {
    Home: {
      screen: SpecialScreen,
      navigationOptions: {
        drawerLabel: "گزارش‌های ویژه",
        drawerIcon: () => <Icon name="assessment" type="Entypo" size={20} />
      }
    },
    Blogs: {
      screen: BlogsScreen,
      navigationOptions: {
        drawerLabel: "بلاگ‌ها",
        drawerIcon: () => (
          <Icon name="bar-chart" type="font-awesome" size={20} />
        )
      }
    },
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        drawerLabel: "عکس‌های ایران",
        drawerIcon: () => <Icon name="photo" type="font-awesome" size={20} />
      }
    },
    Carttons: {
      screen: CartoonScreen,
      navigationOptions: {
        drawerLabel: "کاریکاتورها",
        drawerIcon: () => (
          <Icon name="connectdevelop" type="font-awesome" size={20} />
        )
      }
    },
    GoodNews: {
      screen: GoodNewsScreen,
      navigationOptions: {
        drawerLabel: "خبر خوب",
        drawerIcon: () => (
          <Icon name="thumbs-o-up" type="font-awesome" size={20} />
        )
      }
    },
    Practical: {
      screen: PracticalScreen,
      navigationOptions: {
        drawerLabel: "آن‌سوی‌ خبر",
        drawerIcon: () => (
          <Icon name="file-text-o" type="font-awesome" size={20} />
        )
      }
    }
  },

  DrawerNavigatorConfig
);
const styles = StyleSheet.create({
  menu: {
    width: 50,
    height: 70,
    alignItems: "flex-start",
    paddingLeft: 15,
    paddingTop: 40,
    zIndex: 99
  },
  menuContent: {
    marginTop: 200
  }
});
