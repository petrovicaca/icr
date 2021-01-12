const mongoose = require('../../ispit/node_modules/mongoose');

var Candy = mongoose.model('Candy', {
    name: { type: String },
    weight: { type: String },
    calories: { type: String },
    picture: { type: String },
    type: { type: String }
});

module.exports = { Candy };