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
  