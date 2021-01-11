const mongoose = require('../../ispit/node_modules/mongoose');

var Profile = mongoose.model('Profile', {
    username: { type: String },
    password: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    address: { type: String },
    phone: { type: String }
});

module.exports = { Profile };