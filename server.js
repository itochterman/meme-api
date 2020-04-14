const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var nodemailer = require("nodemailer");
const creds = require("./config/config.js");
const path = require("path");

const app = express();

var corsOptions = {
  origin: "http://104.248.10.249:80",
  origin: "http://isabellatochterman.com",
};

console.log(process.env.USER);

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
require("./routes/email.routes")(app);
require("./routes/poem.routes")(app);
console.log(app.response);
// const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
