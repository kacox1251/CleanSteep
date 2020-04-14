const express = require("express");
const logger = require("morgan");
const passport = require("passport");
const dbConnection = require("./dbConnection");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

require("dotenv").config();
require("./config/passport/localStrategy");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// Sessions
app.use(
  session({
    secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

// passport
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

