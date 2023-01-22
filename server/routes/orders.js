const express = require('express')
const OrderController = require('../controllers/orders')
const router = express.Router()
const {body, params, validationResult} = require('express-validator')

router.get('/:id', OrderController.getOrderById)
router.get('/', OrderController.getAllOrders)
router.post('/',
    [
        body('firstName').notEmpty(),
        body('lastName').notEmpty(),
        body('street').notEmpty(),
        body('number').notEmpty(),
        body('postalCode').isLength({min: 4, max:4}).trim(),
        body('city').notEmpty(),
        body('telephone').isNumeric(),
        body('email').isEmail().normalizeEmail(),

    ],
    (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        OrderController.createOrder(req,res)
    })


module.exports = router