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

let initSchema = fs.readFileAsync('server/db/.schema.sql', 'utf8')
  .then((schema) => {
    connection.queryAsync(schema);
  });

let seedTables = () => {
  prod_skus.forEach((prod_sku, i) => {
    
    let price_full = Math.random() * 200 + 100;
    let price_sale = Math.random() > 0.5? price_full - Math.random() * 80: null;
    let prod_line = prod_lines[i % prod_lines.length];
    let prod_name = 'Best Shoe Ever';

    connection.queryAsync(
      'INSERT INTO shoes (product_sku, price_full, price_sale, product_line, product_name) VALUES (?, ?, ?, ?, ?)',
      [prod_sku, price_full, price_sale, prod_line, prod_name]);

    let img_src = img_srcs[i % img_srcs.length];

    connection.queryAsync(
      'INSERT INTO images (product_sku, image_view, image_source) VALUES (?, ?, ?)',
      [prod_sku, 'profile_left', img_src]);
  });
}

Promise.resolve(initSchema)
  .then(seedTables)
  .then(() => {
    console.log('done.');
    connection.end();
  });
