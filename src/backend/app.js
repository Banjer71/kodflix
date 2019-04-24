const express = require('express');
const app = express();
const port = 3000
const getMovie = require('./show')


app.get('/rest/show', (req, res) => res.send(getMovie()))

app.listen(port, () => console.log('Server started'));