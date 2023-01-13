const Product = require('../models/products')

exports.getAllProducts = (req, res) => {
    Product.fetchAllProducts()
        .then(products => res.json(products))
        .catch(err => res.status(500).send(err))
}

exports.createProduct = (req, res) => {
    const product = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
    }
    Product.createProduct(product)
        .then(result => res.send({created:product}))
        .catch(err => res.status(500).send(err))
}