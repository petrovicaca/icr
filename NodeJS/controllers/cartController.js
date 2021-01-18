const express = require('../../ispit/node_modules/express');
const db = require('../db');

var router = express.Router();
var ObjectId = require('../../ispit/node_modules/mongoose').Types.ObjectId;

var { Cart } = require('../models/cart');

router.get('/', (req, res) => {
    Cart.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Carts:' + JSON.stringify(err, undefined, 2)); }
    });
});

/*
router.get('/:username/:password', (req, res) => {
    Profile.findOne({ username: req.params.username, password: req.params.password}, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Profiles:' + JSON.stringify(err, undefined, 2)); }    
    });
});
*/

router.get('/:name/', (req, res) => {
    Cart.findOne({ name: req.params.name}, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Cart:' + JSON.stringify(err, undefined, 2)); }    
    });
});

// -------------------------------------------------------GET BY ID
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Cart.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Cart:' + JSON.stringify(err, undefined, 2)); }
    });
});

// -------------------------------------------------------POST NEW
router.post('/', (req, res) => {

    error = false;
    
    var cart = new Cart(req.body);
   
    Cart.findOne({name: cart.name}, (err, docs) => {
        if (!err && docs != null) {
            res.send("Cart already exists!");
            error = true;
        }
        else {
            cart.save((err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in Cart Save :' + JSON.stringify(err, undefined, 2)); }
            });
        }
    });

});

// -------------------------------------------------------EDIT OLD
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var cart = {
        name: req.body.name,
        candy: req.body.candy
    };
    
    Cart.findByIdAndUpdate(req.params.id, { $set: cart }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Cart Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

// ---------------------------------------------------------DELETE
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Cart.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Cart Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;