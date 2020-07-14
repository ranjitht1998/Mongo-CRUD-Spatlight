const express = require('express');

const router = express.Router();

var mongoose = require('mongoose');
// in mongo db there is two type of id. one is auto generated. (5f0de5ced350250430cdffe)
//based on that id we need to fetch the db. ok sir got it thanks you. done byee

var {
    User
} = require('../model/User.js');


router.get('/', (req, res) => {
    User.find((err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log('error in fetching data');
        }
    })
});

router.post('/post', (req, res) => {
    let usr = new User({
        name: req.body.name,
        id: req.body.id
    });
    usr.save((err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log('error in update');
        }
    })
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("No Record Found");
    User.findById(req.params.id, (err, data) => {
        if (!err)
            res.send(data);
        else
            console.log('Error in find user');
    })
});



router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("No Record Found");
    User.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err)
            res.send(data);
        else
            console.log("Error Inserting ProGrad Details", res.send(err));
    })
});


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("No Record Found");
    User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, doc) => {
        if (!err)
            res.send(doc);
        else
            console.log('Error in User Update :' + JSON.stringify(err, undefined, 2));
    });
});



module.exports = router;