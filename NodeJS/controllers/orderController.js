const express = require('../../ispit/node_modules/express');
const db = require('../db');
const _ = require('../../ispit/node_modules/lodash');

var router = express.Router();
var ObjectId = require('../../ispit/node_modules/mongoose').Types.ObjectId;

var { Order } = require('../models/order');

// => localhost:3000/profiles/

// -------------------------------------------------------GET ALL 
router.get('/', (req, res) => {
    Order.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Orders:' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:serial/', (req, res) => {
    Order.findOne({ serialNumber: req.params.serial}, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Orders:' + JSON.stringify(err, undefined, 2)); }    
    });
});

    
// -------------------------------------------------------GET BY ID
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    Order.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Order:' + JSON.stringify(err, undefined, 2)); }
    });
});


// -------------------------------------------------------POST NEW
router.post('/', (req, res) => {

    error = false;

    var order = new Order({
        serialNumber: req.body.serialNumber,
        deliveryTime: req.body.deliveryTime,
        price: req.body.price
    });
   
    Order.findOne({serialNumber: order.serialNumber}, (err, docs) => {
        if (!err && docs != null) {
            res.send("Order already exists!");
            error = true;
        }
        else {
            order.save((err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in Order Save :' + JSON.stringify(err, undefined, 2)); }
            });
        }
    });

});

// -------------------------------------------------------EDIT OLD
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    var order = new Order({
        serialNumber: req.body.serialNumber,
        deliveryTime: req.body.deliveryTime,
        price: req.body.price
    });

    Order.findByIdAndUpdate(req.params.id, { $set: order }, { new: true }, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Profiles:' + JSON.stringify(err, undefined, 2)); }    
    });

/*
    Profile.findByIdAndUpdate(req.params.id, { $set: profile }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Profile Update :' + JSON.stringify(err, undefined, 2)); }
    });*/
   

});

// ---------------------------------------------------------DELETE
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Order.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Profile Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



module.exports = router;