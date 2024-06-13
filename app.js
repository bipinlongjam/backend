const http = require('http')

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 3000;
const server = http.createServer(app)

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req, res, next) =>{
    console.log("This always runs!")
    next();
})
app.use('/add-product',(req, res, next) =>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <input type="number" name="size"><button type="submit">Add Product</button></form>')
})

app.use('/product', (req, res, next) =>{
   console.log(req.body);
    res.redirect('/')
})

app.use('/',(req, res, next) =>{
    res.send('<h1>Hello from Express</h1>')
})
server.listen(PORT,() =>{
        console.log("server started")
})