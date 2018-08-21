import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Features = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Features Page</Text>
    </View>
  );
};

export default Features;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 40
  }
});
