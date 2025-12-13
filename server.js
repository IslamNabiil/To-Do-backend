const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
