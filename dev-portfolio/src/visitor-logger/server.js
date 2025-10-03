// Created: 2025-09-25 (TV)
// Simple Express server to log visitor information
// This will only log basic info: IP address, visit time, user agent

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/log-visit', (req, res) => {
  const visitorInfo = {
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    userAgent: req.headers['user-agent'],
    timestamp: new Date().toISOString(),
  };

  fs.appendFile('visitors.log', JSON.stringify(visitorInfo) + '\n', err => {
    if (err) console.error('Error logging visit:', err);
  });

  res.status(200).send('Visit logged');
});

app.listen(PORT, () => {
  console.log(`Visitor logger running on port ${PORT}`);
});
