const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

require("dotenv").config(); // Load environment variables

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Email from .env
      pass: process.env.EMAIL_PASS, // Password from .env

      user: "davidweschler8@gmail.com", // Email from .env
      pass: "xfpx nfpy lfss yibg", // Password from .env
    },
  });

  const mailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    to: "davidweschler8@gmail.com",
    subject: "New Contact Form Submission", // Subject of the email
    text: `You have a new message from ${req.body.name} (${req.body.email}):\n\n${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent");
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
