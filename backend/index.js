require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Import your Mongoose models
const {
  holdingModel,
  orderModel,
  userModel,
  positionModel
} = require("./models/model.js");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

// 1) Connect to MongoDB before starting the server
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to database"))
  .catch(err => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

// 2) Configure and apply CORS middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://marketspex.netlify.app",
  "https://moonlit-cocada-c21814.netlify.app"
];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight OPTIONS requests

// 3) Parse JSON bodies
app.use(express.json());

// === ROUTES ===

// Get all holdings
app.get("/allholdings", async (req, res) => {
  try {
    const allHoldings = await holdingModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching holdings" });
  }
});

// Get all positions
app.get("/allpositions", async (req, res) => {
  try {
    const allPositions = await positionModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching positions" });
  }
});

// Create a new order
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

// User signup
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error hashing password" });
      }

      const newUser = await userModel.create({ username, email, password: hash });
      const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET);
      res.cookie("token", token, { httpOnly: true, sameSite: "none", secure: true });
      return res.status(201).json({
        message: "Account created successfully",
        token,
        redirectUrl: process.env.BACKEND_URL
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during signup" });
  }
});

// User logout
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// User login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error checking credentials" });
      }
      if (result) {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true, sameSite: "none", secure: true });
        return res.status(200).json({ token, redirectUrl: process.env.BACKEND_URL });
      } else {
        return res.status(403).json({ message: "Please recheck your credentials" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
