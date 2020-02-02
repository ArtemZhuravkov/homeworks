const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');


const users = [
    {
        name: 'Ivan',
        age: 20
    }
]
app.use("/public", express.static("public"));
app.use(cors()).use(express.json());
app.get("/", (req, res) => res.send('Hello wolrd'));
app.get("/users", (req, res) => res.send(users));
app.post("/users", (req, res) => {
    users.push(req.body);
    res.status(201).res.send(req.body);
});
app.listen(port, () => console.log('Example http://localhost:8080')
);