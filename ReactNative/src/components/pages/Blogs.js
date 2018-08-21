import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Blogs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Blogs Page</Text>
    </View>
  );
};

export default Blogs;
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
