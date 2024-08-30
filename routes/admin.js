const express = require('express');
const path = require("path")
const router = express.Router();

const productController = require('../controllers/productController')

const rootDir = require('../utils/path')

// router.get('/add-product',(req, res, next) =>{
//   res.sendFile(path.join(__dirname, "..", "views", "add-product.html"))
// })

// router.post('/add-product', (req, res, next) =>{
//    console.log(req.body);
//     res.redirect('/')
// })

router.get('/add-product', productController.getAddProduct);
router.post('/add-product', productController.postAddProduct)

module.exports = router