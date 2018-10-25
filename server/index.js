const express = require('express');
// const bparser = require('body-parser');
const path = require('path');
const Shoe = require('./db/model.js');
const app = express();

// app.use(bparser.json());
// app.use(bparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './../public')));
app.use(express.static(path.join(__dirname, './../node_modules')));

app.get('/similar', (req, res) => {
  Shoe.getOne(req.query.product_sku, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      let opts = data[0].product_line;
      Shoe.getTwelveSimilarWithImages(opts, (err, data) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          console.log(data);
          res.send(data);
        }
      });
    }
  });
});

app.post('/switch', (req, res) => {
  res.send('switch to ', req.body.id);
});

app.listen(3001, () => {});
