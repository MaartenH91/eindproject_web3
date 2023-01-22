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
    createOrderLine: (product) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO orderline SET order_id=(SELECT id FROM orders ORDER BY id DESC LIMIT 1), products_id=?, qty=?, price=?`, [product.products_id, product.qty, product.price], (err, result, fields) => {
                if(err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    },
    createOrder: () => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO orders SET created = now()`, (err,result, fields ) => {
                if(err){
                    reject(err)
                }
                resolve(result)
            })
            }

        )
    }
}
module.exports = Product
