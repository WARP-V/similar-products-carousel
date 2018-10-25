const Promise = require('bluebird');
const mysql = require('mysql');
const fs = Promise.promisifyAll(require('fs'));

const connection = mysql.createConnection({
  user: 'root',
  database: 'airjordans',
  multipleStatements: true
});
Promise.promisifyAll(connection);

const prod_skus = ['a','b','c'];
const prod_lines = ['Men\'s Shoe', 'Women\'s Shoe', 'Men\'s Basketball Shoe', 'Women\'s Basketball Shoe'];
const img_srcs = []


fs.readFileAsync('server/db/.schema.sql', 'utf8')
  .then((schema) => {
    connection.queryAsync(schema)
      .then(() => {
        prod_skus.forEach((prod_sku, i) => {
          let price_full = Math.random() * 200 + 100;
          let price_sale = Math.random() > 0.5? price_full - Math.random() * 80: null;
          let prod_line = prod_lines[i % prod_lines.length];
          let prod_name = 'Best Shoe Ever';

          connection.queryAsync(
              'INSERT INTO shoes (product_sku, price_full, price_sale, product_line, product_name) VALUES (?, ?, ?, ?, ?)',
              [prod_sku, price_full, price_sale, prod_line, prod_name])
            .then((res) => {
              console.log(res);
            });

          let img_src = img_srcs[i % img_srcs.length];

          connection.queryAsync(
              'INSERT INTO images (product_sku, image_view, image_source) VALUES (?, ?, ?)',
              [prod_sku, 'profile_left', img_src])
            .then((res) => {
              console.log(res);
            });
        });
      });
  });





// connection.queryAsync('CREATE DATABASE IF NOT EXISTS airjordans', [])
//   .then(() => {
//     connection.queryAsync('USE airjordans', []);
//   })
//   .then(() => {
//     console.log('dropping tables');
//     let droppers = [];
//     let tables = ['shoes', 'images'];
//     tables.forEach((table) => {
//       droppers.push(connection.querAsync('DROP TABLE IF EXISTS ?', [table]));
//     });
//     Promise.all(droppers);
//   })
//   .then(() => {
//     console.log('creating tables');
//     let creators = [];
//     let tables = ['shoes', 'images'];
//     tables.forEach((table) => {
//       creators.push(connection.querAsync('CREATE TABLE ', [table]));
//     });
//     Promise.all(creators);
//   })
//   .then(() => {

//   });

//seed