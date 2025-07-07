require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  holdingModel,
  orderModel,
  userModel,
  positionModel,
} = require("./models/model.js");

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


// Routes
app.get("/allholdings", async (req, res) => {
  const allHoldings = await holdingModel.find({});
  res.send(allHoldings);
});

app.get("/allpositions", async (req, res) => {
  const allPositions = await positionModel.find({});
  res.send(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new orderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  console.log(newOrder);
  await newOrder.save();
});

app.post("/signup", async (req, res) => {
  console.log("welcome to signup page");
  const { username, email, password } = req.body;

  const existingUser = await userModel.findOne({ username });
  if (existingUser) {
    return res.status(409).json({ message: "Username already exists" });
  }

  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) return console.log(err);

    const newUser = await userModel.create({
      username,
      email,
      password: hash,
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.cookie("token", token);
    res.status(200).json({
      message: "Account created successfully",
      token,
      redirectUrl: process.env.FRONTEND_URL,
    });
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token").send({ message: "Logged out" });
});

app.post("/login", async (req, res) => {
  console.log("response received");
  const { username, password } = req.body;

  const user = await userModel.findOne({ username });
  if (!user)
    return res.status(401).json({ message: "Username not found" });

  bcrypt.compare(password, user.password, (err, result) => {
    if (err)
      return res.status(500).json({ message: "Internal error" });

    if (result) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
      res.cookie("token", token);
      return res.status(200).json({
        token,
        redirectUrl: process.env.FRONTEND_URL,
      });
    } else {
      return res.status(403).json({ message: "Invalid credentials" });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

app.listen(PORT, () => {
  console.log("Server online");
  mongoose.connect(URL).then(() => {
    console.log("Connected to database");
  });
});
