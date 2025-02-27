const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

function checkFolderExists(folderName) {
  const folderPath = path.join(__dirname, folderName);
  return fs.existsSync(folderPath);
}

app.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  if (fs.existsSync(dataPath)) {
    const data = fs.readFileSync(dataPath);
    res.json(JSON.parse(data));
  } else {
    res.status(404).send('data.json not found');
  }
});

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(`Random number: ${randomNumber}`);
});

app.get('/html', (req, res) => {
    const htmlTable = `
    <html>
      <body>
        <table border="1">
          <tr>
            <th>Email</th>
          </tr>
          <tr>
            
            <td>joniko</td>
          </tr>
          <tr>
            
            <td>gela</td>
            
          </tr>
        </table>
      </body>
    </html>
  `;
  res.send(htmlTable);
});

app.get('/current-time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.send(`Current time: ${currentTime}`);
});

app.get('/api', (req, res) => {
    const api = [
        { id: 1, name: 'lasha', type: 'user' },
        { id: 2, name: 'tura', type: 'animal' },
        { id: 3, title: 'gamarjoba', type: 'post' }
      ];
  res.json(api);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
