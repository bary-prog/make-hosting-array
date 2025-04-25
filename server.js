// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data
const data = [ /* your long JSON object here */ ];

app.get('/keys-values', (req, res) => {
  const obj = data[0];
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  res.json({ keys, values });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
