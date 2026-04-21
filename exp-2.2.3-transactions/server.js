require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transactions');

const app = express();

//  MongoDB connect
connectDB();

// ─── Middleware ─────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ─────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

// ─── 404 Handler ────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.originalUrl} not found`
  });
});

// ─── Global Error Handler ───────────────────
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

// ─── Start Server ───────────────────────────
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`\n Experiment 2.2.3 — Transaction System with Rollback`);
  console.log(`   Server running on http://localhost:${PORT}`);
  console.log(`\n  MongoDB Transactions require a Replica Set!`);
  console.log(`   ✔ Atlas works automatically (recommended)`);
  console.log(`\n Auth Routes:`);
  console.log(`   POST /api/auth/register`);
  console.log(`   POST /api/auth/login`);
  console.log(`\nTransaction Routes (JWT required):`);
  console.log(`   GET  /api/transactions/balance`);
  console.log(`   POST /api/transactions/deposit`);
  console.log(`   POST /api/transactions/transfer`);
  console.log(`   GET  /api/transactions/history`);
  console.log(`   GET  /api/transactions/logs\n`);
});
