const mongoose = require('mongoose');

const registerschema = new mongoose.Schema({
   name :{type:String},
   email:{type:String},
   password:{type:String},
  });

  const register = mongoose.model('user', registerschema);

  module.exports = register;