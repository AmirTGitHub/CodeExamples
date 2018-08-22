import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });
moment.loadPersian({ usePersianDigits: true });
import PropTypes from "prop-types";
import Dvider from './atom/Divider'
import FirstNews from './molecule/FirstNews'
import Divider from "./atom/Divider";

const screenWidth = Dimensions.get("window").width;

export default class NewNewsList extends Component {
  static PropTypes = {
    news: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired
  };
  handlePress = event => {
    this.props.onPress(event);
  };

  render() {
    const news = this.props.news;
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.props.refresh}
            onRefresh={this.props.handlingRefresh}
          />
        }
      >
        <FirstNews
          handlePress={() => this.handlePress(news[0].pk)}
          mainImage={news[0].image}
          title={news[0].title}
          pubDate={news[0].pub_date}
          category={news[0].category}
        />
        {/* <TouchableOpacity
          style={styles.firstNews}
          onPress={() => this.handlePress(news[0].pk)}
        >
          <MainImage mainImage={news[0].image} />
          <Image
            source={{ uri: "https://iranwire.com/" + news[0].image }}
            style={styles.mainImage}
          />
          <Text style={styles.title}>{news[0].title}</Text>
          <View style={styles.authorDate}>
            <Text style={[styles.date, { fontFamily: "IranSansR" }]}>
              {" "}
              | {moment(news[0].pub_date).format(" jD jMMMM  jYY")}
            </Text>
            <Text style={{ fontFamily: "IranSansB", color: "#76a56f" }}>
              {news[0].category}
            </Text>
          </View>
        </TouchableOpacity> */}
        <Divider />
        <TouchableOpacity
          style={styles.rowOne}
          onPress={() => this.handlePress(news[1].pk)}
        >
          <View style={styles.rowOneTextImage}>
            <Image
              source={{ uri: "https://iranwire.com/" + news[1].image }}
              style={styles.rowOneImage}
            />
            <Text style={styles.rowOneTitle}>{news[1].title}</Text>
          </View>
          <View style={[styles.dateAndCat, styles.firstRowDate]}>
            <Text style={styles.dateText}>
              {moment(news[1].pub_date).format(" jD jMMMM  jYY")}
            </Text>
            <Text style={styles.greenText}>{news[1].category}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
        <View style={styles.rowTwo}>
          <TouchableOpacity
            style={styles.thirdNews}
            onPress={() => this.handlePress(news[2].pk)}
          >
            <Image
              style={styles.thirdNewsImage}
              source={{ uri: "https://iranwire.com/" + news[2].image }}
            />
            <Text style={styles.thirdNewsTitle}>{news[2].title}</Text>
            <View style={styles.dateAndCat}>
              <Text style={styles.dateText}>
                {moment(news[2].pub_date).format(" jD jMMMM  jYY")}
              </Text>
              <Text style={styles.greenText}>{news[2].category} |</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thirdNews}
            onPress={() => this.handlePress(news[3].pk)}
          >
            <Image
              style={styles.thirdNewsImage}
              source={{ uri: "https://iranwire.com/" + news[3].image }}
            />
            <Text style={styles.thirdNewsTitle}>{news[3].title}</Text>
            <View style={styles.dateAndCat}>
              <Text style={styles.dateText}>
                {moment(news[3].pub_date).format(" jD jMMMM  jYY")}
              </Text>
              <Text style={styles.greenText}>{news[3].category} |</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.TextOnly}
          onPress={() => this.handlePress(news[4].pk)}
        >
          <View style={styles.dateAndCatTextOnly}>
            <Text style={styles.dateText}>
              {moment(news[4].pub_date).format(" jD jMMMM  jYY")}
            </Text>
            <Text style={styles.greenText}>{news[4].category} |</Text>
          </View>
          <Text style={styles.title}>{news[4].title}</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.TextOnly}
          onPress={() => this.handlePress(news[5].pk)}
        >
          <View style={styles.dateAndCatTextOnly}>
            <Text style={styles.dateText}>
              {moment(news[5].pub_date).format(" jD jMMMM  jYY")}
            </Text>
            <Text style={styles.greenText}>{news[5].category} |</Text>
          </View>
          <Text style={styles.title}>{news[5].title}</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.TextOnly}
          onPress={() => this.handlePress(news[6].pk)}
        >
          <View style={styles.dateAndCatTextOnly}>
            <Text style={styles.dateText}>
              {moment(news[6].pub_date).format(" jD jMMMM  jYY")}
            </Text>
            <Text style={styles.greenText}>{news[6].category} |</Text>
          </View>
          <Text style={styles.title}>{news[6].title}</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.TextOnly}
          onPress={() => this.handlePress(news[7].pk)}
        >
          <View style={styles.dateAndCatTextOnly}>
            <Text style={styles.dateText}>
              {moment(news[7].pub_date).format(" jD jMMMM  jYY")}
            </Text>
            <Text style={styles.greenText}>{news[7].category} |</Text>
          </View>
          <Text style={styles.title}>{news[7].title}</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.rowOne}
          onPress={() => this.handlePress(news[8].pk)}
        >
          <View style={styles.rowOneTextImage}>
            <Image
              source={{ uri: "https://iranwire.com/" + news[8].image }}
              style={styles.rowOneImage}
            />
            <Text style={styles.rowOneTitle}>{news[8].title}</Text>
          </View>
          <View style={[styles.dateAndCat, styles.firstRowDate]}>
            <Text style={styles.dateText}>
              {moment(news[8].pub_date).format(" jD jMMMM  jYY")}
            </Text>
            <Text style={styles.greenText}>{news[8].category}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
        <View style={styles.rowTwo}>
          <TouchableOpacity
            style={styles.thirdNews}
            onPress={() => this.handlePress(news[9].pk)}
          >
            <Image
              style={styles.thirdNewsImage}
              source={{ uri: "https://iranwire.com/" + news[9].image }}
            />
            <Text style={styles.thirdNewsTitle}>{news[9].title}</Text>
            <View style={styles.dateAndCat}>
              <Text style={styles.dateText}>
                {moment(news[9].pub_date).format(" jD jMMMM  jYY")}
              </Text>
              <Text style={styles.greenText}>{news[9].category} |</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thirdNews}
            onPress={() => this.handlePress(news[10].pk)}
          >
            <Image
              style={styles.thirdNewsImage}
              source={{ uri: "https://iranwire.com/" + news[10].image }}
            />
            <Text style={styles.thirdNewsTitle}>{news[10].title}</Text>
            <View style={styles.dateAndCat}>
              <Text style={styles.dateText}>
                {moment(news[10].pub_date).format(" jD jMMMM  jYY")}
              </Text>
              <Text style={styles.greenText}>{news[10].category} |</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  dateAndCatTextOnly: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 20,
    marginTop: 10
  },

  firstRowDate: {
    marginRight: 10,
    marginTop: -10,
    alignSelf: "flex-end"
  },

  dateText: {
    fontFamily: "IranSansR"
  },
  greenText: {
    color: "#76a56f",
    fontFamily: "IranSansB"
  },
  dateAndCat: {
    width: 150,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  container: {
    width: "100%"
  },
  divider: {
    backgroundColor: "#eee",
    height: 5,
    marginTop: 15
  },
  rowTwo: {
    height: 220,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: -25
  },
  thirdNews: {
    paddingHorizontal: 40
  },
  thirdNewsImage: {
    marginTop: 10,
    width: screenWidth / 2 - 20,
    aspectRatio: 1.77,
    paddingLeft: 10
  },
  thirdNewsTitle: {
    height: 70,
    fontFamily: "IranSansB",
    textAlign: "right",
    width: 150,
    marginBottom: 40,
    marginHorizontal: -10,
    paddingLeft: 5
  },
  rowOneTextImage: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  // rowOne: {
  //   height: 120,
  //   justifyContent: "space-around"
  // },
  rowOneImage: {
    marginTop: 10,
    width: 150,
    aspectRatio: 1.77,
    resizeMode: "cover",
    marginLeft: 15
  },
  rowOneTitle: {
    height: 80,
    fontFamily: "IranSansB",
    width: screenWidth - 140,
    alignSelf: "center",
    paddingHorizontal: 10,
    textAlign: "right",
    marginRight: 10
  },
  mainImage: {
    width: screenWidth,
    aspectRatio: 1.77,
    resizeMode: "cover"
  },

  title: {
    fontFamily: "IranSansB",
    fontSize: 20,
    textAlign: "right",
    padding: 20
  },
  authorDate: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 20
  },
  date: {
    color: "black",
    fontFamily: "IranSansR"
  },
  author: {
    color: "#76a56f",
    paddingRight: 20
  }
});
