// backend/index.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  holdingModel,
  orderModel,
  userModel,
  positionModel
} = require("./models/model.js");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const FRONTENDS = [
  "http://localhost:5173",
  "https://marketspex.netlify.app",
  "https://moonlit-cocada-c21814.netlify.app"
];

const app = express();
app.use(bodyParser.json());

// 1) Log every Origin header
app.use((req, res, next) => {
  console.log("→ Incoming Origin:", req.headers.origin);
  next();
});

// 2) Enable CORS on all routes
app.use(cors({
  origin: FRONTENDS,
  credentials: true
}));
app.options("*", cors({
  origin: FRONTENDS,
  credentials: true
}));

// 3) Your routes—always use path strings, never full URLs!
app.get("/allholdings", async (req, res) => {
  try {
    const all = await holdingModel.find({});
    res.json(all);
  } catch (err) {
    console.error("allholdings error:", err);
    res.status(500).json({ message: err.message });
  }
});

app.get("/allpositions", async (req, res) => {
  try {
    const all = await positionModel.find({});
    res.json(all);
  } catch (err) {
    console.error("allpositions error:", err);
    res.status(500).json({ message: err.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new orderModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.error("newOrder error:", err);
    res.status(500).json({ message: err.message });
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
        console.error("hash error:", err);
        return res.status(500).json({ message: err.message });
      }
      const newUser = await userModel.create({ username, email, password: hash });
      const token = jwt.sign({ email }, JWT_SECRET);
      res
        .cookie("token", token, { httpOnly: true, secure: true })
        .status(201)
        .json({ token, redirectUrl: process.env.BACKEND_URL });
    });
  } catch (err) {
    console.error("signup error:", err);
    res.status(500).json({ message: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    bcrypt.compare(password, user.password, (err, same) => {
      if (err) {
        console.error("compare error:", err);
        return res.status(500).json({ message: err.message });
      }
      if (!same) return res.status(403).json({ message: "Invalid credentials" });

      const token = jwt.sign({ email: user.email }, JWT_SECRET);
      res
        .cookie("token", token, { httpOnly: true, secure: true })
        .status(200)
        .json({ token, redirectUrl: process.env.BACKEND_URL });
    });
  } catch (err) {
    console.error("login error:", err);
    res.status(500).json({ message: err.message });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "", { maxAge: 0 }).json({ message: "Logged out" });
});

app.get("/", (req, res) => {
  res.send("Backend is up");
});

// Connect to Mongo and start listening
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server listening on ${PORT}`)))
  .catch(err => {
    console.error("DB connection error:", err);
    process.exit(1);
  });
