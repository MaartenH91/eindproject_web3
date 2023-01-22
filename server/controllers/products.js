const Product = require('../models/products')

exports.getAllProducts = (req, res) => {
    Product.fetchAllProducts()
        .then(products => res.json(products))
        .catch(err => res.status(500).send(err))
}

exports.createOrderLine = (req, res) => {
    const product = {
        products_id: req.body.id,
        qty: req.body.qty,
        price: req.body.price,
    }
    Product.createOrderLine(product)
        .then(result => res.send({created:product}))
        .catch(err => res.status(500).send(err))
}

exports.createOrder = (req,res)=>{
    Product.createOrder()
        .then(result => res.send("Order created"))
        .catch(err => res.status(500).send(err))
}