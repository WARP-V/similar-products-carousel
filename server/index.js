const express = require('express');
const path = require('path');
const Shoe = require('./../database/model.js');

const app = express();

app.use(express.static(path.join(__dirname, './../public')));
app.use(express.static(path.join(__dirname, './../node_modules')));

app.get('/similar', (req, res) => {
  Shoe.getOne(req.query.product_sku, (err1, data1) => {
    if (err1) {
      res.status(500).send(err1.message);
    } else {
      const opts = data1[0].product_line;
      Shoe.getTwelveSimilarWithImages(opts, (err2, data2) => {
        if (err2) {
          res.status(500).send(err2.message);
        } else {
          res.send(data2);
        }
      });
    }
  });
});

app.post('/switch', (req, res) => {
  res.send('switch to ', req.body.id);
});

app.listen(3001, () => {});
