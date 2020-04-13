const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var nodemailer = require("nodemailer");
const creds = require("./config/config.js");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
  origin: "http://localhost:3000",
};

console.log(process.env.USER);

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
app.get("/", (req, res) => {
  res.json({ message: "hi der." });
});
require("./routes/email.routes")(app);

require("./routes/poem.routes")(app);
console.log(app.response);
// const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
