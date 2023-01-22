const db = require('../config/db')

const Order = {
    fetchOrder: (orderId) => {
        return new Promise((resolve, reject)=>{
            db.query(`SELECT o.firstname, p.name, ol.price, ol.qty
                FROM orderline ol
                INNER JOIN orders o ON ol.order_id = o.id
                INNER JOIN products p ON ol.products_id = p.id
                WHERE ol.order_id=?`, [orderId], (err, orders, fields)=>{
                if(err){
                    reject(err)
                }
                resolve(orders)
            })
        })
    },
    fetchAllOrders : () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM orders`, (err, products, fields) => {
                if (err) {
                    reject(err)
                }
                resolve(products)
            })
        })
    },
    createOrder: (order)=>{
        return new Promise((resolve, reject)=>{
            db.query(`UPDATE orders SET ? order by id desc limit 1`,[order], (err,result, fields ) => {
                if(err){
                    reject(err)
                }
                resolve(result)
            })

        })
    }
}

module.exports = Order