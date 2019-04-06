const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//craetinhg an instance of the Schema class 
const userSchema = new Schema({
  username: {
    type: String,
    min: [4, 'Too short, min is 4 characters'],
    max: [32, 'Too long, max is 32 characters']
  },
  email: {
    type: String,
    min: [4, 'Too short, min is 4 characters'],
    max: [32, 'Too long, max is 32 characters'],
    unique: true,
    lowercase: true,
    required: 'Email is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    min: [4, 'Too short, min is 4 characters'],
    max: [32, 'Too long, max is 32 characters'],
    required: 'Password is required'
  },
  rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}],
});

//checking the password matches in authentication
//.methods middleware allows us to call them  from another module
userSchema.methods.hasSamePassword = function(requestedPassword) {
  //return true ofr false 
  return bcrypt.compareSync(requestedPassword, this.password);
}


//hashing
userSchema.pre('save', function(next) {
    const user = this;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            //next function will automatically call next functio to save the user in the database
            next();
    });
  });
});

module.exports = mongoose.model('User', userSchema );