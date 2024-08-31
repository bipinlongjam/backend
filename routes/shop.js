
const express = require('express')

const path =    require('path')

const router = express.Router();

const rootDir = require('../utils/path')

const shopController = require('../controllers/shopController')
const productController = require('../controllers/productController')

// router.get('/',(req, res, next) =>{
//     res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
// })


router.get('/', shopController.getShop);
router.get('/', productController.getProduct);

module.exports = router;