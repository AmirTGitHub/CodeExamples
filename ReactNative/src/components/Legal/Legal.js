import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import LegalList from "./LegalList";
const height = Dimensions.get("window").height;

export default class Features extends React.Component {
  state = {
    currentNewsId: null,
    page: 1,
    legalsList: [],
    isLoding: false,
    refreshing: false
  };

  componentDidMount() {
    this.fetchLoadFeatures();
  }

  fetchLoadFeatures = async () => {
    this.setState({ isLoading: true });
    const fetchfeatuers = await fetch(
      `https://iranwire.com/fa/api/v1/legal?page=${
        this.state.page
      }&page_size=10`
    );

    const json = await fetchfeatuers.json();
    this.setState(state => ({
      legalsList: [...state.legalsList, ...json.results],
      isLoading: false
    }));
  };

  handleEnd = () => {
    this.setState(
      state => ({ page: state.page + 1 }),
      () => this.fetchLoadFeatures()
    );
  };

  setCurrentNewsId = newsId => {
    this.setState({
      currentNewsId: newsId
    });
  };
  unSetCurrentNewsId = () => {
    this.setState({
      currentNewsId: null
    });
  };

  currentNews = () => {
    return this.state.legalsList.find(
      news => news.pk === this.state.currentNewsId
    );
  };
  handelRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchLoadFeatures().then(() => {
      this.setState({ refreshing: false });
    });
  };
  render() {
    if (this.state.legalsList.length > 0) {
      return (
        <LegalList
          legal={this.state.legalsList}
          onFeaturePress={this.setCurrentNewsId}
          handleEnd={this.handleEnd}
          handelRefresh={this.handelRefresh}
          refreshing={this.state.refreshing}
        />
      );
    } else {
      return (
        <Text style={[styles.title, { fontFamily: "IranSansB" }]}>
          {" "}
          سوال و جواب حقوقی{" "}
        </Text>
      );
    }
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    alignSelf: "center",
    marginTop: height / 2 - 50
  }
});
