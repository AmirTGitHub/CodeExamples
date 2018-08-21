import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Videos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Videos Page</Text>
    </View>
  );
};

export default Videos;
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
