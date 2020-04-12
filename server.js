const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var nodemailer = require("nodemailer");
const creds = require("./config/config.js");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
app.get("/", (req, res) => {
  res.json({ message: "hi poems!." });
});

// var transport = {
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS,
//   },
// };

// var transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//   if (error) {
//     console.log("Uh oh", error);
//   } else {
//     console.log("Server is ready to take messages");
//   }
// });

// //move to separate file
// app.post("/send", (req, res, next) => {
//   var firstName = req.body.firstName;
//   var lastName = req.body.lastName;
//   var email = req.body.email;
//   var body = req.body.message;
//   var content = `name: ${
//     (firstName, lastName)
//   } \n email: ${email} \n message: ${body} `;
//   console.log("REQUEST: ", req.body);
//   var mail = {
//     from: firstName,
//     to: "itochterman@gmail.com",
//     subject: "New Message from Contact Form",
//     text: content,
//   };
//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: "fail",
//       });
//     } else {
//       res.json({
//         msg: "success",
//       });
//     }
//   });
// });

var poems = express.Router();
var email = express.Router();

require("./routes/poem.routes")(poems);
require("./routes/email.routes")(email);

app.use("/", poems);
app.use("/", email);

// app.use(require("./routes/email"));
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
