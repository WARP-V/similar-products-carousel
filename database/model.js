const mysql = require('mysql');

class Shoe {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PORT,
      database: process.env.RDS_DBNAME,
    });
  }

  getOne(opts, cb) {
    this.connection.query('SELECT * FROM shoes WHERE product_sku = ? LIMIT 1', opts, cb);
  }

  getAll(cb) {
    this.connection.query('SELECT * FROM shoes', cb);
  }

  getImagesOfTwelveSimilar(opts, cb) {
    const q = 'SELECT * FROM shoes INNER JOIN images ON shoes.product_sku = images.product_sku WHERE shoes.product_line = ? OR shoes.product_cat = ? AND shoes.product_sku != ? ORDER BY RAND() LIMIT 12';
    this.connection.query(q, opts, cb);
  }
}

module.exports.Shoe = new Shoe();
