const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Express middleware to convert request body to json
app.use(bodyParser.json());

// POST /leads to endpoint - Used to add a lead to the database
app.get('/', (req, res) => {
  res.status(200).send('Landing Page Active...')
});

app.listen(port, () => {
  console.log(`Started listening on port ${port}`);
})
