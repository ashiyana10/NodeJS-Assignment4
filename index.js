const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const usernames = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

/**
 * add user name page
 */
app.get("/", (req, res) => {
  res.render("add");
});

/**
 * add user name post method
 */
app.post("/add-user", (req, res) => {
  usernames.push(req.body.userName);
  res.render("display", { data: usernames });
});

app.listen(4200);
