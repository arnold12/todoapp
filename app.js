const express = require('express');

const app = express();

const productRouter = require('./routes/products');
app.use('/products', productRouter);

app.listen(9000, () => {
  console.log('server started');
})