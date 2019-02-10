const express = require('express');
const router =  express.Router();
//Rental is an instance of the class schema that has allits methods defined
const Rental = require('../models/rental');
router.get('', (req,res) =>{
    //the callbvack function will called when the response from the database 
    Rental.find({}, (err, foundRentals) =>{
        //sends a JSON response  
        
        res.json(foundRentals);
      
   })
});
//getting the specific rental on the reuest 
router.get('/:id', (req, res)=>{
    //storing the requiested id into rentalId 
    const rentalId = req.params.id;
    //finding bthe rental from the database 
    //calling the call back function on finding the rental
    Rental.findById(rentalId, (err , foundRental) =>{
        if(err){
            //callback function to be called on the resp[onse stayuis ]
            res.status(404).send({title  : "rental Error",detail : "Could not find the data" })
    }
    res.json(foundRental);
    })
})

//exporting the module 
module.exports = router;