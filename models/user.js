const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


var userSchema = new Schema({
    Firstname: { type: String, required: true },
    Lastname: { type: String, required: true },
    Phoneno: { type: Number, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    ConfirmPassword: { type: String, required: true },
    resetpasswordtoken: String,
    ResetPasswordexpire: Date
    

    


});

userSchema.method.encryptPassword = function (Password) {
    return bcrypt.hashSync(Password, bcrypt.genSaltSync(5), null);
    
};

userSchema.method.validPassword = function (Password) {
    return bcrypt.compareSync(Password, this.Password);
    
};



module.exports = mongoose.model('user', userSchema);