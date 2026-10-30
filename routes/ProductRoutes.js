const express = require('express')
const router= express.Router()

const {getProducts, deleteProduct,createProduct,updateProduct} = require('../controllers/productcontroller')

router.get('/products', getProducts);
router.post('/createproduct', createProduct);
router.put('/updateproduct/:id', updateProduct);
router.delete('/deleteprod/:id', deleteProduct);


module.exports = router