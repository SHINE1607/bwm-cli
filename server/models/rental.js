const mongoose = require('mongoose');
//schema class  from the mongoose
const Schema = mongoose.Schema;

//creating the rental schema 
//ccreating  an instance of the schema class 
const rentalSchema = new Schema(
    {
        //here the we defing the struture of our colection or schema  
        title : {
            type : String, 
            required : true, 
            //here we are entring the max number of charecterss and the error message 
            max :[120, 'Too long for the title:/']},
        city : {
            type:  String,
            required : true,
            lowercase : true
        },
        street : {
            type:  String,
            required : true,
            min : [4, 'Enter the complele stree address']
        },
        category : {
            type : String,
            required : true,
            lowercase : true
        },
        image: {
            type:  String,
            required : true
        },
        bedrooms: Number,
        description :{
            type: String, 
            required : true
        },
        rating : Number,
        Rate : Number   
    }
);

//exporting our model(schema)
//firts argument of the.model method is the name of the model
//second argument  is the model
//hre Rental is exported as a  class
//Rental has all the freatures of the mongoose middle =ware function 
module.exports = mongoose.model('Rental',rentalSchema);
