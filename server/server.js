const express = require('express')
const app = express();
const productsRoute = require('./routes/products')
const confirmOrder = require('./routes/orders')
const router = require('./routes/router')

app.use(express.json());

app.use('/products/', productsRoute)
app.use('/confirm/', confirmOrder)

app.listen(3001)
console.log("App is listening on port 3001")