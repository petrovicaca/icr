const express = require('../../ispit/node_modules/express');
const db = require('../db');

var router = express.Router();
var ObjectId = require('../../ispit/node_modules/mongoose').Types.ObjectId;

var { Candy } = require('../models/candy');

router.get('/', (req, res) => {
    Candy.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Candies:' + JSON.stringify(err, undefined, 2)); }
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
    Profile.findOne({ name: req.params.name}, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Candy:' + JSON.stringify(err, undefined, 2)); }    
    });
});

// -------------------------------------------------------GET BY ID
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Profile.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Candy:' + JSON.stringify(err, undefined, 2)); }
    });
});

// -------------------------------------------------------POST NEW
router.post('/', (req, res) => {

    error = false;

    var candy = new Candy({
        name: req.body.name,
        weight: req.body.weight,
        price: req.body.price,
        picture: req.body.picture,
        type: req.body.type
    });
   
    Candy.findOne({name: candy.name}, (err, docs) => {
        if (!err && docs != null) {
            res.send("Candy already exists!");
            error = true;
        }
        else {
            candy.save((err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in Candy Save :' + JSON.stringify(err, undefined, 2)); }
            });
        }
    });

});

// -------------------------------------------------------EDIT OLD
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var candy = {
        name: req.body.name,
        weight: req.body.weight,
        price: req.body.price,
        picture: req.body.picture,
        type: req.body.type
    };
    
    Profile.findByIdAndUpdate(req.params.id, { $set: candy }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Candy Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

// ---------------------------------------------------------DELETE
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Profile.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Candy Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;