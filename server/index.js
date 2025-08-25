const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({ origin: "*" })); // Allow all origins (update for production)
app.use(express.json());

// Root route (health check)
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Render with HTTPS!");
});

// Routes
app.use("/api/contact", require("./routes/contact"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
