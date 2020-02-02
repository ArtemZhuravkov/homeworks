const express = require('express');
const { getRandomUser } = require('./users.js')
const app = express();
const port = 8080;
app.get('/', (req, res) => res.send(getRandomUser()));
app.listen(port, () => console.log('server at http://localhost:8080')
);