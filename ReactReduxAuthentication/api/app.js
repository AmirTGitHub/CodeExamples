const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const router = require("./router/router");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// implementing Passport
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
//routing the app happened in here
app.use("/api", router);

module.exports = app;
