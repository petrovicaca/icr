const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Profile } = require('../models/profile');

// => localhost:3000/profiles/

// -------------------------------------------------------GET ALL
router.get('/', (req, res) => {
    Profile.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Profiles:' + JSON.stringify(err, undefined, 2)); }
    });
});

// -------------------------------------------------------GET BY ID
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Profile.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Profile:' + JSON.stringify(err, undefined, 2)); }
    });
});

// -------------------------------------------------------POST NEW
router.post('/', (req, res) => {
    var emp = new Profile({
        username: req.body.username,
        password: req.body.password
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Profile Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// -------------------------------------------------------EDIT OLD
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        username: req.body.username,
        password: req.body.password
    };
    Profile.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Profile Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

// ---------------------------------------------------------DELETE
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Profile.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Profile Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;