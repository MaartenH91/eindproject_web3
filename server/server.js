const express = require('express')
const app = express();
const productsRoute = require('./routes/products')

app.use(express.json());
app.use('/products', productsRoute)

app.listen(3001)
console.log("App is listening on port 3001")