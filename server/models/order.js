const db = require('../config/db')

const Order = {
    fetchOrder: (orderId) => {
        return new Promise((resolve, reject)=>{
            db.query(`SELECT o.firstname, p.name, ol.price
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
    }
}

module.exports = Order