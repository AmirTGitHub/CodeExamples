import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  PanResponder,
  Animated,
  NetInfo,
  Share,
  WebView
} from "react-native";
import PropTypes from "prop-types";
import ajax from "../ajax";
import striptags from "striptags";
import { Entypo } from "@expo/vector-icons";
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });
const deviceWidth = Dimensions.get("window").width;

class NewsDetail extends Component {
  imageXPos = new Animated.Value(0);
  imagePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (ev, gs) => {
      this.imageXPos.setValue(gs.dx);
    },
    onPanResponderRelease: (ev, gs) => {
      this.width = Dimensions.get("window").width;
      const direction = Math.sign(gs.dx);
      if (Math.abs(gs.dx) > this.width * 0.4) {
        Animated.timing(this.imageXPos, {
          toValue: direction * this.width,
          duration: 250
        }).start(() => this.handleSwipe(-1 * direction));
      } else {
        Animated.timing(this.imageXPos, {
          toValue: 0,
          duration: 150
        }).start();
      }
    }
  });
  handleSwipe = indexDirection => {
    if (!this.state.slides[this.state.indexImage + indexDirection]) {
      Animated.timing(this.imageXPos, {
        toValue: 0,
        duration: 150
      }).start();
      return;
    }
    this.setState(
      prevState => ({
        indexImage: prevState.indexImage + indexDirection
      }),
      () => {
        this.imageXPos.setValue(indexDirection * this.width);
        Animated.spring(this.imageXPos, {
          toValue: 0
        }).start();
      }
    );
  };

  static PropTypes = {
    newsItem: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
    recommended: PropTypes.array.isRequired
  };

  state = {
    newsbody: [],
    author: {},
    slides: [],
    indexImage: 0,
    fontLoaded: false,
    tags: [],
    allData: {},
    video: "",
    url: ""
  };

  async componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      isConnected
        ? this.fetchNews()
        : this.props.newsData.find(
            news =>
              news.single.pk === this.props.newsItem.pk &&
              this.setState({
                allData: news,
                newsbody: news.single,
                author: news.single.author,
                slides: news.single.slides,
                tags: news.single.tags,
                url: news.single.url,
                video:
                  news.single.video !== null &&
                  news.single.video
                    .split(" ")
                    .slice(3, 4)
                    .join("")
                    .replace('src="', "")
              })
          );
    });
  }

  fetchNews = async () => {
    const news = await ajax.fetchNewsDetails(this.props.newsItem.pk);
    this.setState({
      allData: news,
      newsbody: news.single,
      author: news.single.author,
      url: news.single.url
    });
    if (news.single.video) {
      this.setState({
        video: news.single.video
          .split(" ")
          .slice(3, 4)
          .join("")
          .replace('src="', "")
      });
    }
    if (news.single.slides.length > 0) {
      this.setState({
        slides: news.single.slides
      });
    }
    if (news.single.tags.length > 0) {
      this.setState({
        tags: news.single.tags
      });
    }
  };

  // use the device share ability
  shareContent = () => {
    const url = this.state.url.authorId
      ? `https://iranwire.com/fa/${this.state.url.categorySlug}/${
          this.state.url.authorId
        }/${this.state.url.itemId} `
      : `https://iranwire.com/fa/${this.state.url.categorySlug}/${
          this.state.url.itemId
        }`;
    const message = `${this.props.newsItem.title} 
    ${url} 
      ایران وایر را در تلگرام دنبال کنید:https://t.me/Farsi_Iranwire
`;
    const sharedData = {
      message: message
    };
    Share.share(sharedData).then(this.resolve);
  };
  resolve = result => {
    this.setState({
      result
    });
  };

  render() {
    console.log(this.state.video);
    console.log(this.state.newsbody);
    var body;
    var cleanBody;
    body = this.state.newsbody.body;
    cleanBody = striptags(body, []);
    cleanBody3 = cleanBody
      .replace(/\w/gim, "‌")
      .replace(/&/gim, "‌")
      .replace(/;/gim, "‌");
    return (
      <View>
        <View style={styles.menuContainer}>
          <View style={styles.btn}>
            <Entypo name={"back"} size={25} onPress={this.props.onBack} />
            <Entypo name="share" size={25} onPress={this.shareContent} />
          </View>
        </View>
        <ScrollView style={styles.container}>
          <View>
            <Animated.View
              {...this.imagePanResponder.panHandlers}
              style={{ left: this.imageXPos }}
            >
              {this.state.slides.length === 0 ? (
                <Image
                  source={{
                    uri: "https://iranwire.com/" + this.state.newsbody.image
                  }}
                  style={styles.image}
                />
              ) : (
                <View>
                  <Image
                    source={{
                      uri:
                        "https://iranwire.com/" +
                        this.state.slides[this.state.indexImage].image
                    }}
                    style={styles.image}
                  />
                  <Text style={styles.sub}>
                    {this.state.slides[this.state.indexImage].image_title}
                  </Text>
                </View>
              )}
            </Animated.View>
          </View>

          <Text style={[styles.title, { fontFamily: "IranSansB" }]}>
            {this.props.newsItem.title}
          </Text>
          <View style={styles.authorDate}>
            <Text style={[styles.date, { fontFamily: "IranSansR" }]}>
              {" "}
              |{" "}
              {moment(this.state.newsbody.pub_date).format(" jD jMMMM  jYYYY")}
            </Text>
            {this.state.author ? (
              <Text style={[styles.author, { fontFamily: "IranSansR" }]}>
                {this.state.author.name}
              </Text>
            ) : (
              <Text style={[styles.author, { fontFamily: "IranSansR" }]}>
                ایران‌وایر
              </Text>
            )}
          </View>
          <View>
            <Text style={[styles.body, { fontFamily: "IranSansR" }]}>
              {cleanBody3}
            </Text>
          </View>
          <View />

          <View style={styles.TagSection}>
            {this.state.tags.map(tag => {
              return (
                <Text style={styles.tags} key={tag.pk}>
                  {" "}
                  {tag.name}{" "}
                </Text>
              );
            })}
          </View>
          {this.state.video !== "" && (
            <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: this.state.video }}
              style={styles.video}
              startInLoadingState={true}
              scalesPageToFit={true}
              mixedContentMode="always"
              scrollEnable={true}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

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
  },
  tags: {
    borderColor: "#76a56f",
    borderRadius: 1,
    borderWidth: 1,
    color: "#76a56f",
    padding: 5,
    marginTop: 15
  },
  TagSection: {
    marginTop: -50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 80,
    flexWrap: "wrap"
  },
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
  },
  image: {
    flex: 1,
    aspectRatio: 1.77,
    resizeMode: "contain"
  },
  title: {
    fontSize: 20,
    textAlign: "right",
    padding: 20
  },

  container: {
    zIndex: 8,
    marginTop: -3,
    marginBottom: 0
  },
  body: {
    textAlign: "right",
    padding: 20,
    paddingBottom: 70,
    lineHeight: 20
  },
  header: {
    backgroundColor: "#76a56f"
  },

  sub: {
    padding: 10,
    marginTop: -5,
    width: "100%",
    backgroundColor: "#eee",
    textAlign: "center",
    fontSize: 12
  },
  cartoons: {
    flex: 1,
    aspectRatio: 1.77,
    resizeMode: "contain"
  },
  video: {
    flex: 0,
    height: 300,
    width: deviceWidth,
    marginBottom: 90
  }
});

export default NewsDetail;
