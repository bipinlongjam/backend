const http = require('http')

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 3000;
const server = http.createServer(app)

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) =>{
    res.status(404).send('<h1>Page not found</h1>')
})

server.listen(PORT,() =>{
        console.log("server started")
})