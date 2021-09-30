const mongoose = require('mongoose');

const userSchema = {
    name: String,
    lastName: String,
    eMail: String,
    password: String,
}

const User = mongoose.model("users", userSchema)

module.exports = User;