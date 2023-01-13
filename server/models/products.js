const db = require('../config/db');

const Product = {
    fetchAllProducts: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM products`, (err, products, fields) => {
                if (err) {
                    reject(err)
                }
                resolve(products)
            })
        })
    },
    createProduct: (product) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO products SET ?`, [product], (err, result, fields) => {
                if(err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }
}

module.exports = Product