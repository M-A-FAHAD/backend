const express = require('express');
const data = require('./Data/json');
const dotenv = require('dotenv');


dotenv.config()
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1>');
})
app.get('/data', (req, res) => {
    res.json(data)
})

port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})