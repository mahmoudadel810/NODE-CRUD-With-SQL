const { addProduct, deleteProduct, updateProduct, getAllProducts, greater3000 } = require('./products.controller.js');

const router = require('express').Router();



router.post('/addProduct', addProduct);
router.delete('/deleteProduct', deleteProduct);
router.put('/updateProduct', updateProduct);
router.get('/getAllUsers', getAllProducts);
router.get('/greater3000', greater3000);












module.exports = router; 