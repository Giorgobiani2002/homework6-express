const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  if (fs.existsSync(dataPath)) {
    const data = fs.readFileSync(dataPath);
    res.json(JSON.parse(data));
  } else {
    res.status(404).send('data.json not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
