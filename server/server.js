const express = require('express')
const productsRoute = require('./routes/products')
const confirmOrder = require('./routes/orders')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/confirmation/', confirmOrder)
app.use('/products/', productsRoute)

app.listen(3001)
console.log("App is listening on port 3001")