const express = require('express');
const path = require('path');
// const sslRedirect = require('heroku-ssl-redirect');
const port = process.env.PORT || 8080;

const app = express();

// Forces website accesses to https
// app.use(sslRedirect());
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(port, () => {
  console.log(`Started listening on port ${port}`);
})
