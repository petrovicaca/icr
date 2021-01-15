const mongoose = require('../../ispit/node_modules/mongoose');
var ObjectID = require('../../ispit/node_modules/mongodb').ObjectID;

var Order = mongoose.model('Order', {
    _id: { type: ObjectID },
    serialNumber: { type: String },
    deliveryTime: { type: String },
    price: { type: Number }
});

module.exports = { Order };