//importing the user models
const User = require("../models/user");
const MongooseHelpers = require("../helpers/mongoose");
const jwt = require('jsonwebtoken');
const config = require("../config/dev");



//authentication midlleware function
exports.auth =  (req,res) =>{
    //getting the  input from the user through body-parser and storing inside the req.body
    const { email, password }  = req.body;

    //checking from email and password 
    if(!email || !password){
        return res.status(422).send({title  : "Insuficienet credentials",detail : "Provide email and password" })
    }

    //checkling whether the user already existingf
    User.findOne({email}, function(err, user) {
    if (err) {
      return res.status(422).send({errors: MongooseHelpers.normalizeErrors(err.errors)});
    }

    if (!user) {
      return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'User does not exist'}]});
    }
    if (user.hasSamePassword(password)) {
        //defing the JWT token
        const token = jwt.sign({
          userId: user.id,
          username: user.username
        }, config.SECRET, { expiresIn: '1h'});
  
        return res.json(token);
    } else {
      return res.status(422).send({errors: [{title: 'Wrong Data!', detail: 'Wrong email or password'}]});
    }
  });
}
//registerig middlweare function
exports.register =  (req,res) =>{
    //req.body is defined by the body parser
    const { username, email, password, passwordConfirmation } = req.body
    //checking for the mail and password are valild
    if(!email || !password){
        return res.status(422).send({title  : "Insufiecinet credentials",detail : "Provide email and password" })
    }

    if(password != passwordConfirmation){
        return res.status(422).send({title  : "Password not matching",detail : "Enter the same password" })
    }
    if(User.findOne({email}, (err, existingUser) => {
       
        if(err){
            //sending the mongoose errror
            return res.status(422).send({error : MongooseHelpers.normalizeErrors(err.error)})
        }
        if(existingUser){
            return res.status(422).send({title  : "Invalid emial",detail : "User with same email exist" })
        }
        
        //creating the new user and pushing into the database
        const user = new User({username, email, password});
        //err form the if condition  


        user.save((err) =>{
            //to work with the mongosoe errors, helpers directory is craeted and mongoose.js file is added
            if(err){
                return res.status(422).send({error : MongooseHelpers.normalizeErrors(err.errors)})
            }
            return res.json({"register": true});
        });
        
        
    }));
    
}


exports.authMiddleWare = ( req, res, next ) =>{
    //current token stored in the browser temperory storage 
    const token = req.headers.authorization;
    //from thetoken you need to parse the users data 
    if(token){
        //storing the user info inside user variable 
        const user = parseToken(token);
        //finding the user by iD
        User.findById(user.userId, (err, user) =>{
            if(err){
                return res.status(422).send({error : MongooseHelpers.normalizeErrors(err.errors)})
            }
            //if authoraized
            if(user){
                //passing the user object to route handlers 
                res.locals.user = user;
                //next() will invoke the next midlleware or route handler middleware function itself
                next(); 
            }else{
                return notAuthorized(res);
            }
        })
    } else{
        return notAuthorized(res);

    }
}
//fumction to parse the JWT 
parseToken = (token) =>{
    //function to decode the token 
    //split  function is used to split the token by spaces 
    //normal JWT = 'bearer uwhgfowighipwgnwlghilwugiblorglbgivwirgibrwru'
    return  decoded = jwt.verify(token.split(' ')[1], config.SECRET);
}

notAuthorized = (res) =>{
    return res.status(401).send({title  : "Not loggeed in!!",detail : "Login to Continue" })
}