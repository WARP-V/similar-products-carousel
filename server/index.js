const express = require('express');
const bparser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.use(bparser.json());
app.use(bparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './../client')));
app.use(express.static(path.join(__dirname, './../node_modules')));

app.listen(3000, () => console.log('listening on port 3000'));