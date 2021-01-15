const express = require('../../ispit/node_modules/express');
const db = require('../db');
const _ = require('../../ispit/node_modules/lodash');

var router = express.Router();
var ObjectId = require('../../ispit/node_modules/mongoose').Types.ObjectId;

var { Profile } = require('../models/profile');

// => localhost:3000/profiles/

// -------------------------------------------------------GET ALL 
router.get('/', (req, res) => {
    Profile.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Profiles:' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:username/:password', (req, res) => {
    Profile.findOne({ username: req.params.username, password: req.params.password}, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Profiles:' + JSON.stringify(err, undefined, 2)); }    
    });
});

router.get('/:username/', (req, res) => {
    Profile.findOne({ username: req.params.username}, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Profiles:' + JSON.stringify(err, undefined, 2)); }    
    });
});


// Vratiti ulogvanog korisnika koji može samo postojati jedan
router.get('/:loggedIn/', (req, res) => {
    Profile.findOne({ loggedIn: 1}, (err, docs) => {
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

    error = false;

    var profile = new Profile({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.body.phone,
        loggedIn: 0
    });
   
    Profile.findOne({username: profile.username}, (err, docs) => {
        if (!err && docs != null) {
            res.send("User already exists!");
            error = true;
        }
        else {
            profile.save((err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in Profile Save :' + JSON.stringify(err, undefined, 2)); }
            });
        }
    });

});

// -------------------------------------------------------EDIT OLD
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    var profile = {
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.body.phone,
        loggedIn: req.body.loggedIn
    };

    Profile.findByIdAndUpdate(req.params.id, { $set: profile }, { new: true }, (err, docs) => {
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

        Profile.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Profile Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



module.exports = router;