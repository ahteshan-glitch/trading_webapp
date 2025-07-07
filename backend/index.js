// backend/index.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { holdingModel, orderModel, userModel, positionModel } = require("./models/model.js");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://marketspex.netlify.app",
    "https://moonlit-cocada-c21814.netlify.app"
  ],
  credentials: true
}));

app.get("/allholdings", async (req, res) => {
  try {
    const all = await holdingModel.find({});
    res.json(all);
  } catch (err) {
    console.error("allholdings error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.get("/allpositions", async (req, res) => {
  try {
    const all = await positionModel.find({});
    res.json(all);
  } catch (err) {
    console.error("allpositions error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new orderModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).json({ message: "Order created", order: newOrder });
  } catch (err) {
    console.error("newOrder error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (await userModel.findOne({ username })) {
      return res.status(409).json({ message: "Username already exists" });
    }
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        console.error("hashing error:", err);
        return res.status(500).json({ message: "Hashing error", error: err.message });
      }
      try {
        const newUser = await userModel.create({ username, email, password: hash });
        const token = jwt.sign({ email }, JWT_SECRET);
        res
          .cookie("token", token, { httpOnly: true, secure: true })
          .status(201)
          .json({
            message: "Account created",
            token,
            redirectUrl: process.env.BACKEND_URL
          });
      } catch (err2) {
        console.error("create user error:", err2);
        res.status(500).json({ message: "Server error", error: err2.message });
      }
    });
  } catch (err) {
    console.error("signup route error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    bcrypt.compare(password, user.password, (err, same) => {
      if (err) {
        console.error("compare error:", err);
        return res.status(500).json({ message: "Error checking password", error: err.message });
      }
      if (!same) {
        return res.status(403).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ email: user.email }, JWT_SECRET);
      res
        .cookie("token", token, { httpOnly: true, secure: true })
        .status(200)
        .json({ token, redirectUrl: process.env.BACKEND_URL });
    });
  } catch (err) {
    console.error("login route error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "", { maxAge: 0 }).status(200).json({ message: "Logged out" });
});

app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("DB connection error:", err);
    process.exit(1);
  });
