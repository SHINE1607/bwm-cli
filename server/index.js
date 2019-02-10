const express  = require('express');
//mongoose is  mongoDB ana object modelling tool to work in an asynchrnous environment
//simply monoogse helps the Js code to communicate  with the datavase 
const mongoose =  require('mongoose');
const config = require('./config/dev');
//importing the sschema model from the model dir
//assigning all functionalities of express and calling the express to app
//importing the fakedb
const FakeDb = require('./fake_db')
const rentalRoutes = require('./routes/rentals')
const app = express();
//this will connect to the mongo databse
//.connect has 2 callback functions .then and '', the first will be called if the connection is suuccessful and the latter if the unexpected happens
mongoose.connect('mongodb://shine1607:45TraderMan@ds161764.mlab.com:61764/book_our_stay_ng').then(()=>{
        //craeting  an instance of  the FakeDb class
    const fakeDb = new FakeDb();
    fakeDb.seeDb();
});

//ROUTING to rentals 
//these are middleware functions in express js framework
//app.get() middleawre function make the htp request
//app.get() calls the call back function  to handle the recieved json file 
// app.get('/rentals', function(req,res) {
//     res.json({'success' : true})
// })
//calling the rentalRoutes on getting the requst to the sp[ecified route
app.use('/api/v1/rentals', rentalRoutes);
 
//storing the port number inside a varable 
const PORT = process.env.PORT || 3001;
//listening to a specific port 
//on runnnning this file
app.listen(PORT, function(){
    console.log('its working!!');
});