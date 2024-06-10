const http = require('http')

const express = require('express');
const { error } = require('console');

const app = express();
const PORT = 3000;
const server = http.createServer(app)


app.use((req, res, next) =>{
    console.log("In the middleware")
    next();
})
app.use((req, res, next) =>{
    console.log('In another middleware')
    res.send('<h1>Hello from Express</h1>')
})
server.listen(PORT,() =>{
        console.log("server started")
})