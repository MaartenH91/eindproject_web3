const {body, params, validationResult} = require('express-validator')
const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products");
const ConfirmController = require('../controllers/orders')

router.get('/products', ProductController.getAllProducts)
router.post('/products',
    [
        body('name').notEmpty(),
        body('price').notEmpty(),
        body('description').notEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors:errors.array()})
        }
        ProductController.createProduct(req, res)
    }
)

router.get('/confirm/:id', ConfirmController.getOrderById)


module.exports = router;