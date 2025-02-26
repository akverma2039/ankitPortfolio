// Import dependencies
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "https://ankitkumarverma.netlify.app", // Replace with your Netlify URL
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
});

// API route to handle contact form submission
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your Gmail to receive messages
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

// Serve frontend build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  );
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
