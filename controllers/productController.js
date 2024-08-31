const path = require('path')

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname,"..", "views", "add-product.html"));

}

exports.postAddProduct = (req, res, next) =>{
   const products = new Product(req.body.title)
   products.save();
    res.redirect('/');
}
exports.getProduct = (req, res, next) =>{
    Product.fetchAll((products) => {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Shop</title>
            </head>
            <body>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/add-product">Add Product</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <h1>My Products</h1>
                    <ul>
                        ${products.map(product => `<li>${product.title}</li>`).join('')}
                    </ul>
                </main>
            </body>
            </html>
        `);
    });
}