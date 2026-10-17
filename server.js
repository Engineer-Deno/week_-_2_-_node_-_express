require("dotenv").config()

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => { //log in every request
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next(); //pass to the next handler
});

app.post('/user', (req, res) =>  {
  const {name, email} = req.body;
  res.json(`Hello ${name}`);
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  const userId = parseInt(id, 10);
  const users = [{id: 1, name: "denis "}, {id: 2, name: "Michael"}]
;  const user =  users.find(u => u.id ===userId);
  if(!user) {
    return res.status(400).json({error:`user with ID ${id} not found`});
  }
  return res.status(200).json(user);
});

app.get('/', (req, res) => {
  res.send('My Week 2 API!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});