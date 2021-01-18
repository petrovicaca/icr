const mongoose = require('../../ispit/node_modules/mongoose');
var ObjectID = require('../../ispit/node_modules/mongodb').ObjectID;

var Profile2 = mongoose.model('Profile2', {
    username: { type: String },
    password: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    address: { type: String },
    phone: { type: String },
    loggedIn: { type: Number }
});

module.exports = { Profile2 };