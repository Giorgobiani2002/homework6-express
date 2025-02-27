app.get('/api', (req, res) => {
    const api = [
      { id: 1, name: 'lasha', type: 'user' },
      { id: 2, name: 'tura', type: 'animal' },
      { id: 3, title: 'gamarjoba', type: 'post' }
    ];
    res.json(api);
  });
  