const mongoose = require('../../ispit/node_modules/mongoose');

var Cart = mongoose.model('Cart', {
    name: { type: String },
    candy: { type: Array}
});

module.exports = { Cart };