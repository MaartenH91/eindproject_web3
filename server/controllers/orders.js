const Order = require('../models/order')

exports.getOrderById = (req, res) => {
    const orderId = req.params.id;
    Order.fetchOrder(orderId)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err))
}

exports.postOrder = (req, res) => {

}