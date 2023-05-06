const express = require('express');
const connection = require('./DB/Connection');
const userrouter = require('./modules/Users/user.router');
const productrouter = require('./modules/Products/products.router');
const app = express();
const port = 3000; 
app.use(express.json());

connection
app.use(userrouter);
app.use(productrouter);
app.get('/', (req, res) => res.send('Hello world'));
app.listen(port, () => console.log(`example works On port ${port} !`));