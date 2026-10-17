require("dotenv").config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('My Week 2 API!')
});

app.use((req, res, next) => { //log in every request
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next(); //pass to the next handler
});

app.post('/user', (req, res) =>  {
  const {name, email} = req.body || {};
  if (!name || !email) {
    return res.status(400).json({error: "name and email are required!"});
  }
  res.send(`Hello ${name}!`);
});

app.get('/user/:id', (req, res) => {
  res.send(`user ${req.params.id} profile`);
});

  app.use((err, req, res, next) => {
    if (error.type ==="entity.parse.failed") {
      return res.status(400).json({error: "Invalid JSON"});
    }
    res.status(500).json({error: "server error"});
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});