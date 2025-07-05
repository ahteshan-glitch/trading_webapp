require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Your Mongoose models
const {
  holdingModel,
  orderModel,
  userModel,
  positionModel
} = require("./models/model.js");

const PORT     = process.env.PORT     || 5000;
const MONGO_URL = process.env.MONGO_URL;
const BACKEND_URL = process.env.BACKEND_URL;  // for redirectUrl

// 1) CONNECT TO MONGODB FIRST
if (!MONGO_URL) {
  console.error("❌ MONGO_URL is not set in environment");
  process.exit(1);
}

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to database"))
  .catch(err => {
    console.error("❌ Database connection error:", err);
    process.exit(1);
  });

// 2) INIT EXPRESS & CORS
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://marketspex.netlify.app",
  "https://moonlit-cocada-c21814.netlify.app"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);

// 3) PARSE JSON
app.use(express.json());

// === ROUTES ===

// GET all holdings
app.get("/allholdings", async (req, res) => {
  try {
    const allHoldings = await holdingModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching holdings" });
  }
});

// GET all positions
app.get("/allpositions", async (req, res) => {
  try {
    const allPositions = await positionModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching positions" });
  }
});

// POST create a new order
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new orderModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).json({ message: "Order created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error creating order" });
  }
});

// POST signup
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (await userModel.findOne({ username })) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ username, email, password: hash });

    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true
    });

    return res.status(201).json({
      message: "Account created successfully",
      token,
      redirectUrl: BACKEND_URL
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during signup" });
  }
});

// POST logout
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// POST login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(403).json({ message: "Please recheck your credentials" });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true
    });

    return res.status(200).json({ token, redirectUrl: BACKEND_URL });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Root
app.get("/", (req, res) => res.send("Welcome to the backend"));

// 4) START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
