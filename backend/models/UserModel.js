const mongoose = require('mongoose');

// Define a user schema
const userSchema = mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},

},{
    versionKey:false
})

const UserModel = mongoose.model('User', userSchema);

// Export the User model to use it in other parts of your application
module.exports = {
  UserModel,
};
