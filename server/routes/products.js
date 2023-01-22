const express = require('express')
const ProductController = require('../controllers/products')
const router = express.Router();
const {body, params, validationResult} = require('express-validator')

router.get('/', ProductController.getAllProducts)
router.post('/confirmorder',ProductController.createOrder)

router.post('/confirm',
    [
        body('id').notEmpty(),
        body('price').notEmpty(),
        body('qty').notEmpty(),
    ],
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    ProductController.createOrderLine(req, res)
    })

module.exports = router;