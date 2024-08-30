
const express = require('express')

const path =    require('path')

const router = express.Router();

const rootDir = require('../utils/path')

const shopController = require('../controllers/shopController')

// router.get('/',(req, res, next) =>{
//     res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
// })


router.get('/', shopController.getShop);

module.exports = router;