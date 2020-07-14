const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserDetail = new Schema({
    name: String,
    id: Number

});

const User = mongoose.model('User', UserDetail);

module.exports = {
    User
};