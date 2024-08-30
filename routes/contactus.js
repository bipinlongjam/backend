
const express = require('express')

const path =    require('path')

const router = express.Router();

const rootDir = require('../utils/path')

const contactController = require('../controllers/contactController')

// router.get('/contactus',(req, res, next) =>{
//     res.sendFile(path.join(__dirname, '..', 'views', 'contactus.html'))
// })
// router.post('/success', (req, res, next) => {
//     const { name, email } = req.body; // Extract the form data

//     // Perform any desired operations with the form data, such as saving it to a database
//     console.log(`Name: ${name}, Email: ${email}`);

//     // Redirect to the success page after form submission
//     res.redirect('/success');
// });

// // Route to display success message
// router.get('/success', (req, res, next) => {
//     res.send('<h1>Form successfully filled</h1>'); // Display success message
// });

router.get('/contactus', contactController.getContactUs);
router.post('/success', contactController.postSuccess);
router.get('/success', contactController.getSuccess)

module.exports = router;