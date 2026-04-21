require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const publicRoutes = require('./routes/public');
const protectedRoutes = require('./routes/protected');

const app = express();

// ✅ Connect MongoDB
connectDB();

// ─── Middleware ─────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom logger
app.use(logger);

// ─── Routes ─────────────────────────────────
app.use('/api/public', publicRoutes);
app.use('/api/protected', protectedRoutes);

// ─── 404 Handler ────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// ─── Global Error Handler ───────────────────
app.use(errorHandler);

// ─── Start Server ───────────────────────────
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`\n🚀 Experiment 2.2.1 — Middleware Demo`);
  console.log(`   Server running on http://localhost:${PORT}`);
  console.log(`\n📋 Available Routes:`);
  console.log(`   GET  /api/public/health`);
  console.log(`   POST /api/public/login`);
  console.log(`   GET  /api/public/error`);
  console.log(`   GET  /api/protected/dashboard`);
  console.log(`   GET  /api/protected/profile`);
});