import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import striptags from "striptags";
import PropTypes from "prop-types";

const height = Dimensions.get("screen").height;
class EachFeature extends Component {
  static PropTypes = {
    legalItem: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      onLayoutHeight: 0,
      modifiedHeight: height / 6 + 2,
      expanded: false
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    this.state.expanded === false
      ? this.setState({
          modifiedHeight: this.state.onLayoutHeight,
          expanded: true
        })
      : this.setState({ modifiedHeight: height / 6 + 2, expanded: false });
  };

  getViewHeight(height) {
    this.setState({ onLayoutHeight: height });
  }
  render() {
    let province = this.props.legalItem.provinces[0];
    var body;
    var cleanBody;
    body = this.props.legalItem.answers[0].answer;
    cleanBody = striptags(body);
    cleanBody3 = cleanBody
      .replace(/\w/gim, "‌")
      .replace(/&/gim, "‌")
      .replace(/;/gim, "‌");
    return (
      <View>
        <TouchableOpacity onPress={this.changeLayout} style={styles.button}>
          <Icon
            name="location-on"
            type="Entypo"
            size={30}
            iconStyle={styles.location}
          />
          <Text style={styles.province}>{`سوال از ${
            province !== undefined ? province.translation : "ایران‌وایر "
          } `}</Text>
        </TouchableOpacity>
        <View style={{ height: this.state.modifiedHeight, overflow: "hidden" }}>
          <View
            onLayout={event =>
              this.getViewHeight(event.nativeEvent.layout.height)
            }
          >
            <Icon
              name="quote"
              type="Entypo"
              size={40}
              iconStyle={styles.icon}
            />
            <Text style={styles.text}>{this.props.legalItem.question}</Text>
            <Icon
              name="quote"
              type="Entypo"
              size={40}
              iconStyle={styles.icon}
            />
            <View style={styles.answerHead}>
              <Text style={styles.headIconText}> ایران‌وایر </Text>
              <Icon
                name="question-answer"
                type="Entypo"
                size={30}
                iconStyle={styles.headIcon}
              />
            </View>
            <Text style={styles.answer}>{cleanBody3}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  province: {
    fontFamily: "IranSansB",
    padding: 12
  },
  location: {
    padding: 5
  },
  answerHead: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-end"
  },
  headIconText: {
    fontFamily: "IranSansB",
    fontSize: 20,
    marginTop: 50
  },
  headIcon: {
    color: "#ddd",
    paddingRight: 30,
    marginTop: 50
  },
  button: {
    backgroundColor: "#eee",
    height: 50,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start"
  },
  text: {
    marginTop: 10,
    textAlign: "right",
    fontSize: 15,
    fontFamily: "IranSansR",
    padding: 15
  },
  answer: {
    marginTop: 10,
    marginBottom: -10,
    padding: 15,
    textAlign: "right",
    fontSize: 15,
    fontFamily: "IranSansR"
  },
  icon: {
    color: "#ddd",
    zIndex: 50,
    position: "absolute",
    top: -2,
    left: 5
  }
});
export default EachFeature;
