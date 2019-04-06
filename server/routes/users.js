const express = require('express');
const router =  express.Router();

const User = require("../controller/user")

router.post('/auth',User.auth);
//getting the specific rental on the reuest 
//the callback function will invoked on the request 
router.post('/register', User.register);

//exporting the module 
module.exports = router;