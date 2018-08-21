import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import PropTypes from "prop-types";
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });

class EachNews extends Component {
  static PropTypes = {
    newsItem: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
  };

  handlePress = () => {
    this.props.onPress(this.props.newsItem.pk);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Card
          image={{ uri: "https://iranwire.com/" + this.props.newsItem.image }}
        >
          <Text
            style={{
              marginBottom: 10,
              textAlign: "center",
              fontSize: 20,
              fontFamily: "IranSansR"
            }}
          >
            {this.props.newsItem.title}
          </Text>
          <View style={styles.authorDate}>
            <Text style={[styles.date, { fontFamily: "IranSansR" }]}>
              {" "}
              |{" "}
              {moment(this.props.newsItem.pub_date).format(
                " dddd, Do jMMMM  jYYYY"
              )}
            </Text>
            <Text style={{ fontFamily: "IranSansB", color: "#76a56f" }}>
              {this.props.newsItem.category}
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  authorDate: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  date: {
    color: "black"
  },
  author: {
    color: "#76a56f",
    paddingRight: 20
  }
});
export default EachNews;
