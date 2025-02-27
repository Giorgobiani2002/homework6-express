app.get('/current-time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.send(`Current time: ${currentTime}`);
  });