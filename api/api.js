const mysql = require("mysql");
var bodyParser = require("body-parser");
var cors = require("cors");
const fileUpload = require("express-fileupload");
var categoryApi = require("./category");
var subCategoryApi = require("./subcategory");
var featureApi = require("./feature");
var productApi = require("./product");
var userApi = require("./user");

//Create connection
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "joham_974",
  password: "joham974_",
  database: "jshopping_974",
  multipleStatements: true
});

//connect to database
conn.connect(err => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

module.exports = {
  defineApi: function(app) {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(fileUpload());

    categoryApi.addApi(app,conn);
    subCategoryApi.addApi(app,conn);
    featureApi.addApi(app,conn);
    productApi.addApi(app,conn);
    userApi.addApi(app,conn);
  }
};
