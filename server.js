var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var express = require("express");
global.__basedir = __dirname;
var config = require("./webpack.config.js");
var api = require("./api/api");

if (process.env.NODE_ENV === "dev-server") {
  config.entry.app.unshift(
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/dev-server"
  );

  var compiler = webpack(config);

  var server = new webpackDevServer(compiler, {
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        secure: false
      }
    }
  });

  server.listen(8080);
} else if (process.env.NODE_ENV === "dev-api") {
  var app = express();

  api.defineApi(app);
  app.listen(8082, function() {
    console.log("API is up!");
  });
} else {
  var app = express();

  app.use("/", express.static("bundle"));
  api.defineApi(app);

  app.listen(8080, function() {
    console.log("Both front-end and API are up!");
  });
}
