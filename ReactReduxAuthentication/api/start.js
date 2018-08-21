const mongoose = require("mongoose");

// import environmental variables from our variables.env file
require("dotenv").config({ path: "variable.env" });

// Connect to our Database and handle any bad connections
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", err => {
  console.error(
    `You have an error from connection to the DataBase and the error is → ${
      err.message
    }`
  );
});

// import all the models
require("./models/User");

// Start our app!
const app = require("./app");
app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
