import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login from "./authentication/Login";
import Register from "./authentication/Register";

export default class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </BrowserRouter>
    );
  }
}
