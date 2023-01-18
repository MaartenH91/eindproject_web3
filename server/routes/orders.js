const express = require('express')
const {ConfirmController, postOrder} = require('../controllers/orders')

const router = express.Router();
const {body, params, validationResult} = require('express-validator')


module.exports = router