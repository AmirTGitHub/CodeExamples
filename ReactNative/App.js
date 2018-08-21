import React, { Component } from "react";
import TabNavigation from "./src/components/TabNavigation";
import { Font } from "expo";
import IranSansR from "./assets/fonts/IRANSansMobile.ttf";
import IranSansB from "./assets/fonts/IRANSansMobile_Bold.ttf";

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      IranSansR,
      IranSansB
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded && <TabNavigation />;
  }
}
