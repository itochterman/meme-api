module.exports = (app) => {
  var nodemailer = require("nodemailer");
  const creds = require("../config/config.js");

  var transport = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    },
  };

  var transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log("Uh oh", error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  app.post("/send", (req, res, next) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var body = req.body.message;
    var content = `name: ${
      (firstName, lastName)
    } \n email: ${email} \n message: ${body} `;
    console.log("REQUEST: ", req.body);
    var mail = {
      from: firstName,
      to: creds.USER,
      subject: "New Message from Contact Form",
      text: content,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: "fail",
        });
      } else {
        res.json({
          msg: "success",
        });
      }
    });
  });
};
