const express = require('express');
const bparser = require('body-parser');
const path = require('path');

const app = express();

app.use(bparser.json());
app.use(bparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './../public')));
app.use(express.static(path.join(__dirname, './../node_modules')));

app.listen(3000, () => {});
