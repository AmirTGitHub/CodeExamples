import React from "react";
import { View, StyleSheet } from "react-native";
import { MenuButton } from "../atom/MenuButton";

const TopMenu = props => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.btn}>
        <MenuButton onBack={props.onBack} name="back" />
        <MenuButton onBack={props.onShare} name="share" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 20
  },
  menuContainer: {
    backgroundColor: "rgba(238,238,238,50)",
    height: 70
  }
});
export default TopMenu;
