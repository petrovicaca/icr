const mongoose = require('../../ispit/node_modules/mongoose');

var Profile = mongoose.model('Profile', {
    username: { type: String },
    password: { type: String }
});

module.exports = { Profile };