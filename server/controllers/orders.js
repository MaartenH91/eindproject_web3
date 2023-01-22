const Order = require('../models/order')

exports.getOrderById = (req, res) => {
    const orderId = req.params.id;
    Order.fetchOrder(orderId)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err))
}

exports.getAllOrders = (req, res) => {
    Order.fetchAllOrders()
        .then(orders => res.json(orders))
        .catch(err => res.status(500).send(err))
}

exports.createOrder = (req, res) => {
    const order = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        street: req.body.street,
        number: req.body.number,
        postalCode: req.body.postalCode,
        city: req.body.city,
        telephone: req.body.telephone,
        email: req.body.email,
    }
    Order.createOrder(order)
        .then(result => res.send({created: order}))
        .catch(err => res.status(500).send(err))
}