import React from "react";
import { StyleSheet, View, Image, NetInfo, Dimensions } from "react-native";
import ajax from "../ajax";
import NewsDetail from "./NewsDetail";
import NewsList from "./NewsList";
const height = Dimensions.get("screen").height;
export default class App extends React.Component {
  state = {
    headlines: [],
    currentNewsId: null,
    pk: [],
    data: [],
    refreshing: false
  };

  componentDidMount() {
    this.loadHomepage();
  }
  // get all the data fro the homePage
  loadHomepage = async () => {
    //get all the news ids and store them in allPKs
    const allPks = [];
    const homePage = await ajax.fetchHomePage();
    let news = homePage.headlines;
    news.map(id => allPks.push(id.pk));

    this.setState({
      headlines: homePage.headlines,
      pk: allPks,
      refreshing: false
    });

    this.getAllHeadlinesContent();
  };
  // for navigating between homepage and article level I used state
  //in state if we have newsID we are at the article level
  setCurrentNewsId = newsId => {
    this.setState({
      currentNewsId: newsId
    });
  };
  // but if we dont have newsID we are in the homepage
  unSetCurrentNewsId = () => {
    this.setState({
      currentNewsId: null
    });
  };

  currentNews = () => {
    return this.state.headlines.find(
      news => news.pk === this.state.currentNewsId
    );
  };

  // for off line browsing in here we will get all the data of the homePage
  getAllHeadlinesContent = async () => {
    //store all the urls in here
    let urls = [];
    // create a url format for all the ides
    this.state.pk.map(id =>
      urls.push(`https://iranwire.com/fa/api/v1/articles/${id}`)
    );
    // with Promise.all fetch the data from the api and store them to the state
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      response =>
        this.setState({
          data: response
        })
    );
  };
  // control the pull down to refresh components
  handelRefresh = () => {
    this.setState({ refreshing: true });
    this.loadHomepage().then(() => {
      this.setState({ refreshing: false });
    });
  };

  render() {
    if (this.state.currentNewsId) {
      return (
        <NewsDetail
          newsItem={this.currentNews()}
          onBack={this.unSetCurrentNewsId}
          newsData={this.state.data}
          navigationOptions={{ tabBarVisible: false, swipeEnabled: false }}
        />
      );
    }
    if (this.state.headlines.length > 0) {
      return (
        <NewsList
          news={this.state.headlines}
          onPress={this.setCurrentNewsId}
          refresh={this.state.refreshing}
          handlingRefresh={this.handelRefresh}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Image source={require("../../assets/IranWire_Black.png")} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: height / 2 - 80,
    height: height
  },
  header: {
    fontSize: 40
  }
});
