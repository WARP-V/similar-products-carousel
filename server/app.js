const express = require('express');
const path = require('path');
const model = require('./../database/model.js');

const app = express();

app.use(express.static(path.join(__dirname, './../public')));
app.use(express.static(path.join(__dirname, './../node_modules')));

app.get('/:product_sku/similar', (req, res) => {
  console.log(req)
  model.Shoe.getOne(req.params.product_sku, (err1, data1) => {
    if (err1) {
      res.status(500).send(err1.message);
    } else {
      const opts = [data1[0].product_line, data1[0].product_cat, data1[0].product_sku];
      model.Shoe.getImagesOfTwelveSimilar(opts, (err2, data2) => {
        if (err2) {
          res.status(500).send(err2.message);
        } else {
          res.send(data2);
        }
      });
    }
  });
});

module.exports = app;

