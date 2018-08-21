import React, { Component } from "react";
import {
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions
} from "react-native";
import EachLegal from "./EachLegal";
import PropTypes from "prop-types";
import legal from "../../../assets/ligal_logo.jpg";

const width = Dimensions.get("screen").width;
class LegalsList extends Component {
  static PropTypes = {
    legal: PropTypes.array.isRequired,
    handleEnd: PropTypes.func.isRequired
  };

  renderFirstLegal = () => {
    return (
      <View>
        <Image
          source={require("../../../assets/ligal_logo.jpg")}
          style={styles.image}
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.props.legal}
          keyExtractor={(x, i) => i}
          onEndReached={this.props.handleEnd}
          onEndReachedThreshold={0.3}
          refreshing={this.props.refreshing}
          onRefresh={this.props.handelRefresh}
          ListHeaderComponent={this.renderFirstLegal}
          ListFooterComponent={() => (
            <ActivityIndicator
              animating
              size="large"
              style={{ marginTop: 50 }}
            />
          )}
          renderItem={({ item }) => (
            <EachLegal style={{ marginTop: 50 }} legalItem={item} />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: width,
    height: 200
  }
});

export default LegalsList;
