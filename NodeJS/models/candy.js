const mongoose = require('../../ispit/node_modules/mongoose');

var Candy = mongoose.model('Candy', {
    name: { type: String },
    description: { type: String },
    weight: { type: Number },
    price: { type: Number },
    picture: { type: String },
    category: { type: String },
    description: { type: String },
    shipping: { type: Number},
    rating: { type: Number}
});

module.exports = { Candy };