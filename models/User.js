const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {
        unique: true,
        type: String,
    },
    password: String,
    name_exchange: String,
    api_key: String,
    api_secret: String,
})
const User = mongoose.model('User', userSchema);
module.exports = User;