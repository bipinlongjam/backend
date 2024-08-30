const path = require('path');


exports.getContactUs = (req, res, next) =>{
    res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
}

exports.postSuccess = (req, res, next) =>{
    const {name, email} = req.body;
    console.log(`Name: ${name}, Email:${email}`);
    res.redirect('/success');
}

exports.getSuccess = (req, res, next) =>{
    res.send('<h1>Form successfully filled </h1>')
};