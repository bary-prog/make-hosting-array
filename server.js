// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // ✅ Parses JSON bodies
// Sample data

app.get('/keys-values', (req, res) => {

    const array_data = req.body.array_data;
    if (!Array.isArray(array_data) || array_data.length === 0) {
        return res.status(400).json({ error: 'Invalid or empty array_data' });
      }
  const obj = array_data[0];
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  res.json({ keys, values });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
