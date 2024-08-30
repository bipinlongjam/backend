const http = require('http')

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 3001;
const server = http.createServer(app)

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus')
const path = require('path');

const errorController = require('./controllers/errorController')

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use(errorController.get404)

server.listen(PORT,() =>{
        console.log("server started")
})