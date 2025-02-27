app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.send(`Random number: ${randomNumber}`);
  });
  