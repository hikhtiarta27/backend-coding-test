const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userScheme = new Schema({
  id: ObjectId,
  userName: String,
  accountNumber: Number,
  emailAddress: String, 
  identityNumber: Number
});

const User = mongoose.model("User", userScheme)

module.exports = User